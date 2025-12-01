import { StyleSheet } from 'react-native'
import { horizontalScale, verticalScale } from '../../assets/scaling';

const style = StyleSheet.create({
  topContainer: {
    justifyContent: 'center',
    alignSelf: "center",
  },
  imageContainer: {
    borderRadius: horizontalScale(10),
    marginTop: verticalScale(16),
  },
  image: {
    width: horizontalScale(300),
    height: verticalScale(300),
    resizeMode: "contain"
  }
})

export default style