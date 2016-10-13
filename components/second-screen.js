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
          <Text>Second screen : {this.props.member.name}</Text>
          <Text>{this.state.content}</Text>
        </View>
    );
  }
}
