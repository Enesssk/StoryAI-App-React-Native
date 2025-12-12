import React, { useState} from "react"
import { Text, View } from 'react-native';
import PropTypes from "prop-types"
import style from "./style"

const StoryText = props => {
  const data = Array.isArray(props.data) ? props.data : [];


  return (
    <View style={style.topContainer}>
      <Text style={style.text}>{data.text}</Text>
    </View>
  )
}

StoryText.propTypes = {
  data: PropTypes.shape({
    text: PropTypes.string.isRequired,
  })
}

export default StoryText