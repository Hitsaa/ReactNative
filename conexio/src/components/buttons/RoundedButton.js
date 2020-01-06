import React, {Component}from 'react';
import {
    Text,
    View,
    TouchableHighlight,
    StyleSheet,
}from 'react-native';
import PropTypes from 'prop-types';
import colors from '../../style/color';
export default class RoundedButton extends Component{
    render() {
        const { text,textColor, backgroundColor, } = this.props;
    //    const backgroundColor = background || 'transparent'
    //    const color = textColor || color.black
        return(
            <TouchableHighlight 
            onPress={() => alert('Button pressed')}
            style={[{backgroundColor},styles.wrapper]}>                            
                <Text style={[{textColor},styles.buttonText]}>
                    {text}                    
                </Text>                                    
            </TouchableHighlight>                        
        );
    }
}

RoundedButton.PropTypes = {
    text: PropTypes.string.isRequired,
    textColor: PropTypes.colors,    //it is not required.
    backgroundColor: PropTypes.string,    
};

const styles=StyleSheet.create({
    wrapper:{
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
    },
});