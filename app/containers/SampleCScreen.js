import React, { Component } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { NavigationActions } from 'react-navigation'

class SampleCScreen extends Component {
  static navigationOptions = {
    title: 'サンプルC',
  }

  render() {
    return (
      <View>
        <TouchableOpacity onPress={this._onPressButton.bind(this)}>
          <Text>サンプルAに戻る</Text>
        </TouchableOpacity>
      </View>
    )
  }

  _onPressButton() {
    this.props.navigation.dispatch(
      NavigationActions.reset({
        index: 0,
        actions: [
          NavigationActions.navigate({ routeName: 'SampleA' })
        ]
      })
    )
  }
}

export default SampleCScreen