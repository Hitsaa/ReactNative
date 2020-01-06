//This is an example code for Navigator// 
import React, { Component } from 'react';
//import react in our code. 
import { StyleSheet, View, Button} from 'react-native';
//import all the components we are going to use.
import { createAppContainer } from 'react-navigation';
import { createStackNavigator} from 'react-navigation-stack';
import SecondPage from './SecondPage';
 
class FirstPage extends Component {
  static navigationOptions = {
    title: 'First Page',
    //Sets Header text of Status Bar
    headerStyle: {
      backgroundColor: '#f4511e',
      //Sets Header color
    },
    headerTintColor: '#fff',
    //Sets Header text color
    headerTitleStyle: {
      fontWeight: 'bold',
      //Sets Header text style
    },
  };
 
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Button title='Go next'
        onPress={() =>navigate('SecondPage')}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const MyApp = createStackNavigator({
    //Constant which holds all the screens like index of any book 
      FirstPage: { screen: FirstPage }, 
      //First entry by default be our first screen if we do not define initialRouteName
      SecondPage: { screen: SecondPage }, 
    },
    {
      initialRouteName: 'FirstPage',
    }
  );
  export default createAppContainer(MyApp);