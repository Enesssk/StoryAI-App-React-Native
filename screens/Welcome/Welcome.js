import React, { useCallback, useState} from "react"
import {
  Alert,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import globalStyle from '../../assets/globalStyle';
import style from "./style"
import Animated, {
  FadeInDown,
  FadeInRight,
} from 'react-native-reanimated';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { Routes } from '../../navigation/Routes';
import { useGenerateStory } from '../../hooks/useGenerateStory';
import Loading from '../../component/LoadingContainer/Loading';
import * as Promise from 'axios';

const Welcome = () => {
  const navigation = useNavigation();
  const [value, setValue] = useState("");

  useFocusEffect(
    useCallback(() => {
      //screen is focused
      setValue("")

      return () => {
        //screen gone
      }
    }, [])
  )

  const { mutate, isPending, } = useGenerateStory({
    onSuccess: async ( data ) => {
      navigation.navigate(Routes.Home, { story: data }) // data = storyText and images
    },
    onError: ( error ) => {
      if (error?.response) {
        Alert.alert("API Error", error.message);
      } else {
        console.log("UI error ignored:", error.message);
      }
    }
  })

  const handleStory = async () => {

    if(value.trim().length <= 3) {
      Alert.alert("Warning", "Please write something")
      return
    }

    const userContents = [{
      role: "user",
      parts: [{ text: `Write a children's story with six chapters on a specific ${value.trim()}
    Rules:
    - Divide the story into exactly 6 parts.
    - Each part should describe one scene.
    - All parts must be the same length.
    - Each part must be short (around 3–4 sentences).
    - Do not write long paragraphs.
    - Output ONLY in the following JSON format:
    
    JSON format:
    {
      "story": [
        { "id": 1, "title": "Beginning", "text": "..." },
        { "id": 2, "title": "The Adventure Begins", "text": "..." },
        { "id": 3, "title": "Difficulty", "text": "..." },
        { "id": 4, "title": "Hope", "text": "..." },
        { "id": 5, "title": "Solution", "text": "..." },
        { "id": 6, "title": "Happy Ending", "text": "..." }
        ]
        }`
      }]
    }]

    mutate(userContents) // mutate = run it

  }

  return (
    <Animated.View
      entering={FadeInDown.delay(200).springify()}
      style={[globalStyle.flex, globalStyle.appBackground, globalStyle.justifyContent]}>

        {/* App Background */}
        <Image
          style={style.image}
          source={require('../../assets/images/appbackground.png')} />

        {/* Title */}
        <Animated.View
          entering={FadeInDown.delay(300).springify()}
          style={style.textContainer}>
          <Text style={style.titleText}>AI That Writes for you</Text>
          <Text style={style.descText}>Stories made from your ideas</Text>
        </Animated.View>

      <Animated.View
        entering={FadeInRight.delay(300).springify()}>
        {/* TextInput */}
        <View style={style.textInputContainer}>
          <TextInput
            style={style.textInput}
            placeholder={"Write something.."}
            value={value}
            onChangeText={(val) => setValue(val)}
          />
        </View>

        {/* Button */}
        <TouchableOpacity
          onPress={handleStory}
          disabled={isPending}
          style={[style.button, isPending && {opacity: 0.6}]}>
          {
            isPending ? (
              <Loading />
            ) : (
              <Text style={style.buttonText}>Generate Story</Text>
            )
          }
        </TouchableOpacity>
      </Animated.View>



    </Animated.View>
  )
}

export default Welcome