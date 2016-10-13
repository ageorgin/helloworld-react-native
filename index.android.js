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
import FirstScreen from './components/first-screen.js';
import SecondScreen from './components/second-screen.js';

export default class WingMe extends Component {

  constructor(props) {
    super(props);
    this.state = {
      member: null,
    };
  }

  onLogin(res) {
    this.setState({ member: res });
  }

  render() {
    return (
      <Navigator
        initialRoute={{ title: 'My Initial Scene', index: 0, id: 'loading' }}
        renderScene={(route, navigator) => {
          switch (route.id) {
            case 'loading':
              return <LoadingScreen styles={styles} title={route.title} navigator={navigator} store={route.store} onLogin={this.onLogin.bind(this)}/>
            case 'first':
              return <FirstScreen styles={styles} title={route.title} navigator={navigator}/>
            case 'second':
              return <SecondScreen styles={styles} title={route.title} navigator={navigator} member={this.state.member}/>
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
