import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { StackNavigator, NavigationActions } from 'react-navigation'
import SampleAScreen from '../containers/SampleAScreen'
import SampleBScreen from '../containers/SampleBScreen'
import SampleCScreen from '../containers/SampleCScreen'

const goBack = (navigation) => () => {
  if(navigation.state.params) {
    console.log("##########Show#############")
    navigation.state.params.show()
  }
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
  navigationOptions: ({ navigation, screenProps }) => ({
    headerLeft: headerLeft(navigation, screenProps),
    title: '',
  })
})

const defaultGetStateForAction = AppNavigator.router.getStateForAction

AppNavigator.router.getStateForAction = (action, state) => {
  if(state && action.type === NavigationActions.BACK) {
  }
  console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!')
  console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!')
  console.log(JSON.stringify(action))
  console.log(JSON.stringify(state))
  console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!')
  console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!')
  return defaultGetStateForAction(action, state)
}

export const landscapeOrientationScreens = ['SampleB']
export default AppNavigator
