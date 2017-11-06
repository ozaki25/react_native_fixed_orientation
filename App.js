import React, { Component } from 'react';
import Orientation from 'react-native-orientation';
import AppNavigator from './app/navigators/AppNavigator';
import { onNavigationStateChange } from './app/utils/OrientationUtil';

class App extends Component {
  componentWillMount() {
    Orientation.lockToPortrait();
  }

  render() {
    return <AppNavigator onNavigationStateChange={onNavigationStateChange} />;
  }
}

export default App
