//This is an example code for Navigation Drawer with Custom Side bar//
import React, { Component } from 'react';
import { View, StyleSheet, Share, Text } from 'react-native';
import { Icon } from 'react-native-elements';
 
export default class CustomSidebarMenu extends Component {
  constructor() {
    super();
    //Setting up the Main Top Large Image of the Custom Sidebar
    //this.proileImage ='https://aboutreact.com/wp-content/uploads/2018/07/sample_img.png';
    //Array of the sidebar navigation option with icon and screen to navigate
    //This screens can be any screen defined in Drawer Navigator in App.js
    //You can find the Icons from here https://material.io/tools/icons/
    this.items = [
      {
        navOptionThumb: "scanner",
        navOptionName: 'Scan',
        screenToNavigate: 'NavScreen_ScanApp',
      },
/*      {
        navOptionThumb: 'image',
        navOptionName: 'History',
        screenToNavigate: 'NavScreen2',
      },
      {
        navOptionThumb: 'build',
        navOptionName: 'Settings',
        screenToNavigate: 'NavScreen3',
      },
*/  
      {
        navOptionThumb: 'share',
        navOptionName: 'Share',
        screenToNavigate: 'NavScreen_ScanApp',
      },
    ];
  }
  shareMessage() {
    Share.share({message: 'I have installed the wonderful barcode and qr code scanner app. Download it from google play store.' +
                          'https://play.google.com/store/apps/details?id=com.barcodeapp&hl=en'});                  
  }
  render() {
    if(global.currentScreenIndex!==1)
    {
    return (
      <View style={styles.sideMenuContainer}>                                
        {/*Setting up Navigation Options from option array using loop*/}
        <View style={{ width: '100%' }}>
          {this.items.map((item, key) => (
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                paddingTop: 10,
                paddingBottom: 10,
                backgroundColor: global.currentScreenIndex === key ? '#e0dbdb' : '#ffffff',
              }}
              key={key}>
                
              <View style={{ marginRight: 10, marginLeft: 10 }}>
                <Icon name={item.navOptionThumb} size={35} type='AntDesign'/>
              </View>
              <Text
                style={{
                  fontSize: 20,
                  color: global.currentScreenIndex === key ? 'red' : 'black',
                }}
                onPress={() => {
                  global.currentScreenIndex = key;
                  this.props.navigation.navigate(item.screenToNavigate);
                  console.log(global.currentScreenIndex)
                }}>
                {item.navOptionName}
              </Text>
            </View>
          ))}
        </View>
      </View>
    );
   }
   else{
    return (
      <View style={styles.sideMenuContainer}>                                
        {/*Setting up Navigation Options from option array using loop*/}
        <View style={{ width: '100%' }}>
          {this.items.map((item, key) => (
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                paddingTop: 10,
                paddingBottom: 10,
                backgroundColor: global.currentScreenIndex === key ? '#e0dbdb' : '#ffffff',
              }}
              key={key}>
                
              <View style={{ marginRight: 10, marginLeft: 10 }}>
                <Icon name={item.navOptionThumb} size={35} type='AntDesign'/>
              </View>
              <Text
                style={{
                  fontSize: 20,
                  color: global.currentScreenIndex === key ? 'red' : 'black',
                }}
                onPress={() => {
                  global.currentScreenIndex = key;
                  this.shareMessage()
                  this.props.navigation.navigate(item.screenToNavigate);
                  console.log(global.currentScreenIndex)
                }}>
                {item.navOptionName}
              </Text>
            </View>
          ))}
        </View>
      </View>
    );
   }
  }
}
const styles = StyleSheet.create({
  sideMenuContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
    alignItems: 'center',
//    paddingTop: 20,
  },
  sideMenuProfileIcon: {
    resizeMode: 'center',
    width: 150,
    height: 150,
    marginTop: 20,
    borderRadius: 150 / 2,
  },
});