import React, { Component } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

class SampleAScreen extends Component {
  static navigationOptions = { title: 'サンプルA-縦固定' }

  _onPressButton = () => this.props.navigation.navigate('SampleB')

  render() {
    return (
      <View style={{ flex: 1 }}>
        <TouchableOpacity style={{ flex: 1 }} onPress={this._onPressButton}>
          <Text>サンプルBへ</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default SampleAScreen
