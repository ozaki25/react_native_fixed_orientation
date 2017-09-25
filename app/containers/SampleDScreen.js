import React, { Component } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { NavigationActions } from 'react-navigation'

class SampleDScreen extends Component {
  static navigationOptions = {
    title: 'サンプルD',
  }

  render() {
    return (
      <View>
        <TouchableOpacity onPress={this._onPressButton.bind(this)}>
          <Text>サンプルEへ</Text>
        </TouchableOpacity>
      </View>
    )
  }

  _onPressButton() {
    this.props.navigation.dispatch(
      NavigationActions.navigate({ routeName: 'SampleE' })
    )
  }
}

export default SampleDScreen
