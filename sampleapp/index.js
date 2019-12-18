/**
 * @format
 */

 import React, {
     Component
 } from 'react';
import {
    AppRegistry,
    Text,
    View,
    StyleSheet,
} from 'react-native';

import PresentationalComponent from './PresentationalComponent';
import { bold } from 'ansi-colors';
export default class SampleApp extends Component {
    constructor() {
        super()
        this.state={
            firstVar:'It display using state',
            secondVar: 'It displays using stylesheets'
        }
    }
    hideText=() =>{
        this.setState({firstVar:''})
    }
    render() {
        return (
            <View style={{flex:1,flexDirection:'row',justifyContent:'center'},{backgroundColor: 'silver'}}>
                <PresentationalComponent
                myText={this.state.firstVar}
                deleteText = {this.hideText}
                />
               {/* <Text onPress={this.hideText}>
                    {
                        this.state.firstVar
                    }
                </Text> */}
                <Text style={styles.newStyle}>
                    {this.state.secondVar}
                </Text>
                <View style={{height:50, width: 50,backgroundColor:'darkorange'}}/>
                <View style={{height:50, width:50,backgroundColor:'white'}}/>
                <View style={{height:50, width:50,backgroundColor:'green'}}/>
            </View>
        );
    }
}

AppRegistry.registerComponent('sampleapp', () => SampleApp);

const styles = StyleSheet.create({
    newStyle: {
        margin: 100,
        fontSize:30,
        color: 'purple',
        fontWeight: 'bold',
    },
    title: {
        fontSize: 30,
        color: 'blue',
        fontWeight:'bold'
    },
    flexLayout: {
        flex:1,
        flexDirection:'column',
        backgroundColor:'silver',
        justifyContent:'center'

    },

    flexDimension: {
        height: 50,
        width: 50
    },
})
