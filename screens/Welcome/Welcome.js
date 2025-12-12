import React, { useState} from "react"
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
import { useNavigation } from '@react-navigation/native';
import { Routes } from '../../navigation/Routes';
import { getStory } from '../../api/service/apiService';

const Welcome = () => {
  const navigation = useNavigation();
  const [value, setValue] = useState("");



  const handleStory = async () => {
    if (value.length > 3) {
      try {
        const storyTopic = value.trim()
        const userContents = [{
          role: "user",
          parts: [{ text: `Write a two-paragraph children's story about ${storyTopic}.`
          }]
        }]
        const userStory = await getStory(userContents)
        console.log(userStory)
        navigation.navigate(Routes.Home)
      }catch (err) {
        console.log("welcome error", err);
      }
    } else {
      Alert.alert("Warning!",
        "Please write a something.", "Ok",)
    }
  }

  return (
    <Animated.View
      entering={FadeInDown.delay(200).springify()}
      style={[globalStyle.flex, globalStyle.appBackground, globalStyle.justifyContent]}>

        {/* App Background */}
        <Image
          style={style.image}
          source={require('../../assets/images/background.png')}/>

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
          style={style.button}>
            <Text style={style.buttonText}>Generate Story</Text>
        </TouchableOpacity>
      </Animated.View>



    </Animated.View>
  )
}

export default Welcome