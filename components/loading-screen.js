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

    var responseCallback = ((error, result) => {
      if (error) {
        this.props.navigator.push({
          id: 'first'
        })
      } else {
        this.props.onLogin(result);

        if (this.props.store) {
          this.storeMember(result);
        }

        this.props.navigator.push({
          id: 'second'
        })
      }
    })

    var profileRequest = new GraphRequest(
                '/me',
                { parameters: { fields: { string: 'email,name,first_name,last_name,picture,cover,friends' } } },
                responseCallback,
    );
    new GraphRequestManager().addRequest(profileRequest).start();
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
