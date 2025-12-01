import React from "react"
import {
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

const Welcome = () => {
  const navigation = useNavigation();

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
          />
        </View>

        {/* Button */}
        <TouchableOpacity
          onPress={() => navigation.navigate(Routes.Home)}
          style={style.button}>
            <Text style={style.buttonText}>Generate Story</Text>
        </TouchableOpacity>
      </Animated.View>



    </Animated.View>
  )
}

export default Welcome