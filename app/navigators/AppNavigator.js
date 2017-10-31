import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { StackNavigator, NavigationActions } from 'react-navigation'
import SampleAScreen from '../containers/SampleAScreen'
import SampleBScreen from '../containers/SampleBScreen'
import SampleCScreen from '../containers/SampleCScreen'

const goBack = (navigation) => () => {
  navigation.goBack()
}

const headerLeft = (navigation, screenProps) => (
  <TouchableOpacity onPress={goBack(navigation)}>
    <Text>＜</Text>
  </TouchableOpacity>
)

const AppNavigator = StackNavigator({
  SampleA: { screen: SampleAScreen },
  SampleB: { screen: SampleBScreen },
  SampleC: { screen: SampleCScreen },
}, {
  navigationOptions: ({ navigation }) => ({
    headerLeft: headerLeft(navigation),
  })
})

export const landscapeOrientationScreens = ['SampleB']
export default AppNavigator
