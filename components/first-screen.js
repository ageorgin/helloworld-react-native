import React, { Component } from 'react';

import {
  Text,
  View,
  TouchableHighlight
} from 'react-native';

export default class FirstScreen extends Component {
  _navigate(){
    this.props.navigator.push({
      id: 'second'
    })
  }
  render() {
    return (
        <View style={this.props.styles.container}>
          <Text>First screen</Text>
          <TouchableHighlight onPress={ () => this._navigate() }>
              <Text>GO To View</Text>
          </TouchableHighlight>
        </View>
    );
  }
}
