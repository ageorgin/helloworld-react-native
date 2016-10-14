import React, { Component } from 'react';

import {
  Text,
  View,
  ActivityIndicator
} from 'react-native';

const FBSDK = require('react-native-fbsdk');
const {
  GraphRequest,
  GraphRequestManager,
} = FBSDK;

export default class LoadingScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      animating: true,
    };

    this.fetchMember();
  }

  fetchMember() {
    var profileRequest = new GraphRequest(
      '/me',
      { parameters: { fields: { string: 'email,name,first_name,last_name,picture,cover' } } },
      ((error, member) => {
        if (error) {
          this.onFailure(error);
        } else {
          this.storeMember(member);
          this.fetchFriends(member);
        }
      }),
    );
    new GraphRequestManager().addRequest(profileRequest).start();
  }

  fetchFriends(member) {
    var friendsRequest = new GraphRequest(
      '/' + member.id + '/friends',
      { parameters: { fields: { string: 'id,name,picture,cover' } } },
      ((error, friends) => {
        if (error) {
          this.onFailure(error);
        } else {
          this.onAllCompleted(member, friends);
        }  
      }),
    );
    new GraphRequestManager().addRequest(friendsRequest).start();
  }

  onFailure(error) {
    this.props.navigator.push({
      id: 'login'
    });
  }

  onAllCompleted(member, friends) {
    member.friends = friends.data;
    this.props.onLogin(member);
    this.props.navigator.push({
      id: 'home'
    });
  }

  storeMember(member) {
    background_cover = '';
    if (member.cover!==undefined) {background_cover = member.cover.source};
    fetch('https://enigmatic-eyrie-31910.herokuapp.com/store/' + member.id, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        nickname: member.name,
        avatar_url: member.picture.data.url,
        background_url: background_cover
      })
    })
  }

  render() {
    return (
        <View style={this.props.styles.container}>
          <ActivityIndicator
            animating={this.state.animating}
            size="large"
          />
        </View>
    );
  }
}
