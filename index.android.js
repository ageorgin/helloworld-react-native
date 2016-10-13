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

import FirstScreen from './components/first-screen.js';
import SecondScreen from './components/second-screen.js';

export default class WingMe extends Component {
  /*render() {
    return (
      <FirstScreen styles={styles}/>
    );
  }*/
  render() {
    return (
      <Navigator
        initialRoute={{ title: 'My Initial Scene', index: 0, id: 'first' }}
        renderScene={(route, navigator) => {
          switch (route.id) {
            case 'first':
              return <FirstScreen styles={styles} title={route.title} navigator={navigator}/>
            case 'second':
              return <SecondScreen styles={styles} title={route.title} navigator={navigator}/>
          }
        }}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
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
