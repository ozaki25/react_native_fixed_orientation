import React from 'react';
import { AppRegistry } from 'react-native';
import AppNavigator from './app/navigators/AppNavigator';
import { onNavigationStateChange } from './app/utils/Utils';

const ReactNativeSample = () => <AppNavigator onNavigationStateChange={onNavigationStateChange} />

AppRegistry.registerComponent('ReactNativeSample', () => ReactNativeSample);
