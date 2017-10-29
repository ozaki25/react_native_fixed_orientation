import React, { Component } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import Orientation from 'react-native-orientation'

class SampleBScreen extends Component {
  static navigationOptions = {
    title: 'サンプルB-横固定',
  }

  constructor() {
    super();
    this.state = { pageVisible: true }
  }

  componentDidMount() {
    if(this.state.pageVisible) Orientation.lockToLandscapeLeft()
  }

  componentDidUpdate() {
    if(this.state.pageVisible) {
      Orientation.getSpecificOrientation((err, specificOrientation) => {
        console.log(`Current Orientation is ${specificOrientation}`);
        if(specificOrientation !== 'LANDSCAPE-LEFT') Orientation.lockToLandscapeLeft();
      })
    }
  }

  render() {
    return this.state.pageVisible ? (
      <View>
        <TouchableOpacity onPress={this._onPressButton.bind(this)}>
          <Text>サンプルCへ</Text>
        </TouchableOpacity>
      </View>
    ) : <View />
  }

  _onPressButton() {
    this.props.navigation.navigate('SampleC', { show: this.show })
    this.hide()
  }

  show = () => this.setState({ pageVisible: true })
  hide = () => this.setState({ pageVisible: false })
}

export default SampleBScreen
