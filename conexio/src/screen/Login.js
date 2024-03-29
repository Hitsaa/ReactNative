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
import {createAppContainer,} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {Icon} from 'react-native-elements';
import InputField from "./InputField";
import SignUp from "./SignUp.js";
import ChangePassword from "./ChangePassword.js";

class Login extends Component {
    render() {
        const { navigate } = this.props.navigation
        return (
            <ImageBackground 
            source={require("../images/Background.png")}
            style={styles.BgImage}
            imageStyle={{resizeMode:'cover'}}>
                <ScrollView>
                    <View>
                    <View>
                        <Text
                            style={styles.welcomeText}>
                            Login
                        </Text>
                        </View>
                        <View style={styles.inputStyle}>
                        <InputField                         
                        labelText="Email" 
                        labelTextSize={14} 
                        labelColor={colors.white} 
                        textColor={colors.black} 
                        borderBottomColor={colors.white} 
                        inputType="email" 
                        customStyle={{marginBottom:20}} 
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
                        <View/>
                        <View style={styles.loginbutton}>
                        <TouchableHighlight 
                        onPress={() => alert("Signed in")}
                        style={styles.buttonDesign}>                            
                            <Text style={styles.buttonText}>
                                Login
                            </Text>                                    
                        </TouchableHighlight>
                        <View style={styles.passwordStyle}>
                        <Image 
                        source={require("../images/PassIcon.png")}                        
                        />
                            <Text 
                            style={{color:colors.white}}
                            onPress={() => navigate("ChangePassword")}
                            >
                                Change Password
                            </Text>
                            </View>
                        </View>                        
                    </View>
                    <View style={styles.lineStyle}/>
                        <View style={{alignItems:'center'}}>
                        <Text                            
                            onPress={() => navigate('userSignUp')}
                            style={{color:"white", marginTop:10,}}
                        >                            
                                Sign up with Email
                            </Text> 
                        </View>
                    </View>             
                </ScrollView>
            </ImageBackground>
);
}}

const styles = StyleSheet.create({
    inputStyle: {
        width:350,
        alignSelf:'center',
    },
    welcomeWrapper:{
        marginTop:30,
        alignItems:'center',
    },
    loginbutton:{
        width:300,
        alignSelf:'center'
    },
    BgImage:{
        width:'100%',
        height:'100%',
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
        marginBottom:5,
        alignItems:'center',
        backgroundColor:"slateblue"
       },
       lineStyle:{
        //flex:1,
        flexDirection:'column',
        //display:"flex",
        borderWidth: 0.5,
        width:'100%',
        borderColor:'grey',
        marginTop:210,
       },
       passwordStyle:{        
        flex:1,
        flexDirection:'row',
        justifyContent:'space-evenly',
        paddingHorizontal:60,
        marginTop:20,
        }
  });

const changeScreen= createStackNavigator({
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
          ChangePassword: { 
            screen: ChangePassword,            
            navigationOptions: {    
              //headerShown: false,
              title:'',
              headerTransparent:true,
              //headerTintColor:'steelblue',              
              //headerRight: () => <Button title="Menu" onPress={()=>{ alert("button pressed"); }} />,
            },
          },
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

    },    
    {
        //initialRouteName:'userLogin',
    }
  );
  export default createAppContainer(changeScreen);