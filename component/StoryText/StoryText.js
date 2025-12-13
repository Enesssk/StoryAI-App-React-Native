import React from "react"
import { Text, View } from 'react-native';
import PropTypes from "prop-types"
import style from "./style"

const StoryText = props => {
  return (
    <View style={style.topContainer}>
      <Text style={style.text}>{props.storyText}</Text>
    </View>
  )
}

StoryText.propTypes = {
  storyText: PropTypes.string.isRequired,
}

export default StoryText