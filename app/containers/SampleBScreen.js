import React, { Component } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import Orientation from 'react-native-orientation'

class SampleBScreen extends Component {
  static navigationOptions = {
    title: 'サンプルB-横固定',
  }

  orientationDidChange = (orientation) => {
    if(orientation !== 'LANDSCAPE-LEFT') {
      Orientation.lockToLandscapeLeft()
    } else {
      this.setState({ orientation })
    }
  }

  constructor() {
    super();
    this.state = { orientation: '' }
  }

  componentWillMount() {
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
          <Text>サンプルCへ</Text>
          <Text>{this.state.orientation}</Text>
        </TouchableOpacity>
      </View>
    )
  }

  _onPressButton() {
    this.props.navigation.navigate('SampleC')
  }
}

export default SampleBScreen
