import React, { Component } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { NavigationActions } from 'react-navigation'

class SampleEScreen extends Component {
  static navigationOptions = { title: 'サンプルE-縦固定' }

  _onPressButton = () => {
    this.props.navigation.dispatch(
      NavigationActions.reset({
        index: 0,
        actions: [
          NavigationActions.navigate({ routeName: 'SampleA' }),
        ],
      }),
    )
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <TouchableOpacity style={{ flex: 1 }} onPress={this._onPressButton}>
          <Text testID="back_to_samplea">サンプルAに戻る</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default SampleEScreen
