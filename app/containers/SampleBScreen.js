import React, { Component } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

class SampleBScreen extends Component {
  static navigationOptions = {
    title: 'サンプルB-横固定',
  }

  render() {
    return (
      <View>
        <TouchableOpacity onPress={this._onPressButton.bind(this)}>
          <Text>サンプルCへ</Text>
        </TouchableOpacity>
      </View>
    )
  }

  _onPressButton() {
    this.props.navigation.navigate('SampleC')
  }
}

export default SampleBScreen
