import { StyleSheet } from 'react-native';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../assets/scaling';

const style = StyleSheet.create({
  topContainer: {
    marginVertical: verticalScale(4),
    marginHorizontal: horizontalScale(20),
    alignItems: "flex-start"
  },
  text: {
    fontSize: scaleFontSize(18),
    fontWeight: 'bold',
    color: "white",
    textAlign: "left",
    padding: horizontalScale(6),
  }
})

export default style