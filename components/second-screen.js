import React, { Component } from 'react';

import {
  Text,
  View,
  ActivityIndicator,
  Image
} from 'react-native';

export default class SecondScreen extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={this.props.styles.container}>
        <Image source={{uri: this.props.member.cover.source}} style={{width: 400, height: 200}} />
        <Image source={{uri: this.props.member.picture.data.url}} style={{width: 80, height: 80, marginTop: -30}} />
        <Text>{this.props.member.first_name}</Text>
        <Text>{JSON.stringify(this.props.member)}</Text>
      </View>
    );
  }
}
