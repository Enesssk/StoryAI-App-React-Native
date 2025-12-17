import React from "react"
import { Image, View } from 'react-native';
import style from "./style"
import PropTypes from "prop-types"

const ImageCard = props => {
  if (!props.image) {
    return (
      <View style={style.topContainer}>
        <View style={style.imageContainer} />
      </View>
    );
  }

  return (
    <View style={style.topContainer}>
      <View style={style.imageContainer}>
        <Image
          style={style.image}
          source={{ uri: props.image, cache: "force-cache" }}
          resizeMode="cover"
          progressiveRenderingEnabled
        />
      </View>
    </View>
  );
}

ImageCard.propTypes = {
  image: PropTypes.string,
}

export default ImageCard;