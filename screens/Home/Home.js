import React, { useEffect, useState } from 'react';
import {
  ImageBackground,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import globalStyle from '../../assets/globalStyle';
import style from "./style"
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { scaleFontSize } from '../../assets/scaling';
import { useNavigation, useRoute } from '@react-navigation/native';
import ImageCard from '../../component/ImageCard/ImageCard';
import StoryText from '../../component/StoryText/StoryText';
import { getStory } from '../../api/service/apiService';

const Home = () => {
  const navigation = useNavigation();


  return (
    <SafeAreaView
      style={globalStyle.flex}>

      {/* Background */}
      <ImageBackground
        style={style.image}
        source={require('../../assets/images/background.png')}/>

      {/* BackButton */}
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={style.backButtonContainer}>
        <FontAwesomeIcon icon={faArrowLeft} size={scaleFontSize(28)} color={"black"}/>
      </TouchableOpacity>

      {/* StoryImage */}
      <ImageCard />

      {/* StoryText */}
      <StoryText />

      <View style={style.bottomContainer}>

        {/* Previous */}
        <TouchableOpacity>
          <Text style={style.bottomText}>Previous</Text>
        </TouchableOpacity>
        <Text style={style.bottomText}>1/9</Text>

        {/* Next */}
        <TouchableOpacity>
          <Text style={style.bottomText}>Next</Text>
        </TouchableOpacity>

      </View>

    </SafeAreaView>
  )
}

export default Home;