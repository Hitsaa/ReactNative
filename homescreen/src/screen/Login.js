import React, {Component} from 'react';
import {
    Text,
    View,
    StyleSheet,
    Image,
    TouchableHighlight,
    ScrollView,
    ImageBackground,
    Linking,
    KeyboardAvoidingView
}from 'react-native';
import colors from "../style/color";

import InputField from "../screen/InputField";

export default class Login extends Component {
    render() {        
        return (
            <ImageBackground 
            source={require("../images/Background.png")}
            style={styles.BgImage}
            imageStyle={{resizeMode: 'stretch'}}>                
                <KeyboardAvoidingView style={styles.wrapper} behavior="padding">
                    <View style={styles.welcomeWrapper}>                                        
                        <Text
                            style={styles.welcomeText}>
                            Create an Account
                        </Text>
                        <InputField 
                        labelText="E-mail"
                        labelText="EMAIL ADDRESS" 
                        labelTextSize={14} 
                        labelColor={colors.white} 
                        textColor={colors.white} 
                        borderBottomColor={colors.white} 
                        inputType="email" 
                        customStyle={{marginBottom:30}} 
                        />
                        <InputField 
                        labelText="PASSWORD" 
                        labelTextSize={14} 
                        labelColor={colors.white} 
                        textColor={colors.white} 
                        borderBottomColor={colors.white} 
                        inputType="password"  
                        customStyle={{marginBottom:30}}
                        />
                    </View>
                </KeyboardAvoidingView>
            </ImageBackground>
);
}}

const styles = StyleSheet.create({
    wrapper: {
      display: "flex",
      flex: 1,      
    },
    welcomeWrapper:{
        marginTop:30,
        padding:20,
        alignItems:'center',        
    },
    BgImage:{
        width:null,
        height:null,
        flex:1,        
    },
    welcomeText:{
        fontSize:18,
        color:'white',
        textAlign:'left',
        marginBottom:200
    },

  });

