import React, { Component } from 'react';

import {
  Text,
  View,
  TouchableHighlight
} from 'react-native';

const FBSDK = require('react-native-fbsdk');
const {
  LoginButton,
} = FBSDK;

var Login = React.createClass({
  render: function() {
    return (
      <View>
        <LoginButton
          publishPermissions={["publish_actions"]}
          onLoginFinished={
            (error, result) => {
              if (error) {
                alert("Login failed with error: " + result.error);
              } else if (result.isCancelled) {
                alert("Login was cancelled");
              } else {
                this.props.navigator.push({
                  id: 'loading',
                  store: true
                })
              }
            }
          }
          onLogoutFinished={() => alert("User logged out")}/>
      </View>
    );
  }
});

export default class FirstScreen extends Component {
  render() {
    return (
        <View style={this.props.styles.container}>
          <Text>Wing.me Here will be the logo</Text>
          <Login navigator={this.props.navigator}/>
        </View>
    );
  }
}
