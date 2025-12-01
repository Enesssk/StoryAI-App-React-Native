import { StyleSheet } from 'react-native';
import { verticalScale } from './scaling';

const style = StyleSheet.create({
  flex: {
    flex: 1,
  },
  appBackground: {
    backgroundColor: 'white',
  },
  scrollView: {
    paddingBottom: verticalScale(16),
  },
})

export default style