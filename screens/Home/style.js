import { StyleSheet } from 'react-native';
import {
  backgroundImageHeight,
  backgroundImageWidth,
  horizontalScale, scaleFontSize,
  verticalScale,
} from '../../assets/scaling';

const style = StyleSheet.create({
  image: {
    position: 'absolute',
    width: backgroundImageWidth(35),
    height: backgroundImageHeight(35),
  },
  backButtonContainer: {
    width: horizontalScale(35),
    height: verticalScale(35),
    borderRadius: horizontalScale(10),
    backgroundColor: 'white',
    marginTop: verticalScale(12),
    marginLeft: horizontalScale(12),
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: horizontalScale(20),
    marginVertical: verticalScale(32),
    padding: horizontalScale(6),
  },
  bottomText: {
    fontSize: scaleFontSize(18),
    fontWeight: 'bold',
    color: "rgba(237,232,232,0.56)",
  },
})

export default style