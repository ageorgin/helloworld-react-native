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
    cover = <View style={{width: 400, height: 200, backgroundColor: '#AA00AA'}} />;
    if (this.props.member.cover!==undefined) {
      cover = <Image source={{uri: this.props.member.cover.source}} style={{width: 400, height: 200}} />;
    };
    return (
      <Image source={require('../assets/bg.png')} style={{flex: 1, alignItems: 'center', width: 360, height: 640}}>
        {cover}
        <Image source={{uri: this.props.member.picture.data.url}} style={{width: 80, height: 80, marginTop: -30}} />
        <Text>{this.props.member.first_name}</Text>
        <Text>{JSON.stringify(this.props.member.friends.data)}</Text>
      </Image>
    );
  }
}
