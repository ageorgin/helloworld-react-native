import React, { Component } from 'react';

import {
  Text,
  View,
  ActivityIndicator,
  Image,
  ListView
} from 'react-native';

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      friendsList: ds.cloneWithRows(props.member.friends)
    };
  }

  selectFriend(friend) {
  	this.props.navigator.push({
      id: 'match',
      friend: friend
    });
  }

  renderFriend(friend) {
  	return	(<View style={{flex: 1, flexDirection: 'row', width: 360, height: 120, backgroundColor: '#AAFFFF'}}>
        		<Image source={{uri: friend.picture.data.url}} style={{width: 100, height: 100}} />
        		<Text>{friend.name}</Text>
        		<Text onPress={() => this.selectFriend(friend)}>Wing</Text>
        	</View>);
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
        <ListView dataSource={this.state.friendsList} renderRow={ (friend) => this.renderFriend(friend)} />
      </Image>
    );
  }
}
