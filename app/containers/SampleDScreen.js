import React, { Component } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

class SampleDScreen extends Component {
  static navigationOptions = { title: 'サンプルD-縦固定' }

  _onPressButton = () => this.props.navigation.navigate('SampleE')

  render() {
    return (
      <View style={{ flex: 1 }}>
        <TouchableOpacity style={{ flex: 1 }} onPress={this._onPressButton}>
          <Text>サンプルEへ</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default SampleDScreen
