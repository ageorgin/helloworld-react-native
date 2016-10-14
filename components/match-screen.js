import React, { Component } from 'react';

import {
  Text,
  View,
  Image
} from 'react-native';

export default class MatchScreen extends Component {
  constructor(props) {
    super(props);
  }

  renderCover(friend) {
    if (friend.cover!==undefined) {
      return (<Image source={{uri: friend.cover.source}} style={{width: 400, height: 200}} />);
    };
    return (<View style={{width: 400, height: 200, backgroundColor: '#AAAA00'}} />);
  }

  goBack() {
  	this.props.navigator.pop();
  }

  render() {
  	return (
  		<Image source={require('../assets/bg.png')} style={{flex: 1, alignItems: 'center', width: 360, height: 640}}>
  			{this.renderCover(this.props.friend)}
  			<Image source={{uri: this.props.friend.picture.data.url}} style={{width: 80, height: 80, marginTop: -30}} />
  			<Text>{this.props.friend.name}</Text>

  			<Text>Match suggestion</Text>

  			<Text onPress={() => this.goBack()}>Back</Text>
  		</Image>
  		);
  }
}