import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput
}from 'react-native';
import colors from '../style/color'

class InputField extends Component {
    render() {
        const {
            labelText,
            labelTextSize,
            labelColor,
            textColor,
            borderBottomColor,
            inputType,
            customStyle
            } = this.props;
            const color = labelColor || colors.white;
            const fontSize = labelTextSize || 14;
            const inputColor = textColor || colors.black;
            const borderBottom = borderBottomColor || "transparent";
        return(
            <View style={[customStyle,styles.wrapper]}>
                <Text style={[{color,fontSize},styles.label]}>
                    {labelText}
                </Text>
                <TextInput
                    autoCorrect={false}
                    style={[
                        { color: inputColor, borderBottomColor: borderBottom },
                            styles.inputFiled
                        ]}
                        secureTextEntry={inputType === "password"}
                        />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    wrapper: {
      display: "flex"
    },
    label: { fontWeight: "700", marginBottom: 10 },
    inputFiled: {
      borderWidth: 2,
      //paddingTop: 5,
      //paddingBottom: 5,
      borderRadius:40,
      borderColor:colors.white,
      backgroundColor:colors.white,      
    }
  });
  export default InputField;