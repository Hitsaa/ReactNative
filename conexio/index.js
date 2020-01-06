/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
AppRegistry.registerComponent(appName, () => App);
 

/*
import {AppRegistry} from 'react-native';
//import App from './App';
import {name as appName} from './app.json';

import React, { Component } from 'react'
import { Button } from 'react-native'

import { LoginManager } from 'react-native-fbsdk'

export default class Login extends Component {
  handleFacebookLogin () {
    LoginManager.logInWithPermissions(['public_profile', 'email', 'user_friends']).then(
      function (result) {
        if (result.isCancelled) {
          console.log('Login cancelled')
        } else {
          console.log('Login success with permissions: ' + result.grantedPermissions.toString())
        }
      },
      function (error) {
        console.log('Login fail with error: ' + error)
      }
    )
  }
  render () {
    return (
      <Button
        onPress={this.handleFacebookLogin}
        title="Continue with fb"
        color="#4267B2"
      />
    )
  }
}
AppRegistry.registerComponent(appName, () => Login);
//AppRegistry.registerComponent(appName, () => App);
*/



/*
//facebook sign in
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