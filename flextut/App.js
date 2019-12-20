import React, {Component} from 'react';
import {View} from 'react-native';
import { black } from 'ansi-colors';

export default class Example extends Component{
  render() {
    return(
      <View style={{flex:1,flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
        <View style={{height:50,width:50,backgroundColor:'red'}}/>
        <View style={{height:100,width:100,backgroundColor:'blue',marginTop:10}}/>
        <View style={{height:50,width:50,backgroundColor:'green',}}/>
        <View style={{height:50,width:50,backgroundColor:'yellow',}}/>
      </View>
    )
  }
}

