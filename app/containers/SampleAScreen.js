import React, { Component } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import Orientation from 'react-native-orientation'

class SampleAScreen extends Component {
  static navigationOptions = {
    title: 'サンプルA-縦固定',
  }

  orientationDidChange = (orientation) => {
    if(orientation !== 'PORTRAIT') {
      Orientation.lockToPortrait()
    } else {
      this.setState({ orientation })
    }
  }

  constructor() {
    super();
    this.state = { orientation: '' }
  }

  componentWillMount() {
    Orientation.lockToPortrait()
    const orientation = Orientation.getInitialOrientation()
    this.setState({ orientation })
  }

  componentDidMount() {
    Orientation.addSpecificOrientationListener((this.orientationDidChange))
  }

  render() {
    return (
      <View>
        <TouchableOpacity onPress={this._onPressButton.bind(this)}>
          <Text>サンプルBへ</Text>
          <Text>{this.state.orientation}</Text>
        </TouchableOpacity>
      </View>
    )
  }

  _onPressButton() {
    this.props.navigation.navigate('SampleB')
    Orientation.removeSpecificOrientationListener((this.orientationDidChange))
  }
}

export default SampleAScreen
