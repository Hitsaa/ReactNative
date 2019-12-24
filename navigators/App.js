/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { AppRegistry, View } from 'react-native';
import Routes from './Routes.js'

class reactTutorialApp extends Component {
  render() {
    return(
      <Routes>

      </Routes>
    )
  }
}
  
export default reactTutorialApp
AppRegistry.registerComponent('reactTutorialApp', () => reactTutorialApp);