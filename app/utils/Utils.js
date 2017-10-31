import Orientation from 'react-native-orientation';
import { landscapeOrientationScreens } from '../navigators/AppNavigator';

const lockToPortrait = (orientation) => {
  console.error(`!!! lockToPortrait: ${orientation} !!!`)
  if(orientation !== 'PORTRAIT') Orientation.lockToPortrait()
}

const lockToLandscapeLeft = (orientation) => {
  console.error(`!!! lockToLandscapeLeft: ${orientation} !!!`)
  if(orientation !== 'LANDSCAPE-LEFT') Orientation.lockToLandscapeLeft()
}

const removeOrientationListener = () => {
  Orientation.removeSpecificOrientationListener(lockToPortrait)
  Orientation.removeSpecificOrientationListener(lockToLandscapeLeft)
}

export const handleOrientation = (currentRouteName) => {
  // 毎回remove/addはなんか嫌
  // 前回と同じならremoveしないでそのままにしたい
  removeOrientationListener()
  if(landscapeOrientationScreens.includes(currentRouteName)) {
    lockToLandscapeLeft()
    Orientation.addSpecificOrientationListener(lockToLandscapeLeft)
  } else {
    lockToPortrait()
    Orientation.addSpecificOrientationListener(lockToPortrait)
  }
}

export const onNavigationStateChange = (prevState, currentState, action) => {
  const routes = currentState.routes;
  const currentRouteName = routes[routes.length - 1].routeName;
  handleOrientation(currentRouteName);
}
