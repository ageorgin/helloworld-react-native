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
        this.props.onLogin({name: "toto"});
        this.props.navigator.push({
          id: 'second'
        })
      }
    })

    var profileRequest = new GraphRequest(
                '/me',
                { parameters: { fields: { string: 'email,name,first_name,last_name' } } },
                responseCallback,
    );
    new GraphRequestManager().addRequest(profileRequest).start();
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
