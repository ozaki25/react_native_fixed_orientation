import React, { Component } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

class SampleBScreen extends Component {
  static navigationOptions = { title: 'サンプルB-横固定' }

  _onPressButton = () => this.props.navigation.navigate('SampleC')

  render() {
    return (
      <View style={{ flex: 1 }}>
        <TouchableOpacity style={{ flex: 1 }} onPress={this._onPressButton}>
          <Text testID="go_to_samplec">サンプルCへ</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default SampleBScreen
