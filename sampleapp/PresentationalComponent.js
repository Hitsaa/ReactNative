import React, {Component} from 'react'
import {Text, View,StyleSheet} from 'react-native';

const PresentationalComponent=(props) => {
    return(
        <View>
            <Text style = {styles.title} onPress={props.deleteText}>
                {props.myText}
            </Text>
        </View>
    )
}

export default PresentationalComponent

const styles = StyleSheet.create({
    title: {
        fontSize: 30,
        color: 'blue',
        fontWeight:'bold'
    }
})
