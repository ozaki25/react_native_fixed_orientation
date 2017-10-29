import React, { Component } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { NavigationActions } from 'react-navigation'
import Orientation from 'react-native-orientation'

class SampleCScreen extends Component {
  static navigationOptions = {
    title: 'サンプルC-縦固定',
  }

  constructor() {
    super();
    this.state = { pageVisible: true }
  }

  componentWillMount() {
    if(this.state.pageVisible) Orientation.lockToPortrait();
  }

  componentWillUpdate() {
    if(this.state.pageVisible) {
      Orientation.getSpecificOrientation((err, specificOrientation) => {
        console.log(`Current Orientation is ${specificOrientation}`);
        if(specificOrientation !== 'PORTRAIT') Orientation.lockToPortrait();
      })
    }
  }

  render() {
    return this.state.pageVisible ? (
      <View>
        <TouchableOpacity onPress={this._onPressButton.bind(this)}>
          <Text>サンプルAへ戻る</Text>
        </TouchableOpacity>
      </View>
    ) : <View />
  }

  _onPressButton() {
    this.props.navigation.dispatch(
      NavigationActions.reset({
        index: 0,
        actions: [
          NavigationActions.navigate({ routeName: 'SampleA' }),
        ],
      }),
    )
    this.hide()
  }

  show = () => this.setState({ pageVisible: true })
  hide = () => this.setState({ pageVisible: false })
}

export default SampleCScreen
