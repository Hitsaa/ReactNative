/**
 * @format
 */

import React, { Component } from 'react';
import { AppRegistry, Navigator } from 'react-native';

import Scene1 from './scene';

class NativeSample extends Component {

 render() {

   return (

     <Navigator

     initialRoute={{ title: 'Initial Scene', index: 0 }}

     renderScene={(route, navigator) =>

         <Scene1

           title={route.title}

           nextScene={() => {    

             const nextIndex = route.index + 1;

             navigator.push({

               title: 'Scene' + nextIndex,

               index: nextIndex,

             });

           }}

           preScene={() => {

             if (route.index > 0) {

               navigator.pop();

             }

           }}

         />

       }

     />

   );

 }

}

AppRegistry.registerComponent('navigators', () => NativeSample);