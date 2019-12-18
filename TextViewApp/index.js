/**
 * @format
 */

import React, {Component} from 'react';

import{
    AppRegistry,
    StyleSheet,
    Text,
    TextInput,
    View,
    ScrollView,
} from 'react-native';

export default class TextView extends Component {
    constructor() {
        super() 
        this.state= {
            firstVar: ''
        }
    }

    render() {
        return(
            <View style={{margin:50}}>
            <TextInput style={{height:70, fontSize:50}}
            placeholder="Type your text here!"
            onChangeText={(firstVar) => this.setState({firstVar})}
            />

            <ScrollView>
            <Text style={{padding:10,fontSize:42}}>                
                {this.state.firstVar}
            </Text>
            </ScrollView>
            
        </View>
        );
    }
}

AppRegistry.registerComponent('TextViewApp', () => TextView);