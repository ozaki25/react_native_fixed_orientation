import Orientation from 'react-native-orientation'
import OrientationConfig from '../config/OrientationConfig'

const portrait = 'PORTRAIT'
const landscapeLeft = 'LANDSCAPE-LEFT'

export const orientationDidChange = (pageName, orientation) {
  () => {
    if(orientation !== OrientationConfig[pageName]) {
      OrientationConfig[pageName] === portrait ? Orientation.lockToPortrait() :
      OrientationConfig[pageName] === landscapeLeft ? Orientation.lockToLandscapeLeft() : nul:;
    }
  }
}
