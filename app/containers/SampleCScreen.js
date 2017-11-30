import React, { Component } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

class SampleCScreen extends Component {
  static navigationOptions = { title: 'サンプルC-横固定' }

  _onPressButton = () => this.props.navigation.navigate('SampleD')

  render() {
    return (
      <View style={{ flex: 1 }}>
        <TouchableOpacity style={{ flex: 1 }} onPress={this._onPressButton}>
          <Text testID="go_to_sampled">サンプルDへ</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default SampleCScreen
