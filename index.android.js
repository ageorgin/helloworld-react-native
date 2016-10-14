/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator
} from 'react-native';

import LoadingScreen from './components/loading-screen.js';
import LoginScreen from './components/login-screen.js';
import HomeScreen from './components/home-screen.js';
import MatchScreen from './components/match-screen.js';

export default class WingMe extends Component {

  constructor(props) {
    super(props);
    this.state = {
      member: null,
    };
  }

  onLogin(member) {
    this.setState({ member: member });
  }

  render() {
    return (
      <Navigator
        initialRoute={{ title: 'My Initial Scene', index: 0, id: 'loading' }}
        renderScene={(route, navigator) => {
          switch (route.id) {
            case 'loading':
              return <LoadingScreen styles={styles} title={route.title} navigator={navigator} store={route.store} onLogin={this.onLogin.bind(this)}/>
            case 'login':
              return <LoginScreen styles={styles} title={route.title} navigator={navigator}/>
            case 'home':
              return <HomeScreen styles={styles} title={route.title} navigator={navigator} member={this.state.member}/>
            case 'match':
              return <MatchScreen styles={styles} title={route.title} navigator={navigator} member={this.state.member} friend={route.friend}/>  
          }
        }}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('WingMe', () => WingMe);
