import { StackNavigator } from 'react-navigation'
import SampleAScreen from '../containers/SampleAScreen'
import SampleBScreen from '../containers/SampleBScreen'
import SampleCScreen from '../containers/SampleCScreen'
import SampleDScreen from '../containers/SampleDScreen'
import SampleEScreen from '../containers/SampleEScreen'

const AppNavigator = StackNavigator({
  SampleA: { screen: SampleAScreen },
  SampleB: { screen: SampleBScreen },
  SampleC: { screen: SampleCScreen },
  SampleD: { screen: SampleDScreen },
  SampleE: { screen: SampleEScreen },
})

export const landscapeOrientationScreens = ['SampleB', 'SampleC']
export default AppNavigator
