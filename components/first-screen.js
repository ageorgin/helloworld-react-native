import React, { Component } from 'react';

import {
  Text,
  View,
  TouchableHighlight,
  Image
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
          readPermissions={["user_friends"]}
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
        <Image source={require('../assets/drawable-xxhdpi/image.png')} style={{flex: 1, alignItems: 'center', width: 360, height: 640}}>
          <Image source={require('../assets/drawable-xxhdpi/logo.png')} style={{alignItems: 'center', width: 241, height: 225}} />
          <Text>Wing.me Here will be the logo</Text>
          <Login navigator={this.props.navigator}/>
        </Image>
    );
  }
}
