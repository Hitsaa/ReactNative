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
}from 'react-native';
import { SocialIcon } from 'react-native-elements';
import colors from "../style/color";
import RoundedButton from "../components/buttons/RoundedButton";

export default class LoggedOut extends Component {
onOpenlink() {
    Linking.openURL("https://www.facebook.com");
}
    render() {
        return (
            <ImageBackground 
            source={require("../images/football1.jpg")}
            style={styles.BgImage}
            imageStyle={{resizeMode: 'stretch'}}>                
                <View style={styles.wrapper}>
                    <View style={styles.welcomeWrapper}>
                        <Image 
                            style={styles.logo}
                            source={require("../images/mylogo.png")}>                    
                        </Image>                
                        <Text
                            style={styles.welcomeText}>
                            connect with sports professional.
                        </Text>
                        <RoundedButton
                            text="Sign up with Email"
                            textColor={colors.green01}
                            backgroundColor={colors.white}                            
                        />
                        <RoundedButton text="Sign up as Scout" textColor={colors.white} />
                        <View style={[styles.iconstyle,{paddingBottom:15}]}>
                        <SocialIcon
                        type="facebook"                        
                        onPress={() => {this.onOpenlink()}}
                        />
                        <SocialIcon
                        type="google"
                        onPress={() => {this.onOpenlink()}}
                        />
                        <SocialIcon
                        type="instagram"
                        onPress={() => {this.onOpenlink()}}
                        />
                        </View>
                        <RoundedButton text="I already have an account" textColor={colors.white} />
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
        alignItems:'center',
    },
    welcomeWrapper:{
        marginTop:30,
        padding:20,
        alignItems:'center',
    },
    logo:{
        width:100,
        height:50,
        marginTop:50,
        marginBottom:20,        
    },
    BgImage:{
        width:null,
        height:null,
        flex:1,        
    },
    welcomeText:{
        fontSize:18,
        color:'yellow',
        textAlign:'left',
        marginBottom:200
    },
    iconstyle:{
        //flex:1,
        flexDirection:'row',        
        marginBottom:100,
    }
})