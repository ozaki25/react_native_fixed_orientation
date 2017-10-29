import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import AppNavigator from './app/navigators/AppNavigator';
import { onNavigationStateChange } from './app/utils/Utils';

class ReactNativeSample extends Component {
  render() {
    return <AppNavigator onNavigationStateChange={onNavigationStateChange} />;
  }
}

AppRegistry.registerComponent('ReactNativeSample', () => ReactNativeSample);
