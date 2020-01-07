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

import InputField from "./InputField";
import { TouchableOpacity } from 'react-native-gesture-handler';
import SignUp from "./SignUp.js";

class ChangePassword extends Component {
    render() {
        const { navigate } = this.props.navigation
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
                            Change {"\n"} Password
                        </Text>                        
                        <InputField                         
                        labelText="Email" 
                        labelTextSize={14} 
                        labelColor={colors.white} 
                        textColor={colors.black} 
                        borderBottomColor={colors.white} 
                        inputType="email" 
                        customStyle={{marginBottom:30}} 
                        />
                        </View>
                        <View>
                        <TouchableHighlight 
                        onPress={() => alert("Password reset, follows the steps on your email and login with your new password")}
                        style={styles.buttonDesign}>                            
                            <Text style={styles.buttonText}>
                                Send
                            </Text>                                    
                        </TouchableHighlight>
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
                    </View>
                </ScrollView>
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
        //padding:20,
        //alignItems:'center',
        alignSelf:'center',
        width:350
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
        //display:"flex",
        borderRadius:40,
        borderWidth:1,
        borderColor:colors.white,
        marginBottom:5,
        alignSelf:'center',
        backgroundColor:"slateblue",
        width:300
       },
       lineStyle:{
        //flex:1,
        //flexDirection:'column',
        //display:"flex",
        borderWidth: 0.5,
        width:'100%',
        borderColor:'grey',
        marginTop:290,
       },
  });

  const changeSc= createStackNavigator({
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
);
export default createAppContainer(changeSc);