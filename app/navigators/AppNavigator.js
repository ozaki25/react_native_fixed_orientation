import { StackNavigator } from 'react-navigation'
import SampleAScreen from '../containers/SampleAScreen'
import SampleBScreen from '../containers/SampleBScreen'
import SampleCScreen from '../containers/SampleCScreen'

const AppNavigator = StackNavigator({
  SampleA: { screen: SampleAScreen },
  SampleB: { screen: SampleBScreen },
  SampleC: { screen: SampleCScreen },
})

export const landscapeOrientationScreens = ['SampleB']
export default AppNavigator
