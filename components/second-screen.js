import React, { Component } from 'react';

import {
  Text,
  View,
  ActivityIndicator
} from 'react-native';

export default class SecondScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: 'nothing',
      animating: true,
    };
  }
  render() {
    return (
        <View style={this.props.styles.container}>
          <ActivityIndicator
            animating={this.state.animating}
            size="large"
          />
          <Text>Second screen</Text>
          <Text>{this.state.content}</Text>
        </View>
    );
  }
}
