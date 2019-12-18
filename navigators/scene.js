import React, { Component } from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import PropTypes from 'prop-types';
 class Scene1 extends Component {

 render() {

   return (

     <View>

       <Text>Current Scene: {this.props.title}</Text>

       <TouchableHighlight onPress={this.props.nextScene}>

         <Text>Tap me to load the next scene</Text>

       </TouchableHighlight>
       <TouchableHighlight onPress={this.props.preScene}>

         <Text>Tap me to go back</Text>

       </TouchableHighlight>

     </View>

   )

 }

}
Scene1.propTypes = {

 title: PropTypes.string.isRequired,

 nextScene: PropTypes.func.isRequired,

 preScene: PropTypes.func.isRequired,

};

export default Scene1