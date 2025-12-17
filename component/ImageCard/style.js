import { StyleSheet } from 'react-native'
import { horizontalScale, verticalScale } from '../../assets/scaling';

const style = StyleSheet.create({
  topContainer: {
    justifyContent: 'center',
    alignSelf: "center",
  },
  imageContainer: {
    borderRadius: horizontalScale(14),
    overflow: "hidden",
    marginTop: verticalScale(16),
    width: horizontalScale(300),
    height: verticalScale(300),
    backgroundColor: "rgba(37,36,36,0.3)",
  },
  image: {
    width: horizontalScale(300),
    height: verticalScale(300),
  }
})

export default style