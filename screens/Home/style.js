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
    width: horizontalScale(30),
    height: verticalScale(30),
    borderRadius: horizontalScale(10),
    backgroundColor: 'black',
    marginTop: verticalScale(12),
    marginLeft: horizontalScale(20),
    alignItems: 'center',
    justifyContent: 'center',
  },
  storyTextContainer: {
    flex: 1,
    overflow: 'hidden',
  },
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: horizontalScale(20),
    marginBottom: verticalScale(8),
    padding: horizontalScale(6),
  },
  bottomText: {
    fontSize: scaleFontSize(18),
    fontWeight: 600,
    color: "rgba(248,237,237,0.74)",
  },
  prevButton: {
    paddingHorizontal: horizontalScale(8),
    paddingVertical: verticalScale(8),
    borderRadius: horizontalScale(8),
    backgroundColor: "#000"
  },
  textContainer: {
    paddingVertical: verticalScale(8),
  },
  page: {
    flex: 1,
    marginHorizontal: horizontalScale(20),
    marginVertical: verticalScale(8),
    borderRadius: horizontalScale(16),
    padding: horizontalScale(12),
    backgroundColor: 'rgba(0,0,0,0.18)',
  },

  pageShadowRight: {
    shadowColor: '#000',
    shadowOffset: { width: -10, height: 0 },
    shadowOpacity: 0.25,
    shadowRadius: 14,
    elevation: 10,
  },

  pageShadowLeft: {
    shadowColor: '#000',
    shadowOffset: { width: 10, height: 0 },
    shadowOpacity: 0.25,
    shadowRadius: 14,
    elevation: 10,
  },

})

export default style