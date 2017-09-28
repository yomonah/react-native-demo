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
  Image,
  View
} from 'react-native';

export default class News extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          this is my first react-native project.
        </Text>
        <Image source={require('./src/img/tree.jpg')} style={styles.customing}/>
      </View>
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
  customing:{
    width:200,
    height:200,
    resizeMode: 'contain',
  }
});

AppRegistry.registerComponent('News', () => News);
