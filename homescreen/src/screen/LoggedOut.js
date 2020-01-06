import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  TouchableHighlight,
  ScrollView,
  StyleSheet
} from 'react-native';
import {Icon} from 'react-native-vector-icons';
import RoundedButton from "../components/buttons/RoundedButton";
import colors from "../style/color";
export default class LoggedOut extends Component {
  render() {
    return (
      <View style={styles.wrapper}>
        <View style={styles.welcomeWrapper}>
          <Image
            style={styles.logo}
            source={require("../images/mylogo.png")}
          />
          <Text style={styles.welcomeText}>
            Hi Hitendra
          </Text>
          <RoundedButton
            text="Connect to Facebook"
            textColor={colors.green01}
            backgroundColor={colors.white}
            icon={
              <Icon name="facebook" size={20} style={styles.facebookIcon} />
            }
          />
        </View>
        </View>
        );
    }
}

const styles = StyleSheet.create({
    wrapper: {
      flex: 1,
      display: "flex",
      backgroundColor: colors.green01 
    },
    welcomeWrapper: {
      flex: 1,
      display: "flex",
      marginTop: 30,
      padding: 20
    },
    logo: {
      width: 50,
      height: 50,
      marginTop: 50,
      marginBottom: 40
    },
    welcomeText: {
      fontSize: 30,
      color: colors.white,
      fontWeight: "300",
      marginBottom: 40
    },
    facebookIcon: {
      color: colors.green01,
      position: "relative",
      left: 20,
      zIndex: 8
    },
  });