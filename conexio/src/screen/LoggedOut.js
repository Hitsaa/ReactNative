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
import { SocialIcon, Icon } from 'react-native-elements';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import FacebookLogin from '../screen/Facebook';
import colors from "../style/color";
//import RoundedButton from "../components/buttons/RoundedButton";
import InstagramLogging from '../screen/Instagram.js';
import Googl from "../screen/Google.js";
import SignUp from './SignUp.js';
import Login from "./Login.js"

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
            imageStyle={{resizeMode:'cover'}}>
              <ScrollView>                
                    <View style={styles.welcomeWrapper}>
                      <View style={styles.logo}>
                        <Image                             
                            source={require("../images/logo.png")}>                    
                        </Image>
                        <Text
                            style={styles.welcomeText}>
                            connect with sport professionals.
                        </Text>
                        </View>
                        <TouchableHighlight 
                        onPress={() => navigate('userSignUp')}
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
                        <View style={styles.iconstyle}>
                        <View style={styles.CircleView}>
                        <Icon
                        type='font-awesome'
                        name='facebook-square'
                        color='white'
                        onPress={() => navigate('FacebookLogin')}
                        />
                        </View>

                        <View style={styles.CircleView}>
                        <Icon
                        type="font-awesome"
                        name='instagram'
                        color='white'
                        onPress={() => navigate('IGLogin')}
                        />
                        </View>

                        <View style={styles.CircleView}>                          
                        <Icon
                        type="font-awesome"
                        name='google'
                        color='white'
                        onPress={() => navigate('GoogleLogin')}
                        iconColor="white"                                                
                        />
                        </View>

                        </View>
                        <View style = {styles.lineStyle}/>
                        <Text                            
                            onPress={() => navigate('userLogin')}
                            style={{color:"white", marginTop:20,alignSelf:'center'}}
                        >                            
                                I have an account
                            </Text>                                                         
                    </View>                                    
                </ScrollView>   
            </ImageBackground>
);
}}

const styles = StyleSheet.create({
    wrapper:{
        //flex:1,
        //backgroundColor: colors.green01,
        //justifyContent:'center',
        //alignItems:'center',
        //flexDirection:'column'
    },
    welcomeWrapper:{
        marginTop:70,
        //padding:20,
        //alignItems:'center',
        //justifyContent:'flex-end'
        //flex:1,
        //flexDirection:'column'
    },
    logo:{
        marginTop:20,
        //marginBottom:0,
        resizeMode:"contain",
        alignItems:'center',
        //resizeMode:'cover'
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
        marginBottom:230,
    },
    iconstyle:{
        //flex:1,
        flexDirection:'row',
        justifyContent:'space-evenly',
        paddingHorizontal:60,        
        //alignSelf:'center',
        paddingBottom:50,
        marginBottom:10,
        backgroundColor:'transparent',        
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
    flex:1,
    //flexDirection:'row',
    //display:"flex",
    width:300,
    alignSelf:'center',
    alignContent:'center',
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
   },
   CircleView: {
    //marginTop:10,
    //marginBottom:10,
    width:50,
    height:50,
    borderWidth:1,    
    borderColor:'white',
    borderRadius: 50/2,
    justifyContent:'center'    
  },
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
      //initialRouteName: 'LoggedOut',
    }
  );
  export default createAppContainer(ScreenSwitching);