import { DeviceInfo, Dimensions } from 'react-native';

const {width, height} = Dimensions.get('window');

const isSmall = width <= 375 && !DeviceInfo.hasNotch()

const guidelineBaseWidth = () => {
  if (isSmall) {
    return 330
  }
  return 350
}

const horizontalScale = size => (width/guidelineBaseWidth()) * size

const guidelineBaseHeight = () => {
  if(isSmall) {
    return 550
  } else if (width > 410) {
    return 620
  }
  return 680
}

const verticalScale = size => (height/guidelineBaseHeight()) * size

const guidelineBaseFonts = () => {
  if (width > 410) {
    return 430
  }
  return 400
}
const scaleFontSize = size => Math.round((width/guidelineBaseFonts())* size)

export const backgroundImageWidth = value => horizontalScale((width*value)/35)
export const backgroundImageHeight = value => horizontalScale((height*value)/35)

export {horizontalScale, verticalScale, scaleFontSize}