//This is an example code for Navigation Drawer with Custom Side bar//
import React, { Component } from 'react';
//import react in our code.
import {
  View,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
// import all basic components
 
//For React Navigation 3+
//import {
//  createStackNavigator,
//  createDrawerNavigator,
//  createAppContainer,
//} from 'react-navigation';
 
//For React Navigation 4+
import {createAppContainer} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {createStackNavigator} from 'react-navigation-stack';
 
//Import all the screens
import ScanApp from './pages/ScanScreen';
//import Screen2 from './pages/Screen2';
//import Screen3 from './pages/Screen3';
import Screen4 from './pages/Screen4';
 
//Import Custom Sidebar
import CustomSidebarMenu from './CustomSidebarMenu';
global.currentScreenIndex = 0;

//Navigation Drawer Structure for all screen
class NavigationDrawerStructure extends Component {
  //Top Navigation Header with Donute Button
  toggleDrawer = () => {
    //Props to open/close the drawer
    this.props.navigationProps.toggleDrawer();
  };
  render() {
    return (
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity onPress={this.toggleDrawer.bind(this)}>
          {/*Donute Button Image */}
          <Image
            source={require('./image/drawer.png')}
            style={{ width: 35, height: 35, marginLeft: 5 }}
          />
        </TouchableOpacity>
      </View>
    );
  }
}
 
//Stack Navigator for the First Option of Navigation Drawer
const FirstActivity_StackNavigator = createStackNavigator({
  //All the screen from the First Option will be indexed here
  First: {
    screen: ScanApp,
    navigationOptions: ({ navigation }) => ({
      title: 'Scan',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: 'light-content',
      },
      headerTintColor: '#ffffff',
      headerTransparent: true,
    }),
  },
});
 
//Stack Navigator for the Second Option of Navigation Drawer
/*
const Screen2_StackNavigator = createStackNavigator({
  //All the screen from the Second Option will be indexed here
  Second: {
    screen: Screen2,
    navigationOptions: ({ navigation }) => ({
      title: 'History',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
 
      headerStyle: {
        backgroundColor: '#FF9800',
      },
      headerTintColor: '#fff',
    }),
  },
});
 
//Stack Navigator for the Third Option of Navigation Drawer
const Screen3_StackNavigator = createStackNavigator({
  //All the screen from the Third Option will be indexed here
  Third: {
    screen: Screen3,
    navigationOptions: ({ navigation }) => ({
      title: 'Settings',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#FF9800',
      },
      headerTintColor: '#fff',
    }),
  },
});
*/
const Screen4_StackNavigator = createStackNavigator({
  //All the screen from the Second Option will be indexed here
  Fourth: {
    screen: Screen4,
    navigationOptions: ({ navigation }) => ({
      title: 'Share',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
 
      headerStyle: {
        backgroundColor: '#FF9800',
      },
      headerTintColor: '#fff',
    }),
  },
});

//Drawer Navigator Which will provide the structure of our App
const DrawerNavigatorExample = createDrawerNavigator(
  {
    //Drawer Optons and indexing
    NavScreen_ScanApp: {
      screen: FirstActivity_StackNavigator,
      navigationOptions: {
        drawerLabel: 'Scan',
      },
    },
/*    
    NavScreen2: {
      screen: Screen2_StackNavigator,
      navigationOptions: {
        drawerLabel: 'History',
      },
    },
    NavScreen3: {
      screen: Screen3_StackNavigator,
      navigationOptions: {
        drawerLabel: 'Settings',
      },
    },
*/
    NavScreen4: {
      screen: Screen4_StackNavigator,
      navigationOptions: {
        drawerLabel: 'Share',
      },
    },
  },
  {
    //For the Custom sidebar menu we have to provide our CustomSidebarMenu
    contentComponent: CustomSidebarMenu,
    //Sidebar width
    drawerWidth: Dimensions.get('window').width - 130,
  }
);
export default createAppContainer(DrawerNavigatorExample);