//This is an example code for Navigator// 
import React, { Component } from 'react';
//import react in our code. 
 
//For react-navigation 3.0+
//import { createAppContainer, createStackNavigator } from 'react-navigation';
//For react-navigation 4.0+
//import { createAppContainer } from 'react-navigation';
//import { createStackNavigator} from 'react-navigation-stack';
import FirstPage from './FirstPage';
//import SecondPage from './SecondPage';
//import all the screens we are going to switch 

export default class App extends Component{
  render(){
    return<FirstPage/>
  }    
  
}
