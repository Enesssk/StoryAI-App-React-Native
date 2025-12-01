import { StyleSheet } from 'react-native';
import {
  backgroundImageHeight,
  backgroundImageWidth,
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../assets/scaling';

const style = StyleSheet.create({
  image: {
    position: "absolute",
    width: backgroundImageWidth(35),
    height: backgroundImageHeight(35),
  },
  textContainer: {
    alignItems: "center",
    gap: horizontalScale(12),
    marginHorizontal: horizontalScale(32),
  },
  titleText: {
    fontSize: scaleFontSize(36),
    fontWeight: 'bold',
    color: "white",
    textAlign: "center",
  },
  descText: {
    fontSize: scaleFontSize(22),
    fontWeight: 'bold',
    color: "#cac4c4",
    textAlign: "center",
  },
  textInputContainer: {
    width: "90%",
    height: verticalScale(48),
    borderRadius: horizontalScale(16),
    backgroundColor: "white",
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center",
  },
  textInput: {
    color: "black",
    fontSize: scaleFontSize(14),
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: "black",
    width: "90%",
    height: verticalScale(48),
    borderRadius: horizontalScale(16),
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginTop: verticalScale(24),
    marginHorizontal: horizontalScale(16),
  },
  buttonText: {
    fontSize: scaleFontSize(16),
    fontWeight: 'bold',
    color: "white",
  }
})

export default style