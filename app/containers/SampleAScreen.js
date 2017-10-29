import React, { Component } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import Orientation from 'react-native-orientation'

class SampleAScreen extends Component {
  static navigationOptions = {
    title: 'サンプルA-縦固定',
  }

  constructor() {
    super();
    this.state = { pageVisible: true }
  }

  componentDidMount() {
    if(this.state.pageVisible) Orientation.lockToPortrait();
  }

  componentDidUpdate() {
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
          <Text>サンプルBへ</Text>
        </TouchableOpacity>
      </View>
    ) : <View />
  }

  _onPressButton() {
      Orientation.getSpecificOrientation((err, specificOrientation) => {
        console.log(`Current Orientation is ${specificOrientation}`);
      })
    Orientation.lockToLandscapeLeft()
    // this.props.navigation.navigate('SampleB', { show: this.show })
    // this.hide()
  }

  show = () => this.setState({ pageVisible: true })
  hide = () => this.setState({ pageVisible: false })
}

export default SampleAScreen
