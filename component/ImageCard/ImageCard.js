import React from "react"
import { Image, Text, View } from 'react-native';
import style from "./style"

const ImageCard = () => {
  return (
    <View style={style.topContainer}>
      <View style={style.imageContainer}>
        <Image
          style={style.image}
          source={require('../../assets/images/homeimage.png')}
        />
      </View>
    </View>
  )
}

export default ImageCard;