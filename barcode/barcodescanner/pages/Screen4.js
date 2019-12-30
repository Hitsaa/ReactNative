//This is an example code for Navigation Drawer with Custom Side bar//
import React, { Component } from 'react';
//import react in our code.
import { StyleSheet, View, Share } from 'react-native';
// import all basic components
 
export default class Screen4 extends Component {
  
  shareMessage() {
    Share.share({message: 'I have installed the wonderful barcode and qr code scanner app. Download it from google play store.',
                  url: 'https://play.google.com/store/apps/details?id=com.barcodeapp&hl=en'});            
  }

  render() {
    return (
      <View>
        {this.shareMessage()}
      </View>
    );
  }
}
 
const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    paddingTop: 20,
    alignItems: 'center',
    marginTop: 50,
    justifyContent: 'center',
  },
});