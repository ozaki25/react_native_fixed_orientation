import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import Orientation from 'react-native-orientation';
import AppNavigator from './app/navigators/AppNavigator';
import { onNavigationStateChange } from './app/utils/Utils';

class ReactNativeSample extends Component {
  componentWillMount() {
    Orientation.lockToPortrait();
  }

  render() {
    return <AppNavigator onNavigationStateChange={onNavigationStateChange} />;
  }
}

AppRegistry.registerComponent('ReactNativeSample', () => ReactNativeSample);
