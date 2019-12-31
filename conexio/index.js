/**
 * @format
 */

 
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);


/*
import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, View} from 'react-native';
import {name as appName} from './app.json';
import FBLoginButton from './src/screen/FBlogin'

export default class YourApp extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.label}>Welcome to the Facebook SDK for React Native!</Text>
        <FBLoginButton />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  label: {
    fontSize: 16,
    fontWeight: 'normal',
    marginBottom: 48,
  },
});

AppRegistry.registerComponent(appName, () => YourApp);
*/