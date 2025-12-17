import React, { useRef, useState } from 'react';
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
import Reanimated, {
  FadeInDown,
  FadeInLeft,
  FadeInRight,
  FadeOutLeft,
  FadeOutRight,
} from 'react-native-reanimated';
import Animated from 'react-native-reanimated';

const Home = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const story = route.params?.story ?? []
  const [index, setIndex] = useState(0);
  const direction = useRef(1);
  const pageKey = `page-${index}`
  const imageKey = `image-${index}`


  const currentIndex = story[index]

  const next = () => {
    if (index < story.length-1) {
      direction.current = 1
      setIndex(i => i + 1)
    }
  }

  const prev = async () => {
    if (index > 0) {
      direction.current = -1;
      setIndex(i => i - 1)
    }
  }


  return (
    <SafeAreaView
      style={globalStyle.flex}>

      {/* Background */}
      <ImageBackground
        style={style.image}
        source={require('../../assets/images/background_app.png')}/>

      <Animated.View
        entering={FadeInDown.delay(300).springify()}
        style={globalStyle.flex}>

      {/* BackButton */}
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={style.backButtonContainer}>
        <FontAwesomeIcon icon={faArrowLeft} size={scaleFontSize(26)} color={"white"}/>
      </TouchableOpacity>

      {/* StoryImage */}
        <Animated.View
          key={pageKey}
          entering={
            direction.current === 1
              ? FadeInRight.duration(280)
              : FadeInLeft.duration(280)
          }
          exiting={
            direction.current === 1
              ? FadeOutLeft.duration(220)
              : FadeOutRight.duration(220)
          }
        >
            <ImageCard image={currentIndex.image ?? null}/>
        </Animated.View>

        {/* StoryText */}
        <View style={style.storyTextContainer}>
          <Animated.View
            key={pageKey}
            entering={
              direction.current === 1
                ? FadeInRight.duration(280)
                : FadeInLeft.duration(280)
            }
            exiting={
              direction.current === 1
                ? FadeOutLeft.duration(220)
                : FadeOutRight.duration(220)
            }
            style={[
              style.page,
              direction.current === 1 ? style.pageShadowRight : style.pageShadowLeft,
            ]}
          >
            <StoryText storyText={currentIndex.text ?? ""} />
          </Animated.View>
        </View>

        <Animated.View
        entering={FadeInRight.delay(200).springify()}
        style={style.bottomContainer}>

        {/* Previous */}
        <TouchableOpacity
          onPress={prev}
          style={ index === 0 ? [style.prevButton, {opacity: 0.6}] : style.prevButton}
          disabled={index === 0}
        >
          <Text style={style.bottomText}>Previous</Text>
        </TouchableOpacity>

        <View style={style.textContainer}>
          <Text style={style.bottomText}>{currentIndex.id}/{story.length}</Text>`

        </View>
        {/* Next */}
        <TouchableOpacity
          onPress={next}
          disabled={index === story.length-1}
          style={index === story.length - 1 ? [style.prevButton, {opacity: 0.6}] : style.prevButton}
        >
          <Text style={style.bottomText}>Next</Text>
        </TouchableOpacity>

      </Animated.View>
      </Animated.View>

    </SafeAreaView>
  )
}

export default Home;