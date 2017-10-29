import Orientation from 'react-native-orientation';
import { landscapeOrientationScreens } from '../navigators/AppNavigator';

const handleOrientation = (currentRouteName) => {
  landscapeOrientationScreens.includes(currentRouteName) ? Orientation.lockToLandscapeLeft() : Orientation.lockToPortrait();
}

export const onNavigationStateChange = (prevState, currentState, action) => {
  const routes = currentState.routes;
  const currentRouteName = routes[routes.length - 1].routeName;
  handleOrientation(currentRouteName);
}
