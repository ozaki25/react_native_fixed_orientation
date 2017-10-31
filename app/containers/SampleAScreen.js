import React, { Component } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

class SampleAScreen extends Component {
  static navigationOptions = {
    title: 'サンプルA-縦固定',
  }

  render() {
    return (
      <View>
        <TouchableOpacity onPress={this._onPressButton.bind(this)}>
          <Text>サンプルBへ</Text>
        </TouchableOpacity>
      </View>
    )
  }

  _onPressButton() {
    this.props.navigation.navigate('SampleB')
  }
}

export default SampleAScreen
