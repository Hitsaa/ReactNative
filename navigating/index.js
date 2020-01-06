/**
 * @format
 */


import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import App from './App.js';
AppRegistry.registerComponent(appName, () => App);

/*
import { View, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

class HomeScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
      </View>
    );
  }
}

class DetailsScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
      </View>
    );
  }
}

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen,
  },
  {
    initialRouteName: 'Home',
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends Component {
  render() {
    return <AppContainer />;
  }
}
AppRegistry.registerComponent(appName, () => HomeScreen);
*/

/*
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';


import React, {Component} from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { StackNavigator } from 'react-navigation';

class HomeScreen extends Component {

  static navigationOptions = {
    title: 'Home',
  };

  render() {
    const { navigate } = this.props.navigation;    

    return (
      <View>
        <Button 
          title="Show Centers near me"
          onPress={() =>
            navigate('Results', "Search Term")
          }
          />
        <Text>or</Text>
      </View>
    );
  }
}


class ResultsScreen extends Component {

  static navigationOptions = {
    title: 'Results',
  };


  render() {
  const { navigate } = this.props.navigation;

    return (
      <View>
        <Text>Hi</Text>
      </View>
    );
  }
}

const App = createStackNavigator({
  Home: { screen: HomeScreen },
  Results: { screen: ResultsScreen }
});

export default App;
AppRegistry.registerComponent(appName, () => HomeScreen);
*/

/*
import { Button, View, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

class HomeScreen extends Component {
    constructor(props){
        super(props);
        this.showDetails = this.showDetails.bind(this);
    }
    showDetails(_id){
        this.props.navigation.navigate('Details');
    }
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('Details')}
        />
      </View>
    );
  }
}

class DetailsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <Button
          title="Go to Details... again"
          onPress={() => this.props.navigation.push('Details')}
        />
        <Button
          title="Go to Home"
          onPress={() => this.props.navigation.navigate('Home')}
        />
        <Button
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
        />
      </View>
    );
  }
}

const RootStack = createStackNavigator({
  Home: HomeScreen,
  Details: DetailsScreen,
});

export default createAppContainer(RootStack);
AppRegistry.registerComponent(appName, () => HomeScreen);
*/