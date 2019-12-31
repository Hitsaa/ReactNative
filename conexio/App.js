import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
}from 'react-native';

import LoggedOut from './src/screen/LoggedOut.js'

export default class App extends Component {
  render() {
    return <LoggedOut/>;
  }
}