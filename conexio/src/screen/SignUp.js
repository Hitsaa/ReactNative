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
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Login from './Login.js';
import InputField from "./InputField";
import { TouchableOpacity } from 'react-native-gesture-handler';

class SignUp extends Component {
    render() {
        const {navigate} = this.props.navigation
        return (
            <ImageBackground 
            source={require("../images/Background.png")}
            style={styles.BgImage}
            imageStyle={{resizeMode:'cover'}}>                
                <ScrollView>
                    <View>
                    <View style={styles.welcomeWrapper}>                                        
                        <Text
                            style={styles.welcomeText}>
                            Create{"\n"}an Account
                        </Text>
                        <InputField 
                        labelText="Name"                   
                        labelTextSize={14} 
                        labelColor={colors.white} 
                        textColor={colors.black} 
                        borderBottomColor={colors.white} 
                        inputType="email" 
                        customStyle={{marginBottom:10}} 
                        />
                        <InputField                         
                        labelText="Email" 
                        labelTextSize={14} 
                        labelColor={colors.white} 
                        textColor={colors.black} 
                        borderBottomColor={colors.white} 
                        inputType="email" 
                        customStyle={{marginBottom:10}} 
                        />
                        <InputField                        
                        labelText="Password" 
                        labelTextSize={14} 
                        labelColor={colors.white} 
                        textColor={colors.black} 
                        borderBottomColor={colors.white} 
                        inputType="password"  
                        customStyle={{marginBottom:30}}
                        />
                        </View>
                        <View>
                        <TouchableHighlight 
                        onPress={() => alert("Signed in")}
                        style={styles.buttonDesign}>                            
                            <Text style={styles.buttonText}>
                                Sign Up    
                            </Text>                                    
                        </TouchableHighlight>                        
                        </View>

                        <View style={styles.lineStyle}/>
                        <View style={{alignItems:'center'}}>
                        <Text                            
                            onPress={() => navigate('userLogin')}
                            style={{color:"white", marginTop:20,}}
                        >                            
                                I have an account
                            </Text> 
                        </View>
                    </View>
                </ScrollView>
            </ImageBackground>
);
}
}

const styles = StyleSheet.create({
    wrapper: {
      display: "flex",
      flex: 1,      
    },
    welcomeWrapper:{
        marginTop:30,
        //padding:20,
        alignSelf:'center',
        width:350,
    },
    BgImage:{
        width:null,
        height:null,
        flex:1,        
    },
    welcomeText:{
        fontSize:40,
        fontWeight:"bold",
        color:'white',
        textAlign:'center',
        marginTop:100,
        marginBottom:40
    },
    buttonText:{
        fontSize:16,
        width:"100%",
        textAlign:'center',
        color:colors.white,        
    },
    buttonDesign:{
        padding:15,        
        display:"flex",
        borderRadius:40,
        borderWidth:1,
        borderColor:colors.white,
        marginBottom:15,
        alignSelf:'center',
        width:300,
        backgroundColor:"slateblue"
       },
       lineStyle:{
        //flex:1,
        //flexDirection:'column',
        //display:"flex",
        borderWidth: 0.5,
        width:'100%',
        borderColor:'grey',
        marginTop:80,
       },
  });

const changeS= createStackNavigator({
          userSignUp: { 
            screen: SignUp,            
            navigationOptions: {    
              //headerShown: false,
              title:'',
              headerTransparent:true,
              //headerTintColor:'steelblue',              
              //headerRight: () => <Button title="Menu" onPress={()=>{ alert("button pressed"); }} />,
            }
          },  
          userLogin: { 
            screen: Login,            
            navigationOptions: {    
              //headerShown: false,
              title:'',
              headerTransparent:true,
              //headerTintColor:'steelblue',              
              //headerRight: () => <Button title="Menu" onPress={()=>{ alert("button pressed"); }} />,
            }
          },  
        },    
    {
        //initialRouteName:'userSignUp',
    }
  );
  export default createAppContainer(changeS);