/**
 * @format
 */
import {Component} from 'react';
import React from 'react';
import {
  AppRegistry,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Share,
  TouchableHighlight,
} from 'react-native';
import {name as appName} from './app.json';
import { from } from 'rxjs';

class ShareLesson extends Component {
    constructor(props) {
        super(props);
        this._shareMessage=this._shareMessage.bind(this);
        this._showResult=this._showResult.bind(this);
        this._fancyShareMessage=this._fancyShareMessage.bind(this);
        this.state={result: ''};
    }

    _showResult(result) {
        this.set({result})
    }
    
    _shareMessage(){
        Share.share({message: 'This is a simple shared message'
    }).then(this._showResult);
    }

    _fancyShareMessage(){
        Share.share({
            message: 'This is a fancy shared message',
            url:'https://google.com'
        },
        {
            tintColor:'green',
            dialogTitle:'https://google.com'
            
        }).then(this._showResult);
    }

    render() {
        return(
            <View style={styles.container}>
                <TouchableHighlight onPress={this._shareMessage}>
                    <Text style={styles.welcome}>
                        Share
                    </Text>
                </TouchableHighlight>
                <TouchableHighlight onPress={this._fancyShareMessage}>
                    <Text style={styles.welcome}>
                        Fancy Share
                    </Text>
                </TouchableHighlight>
                <Text>
                    {JSON.stringify(this.state.result)}
                </Text>
            </View>
        )
    }
}

export default ShareLesson

var styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
    seperator:{
      marginBottom: 20
    }
  });
   
  AppRegistry.registerComponent(appName, () => ShareLesson);