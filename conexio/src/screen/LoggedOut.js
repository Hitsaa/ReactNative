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
    Button,
}from 'react-native';
import { SocialIcon } from 'react-native-elements';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import FacebookLogin from '../screen/Facebook';
import colors from "../style/color";
//import RoundedButton from "../components/buttons/RoundedButton";
import InstagramLogging from '../screen/Instagram.js';
import Googl from "../screen/Google.js";
import Login from "../screen/Login.js";

class LoggedOut extends Component {
onOpenlink() {
    Linking.openURL("https://www.facebook.com");
}
    render() {
        const { navigate } = this.props.navigation
        return (
            <ImageBackground 
            source={require("../images/Background.png")}
            style={styles.BgImage}
            imageStyle={{resizeMode: 'stretch'}}>                
                <View style={styles.wrapper}>
                    <View style={styles.welcomeWrapper}>
                        <Image 
                            style={styles.logo}
                            source={require("../images/logo.png")}>                    
                        </Image>                
                        <Text
                            style={styles.welcomeText}>
                            connect with sports professional.
                        </Text>
                        
                        <TouchableHighlight 
                        onPress={() => navigate('userLogin')}
                        style={styles.buttonDesign}>                            
                            <Text style={styles.buttonText}>
                                Sign up with Email           
                            </Text>                                    
                        </TouchableHighlight>

                        <TouchableHighlight 
                        onPress={() => navigate('userLogin')}
                        style={styles.buttonDesign}>                            
                            <Text style={styles.buttonText}>
                                Sign up as Scout           
                            </Text>                                    
                        </TouchableHighlight>

                        {/*<RoundedButton text="Sign up as Scout"                        
                        />*/}

                        <View style={[styles.iconstyle,{paddingBottom:50}]}>
                        <SocialIcon
                        type="facebook"                        
                        onPress={() => navigate('FacebookLogin')}
                        />
                        <SocialIcon
                        type="google"
                        onPress={() => navigate('GoogleLogin')}                        
                        />
                        <SocialIcon
                        type="instagram"
                        onPress={() => navigate('IGLogin')}
                        />                                                
                        </View>
                        <View style = {styles.lineStyle}/>
                        <Text                            
                            onPress={() => navigate('userLogin')}
                            style={{color:"white", marginTop:20}}
                        >                            
                                I already have an account
                            </Text>                                                         
                    </View>                    
                </View>                
            </ImageBackground>
);
}}

const styles = StyleSheet.create({
    wrapper:{
        flex:1,
        //backgroundColor: colors.green01,
        //justifyContent:'center',
        //alignItems:'center',
        //flexDirection:'column'
    },
    welcomeWrapper:{
        marginTop:30,
        padding:20,
        alignItems:'center',        
    },
    logo:{
        width:200,
        height:200,
        //marginTop:10,
        //marginBottom:0,
        resizeMode:"contain"     
    },
    BgImage:{
        width:'100%',
        height:'100%',
        flex:1,
        
    },
    welcomeText:{
        fontSize:18,
        color:'white',
        textAlign:'left',
        marginBottom:200
    },
    iconstyle:{
        //flex:1,
        flexDirection:'row',        
        //marginBottom:100,
    },
    lineStyle:{
        //flex:1,
        flexDirection:'column',
        //display:"flex",
        borderWidth: 0.5,
        width:'100%',
        borderColor:'grey',
        //alignSelf:'stretch'
        //margin:10,
   },
   buttonDesign:{
    padding:15,
    //flex:1,
    flexDirection:'row',
    //display:"flex",
    borderRadius:40,
    borderWidth:1,
    borderColor:colors.white,
    marginBottom:15,
    alignItems:'center',
   },
   buttonText:{
    fontSize:16,
    width:"100%",
    textAlign:'center',
    color:colors.white
   }
})

const ScreenSwitching = createStackNavigator({
    //Constant which holds all the screens like index of any book 
      LoggedOut: { 
          screen: LoggedOut,
          navigationOptions: {    
            headerShown: false,        
          }
        
     }, 
      //First entry by default be our first screen if we do not define initialRouteName
      FacebookLogin: { 
          screen: FacebookLogin,
          navigationOptions: {    
            headerShown: false,        
          } 
        },
        IGLogin: { 
            screen: InstagramLogging,
            navigationOptions: {    
              headerShown: false,        
            } 
          },
          GoogleLogin: { 
            screen: Googl,
            navigationOptions: {    
              headerShown: false,        
            } 
          },
          userLogin: { 
            screen: Login,            
            navigationOptions: {    
              //headerShown: false,
              title:'',
              headerTransparent:true,
              headerTintColor:'slateblue'              
            } 
          },  
    },
    {
      //initialRouteName: 'LoggedOut',
    }
  );
  export default createAppContainer(ScreenSwitching);