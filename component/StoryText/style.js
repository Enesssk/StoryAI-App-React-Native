import { StyleSheet } from 'react-native';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../assets/scaling';

const style = StyleSheet.create({
  topContainer: {
    alignItems: "flex-start"
  },
  text: {
    fontSize: scaleFontSize(18),
    fontWeight: 600,
    color: "white",
    textAlign: "left",
    padding: horizontalScale(3),
  }
})

export default style