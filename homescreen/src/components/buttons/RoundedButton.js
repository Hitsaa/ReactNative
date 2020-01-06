import React, { Component } from "react";
import propTypes from "prop-types";
import { Text, View, TouchableHighlight, StyleSheet } from "react-native";
import {Icon} from 'react-native-vector-icons';
import colors from "../../style/color";
export default class RoundedButton extends Component {
  render() {
    const { text, textColor } = this.props;    
    const backgroundColor = background || 'transparent'
    const color = textColor || color.black
    return (
      <TouchableHighlight style={[{ backgroundColor }, styles.wrapper]}>
        <View style={styles.ButtonTextWrapper} >
          {icon}
            <Text style={[{ color }, styles.buttonText]}>
              {text}
            </Text>
        </View>
      </TouchableHighlight>
    );
  }
}
RoundedButton.propTypes = {
  text: propTypes.string.isRequired,
  textColor: propTypes.string,
  backgroundColor: propTypes.string
};

const styles = StyleSheet.create({
    wrapper: {
      padding: 15,
      display: "flex",
      borderRadius: 40,
      borderWidth: 1,
      borderColor: colors.white
    },
    buttonText: {
      fontSize: 16,
      width: "100%",
      textAlign: "center"
    },
    ButtonTextWrapper: {
      flexDirection: "row",
      justifyContent: "flex-end"
    },
  });