//This is an example code for Navigation Drawer with Custom Side bar//
import React, { Component } from 'react';
//import react in our code.
import { Text, View, Linking, TouchableHighlight, PermissionsAndroid, StyleSheet, 
  Share,Platform} from 'react-native';

import { CameraKitCameraScreen, } from 'react-native-camera-kit';

// import all basic components
 
export default class ScanApp extends Component {
  //Screen1 Component
  constructor() {
    super();
    
    this.state = {
      //variable to hold the qr value
      qrvalue: '',
      openScanner: false,
    };
  }

  onOpenlink() {
    //Function to open URL, If scanned 
    Linking.openURL(this.state.qrvalue);
    //Linking used to open the URL in any browser that you have installed
  }
  onBarcodeScan(qrvalue) {
    //called after te successful scanning of QRCode/Barcode
    this.setState({ qrvalue: qrvalue });
    this.setState({ openScanner: false });
  }
  onopenScanner() {
    var that =this;
    //To Start Scanning
    if(Platform.OS == 'android'){
      async function requestCameraPermission() {
        try {
          const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.CAMERA,{
              'title': 'Barcode App Camera Permission',
              'message': 'Barcode App needs access to your camera ',
            }
          )
          if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            //If CAMERA Permission is granted
            that.setState({ qrvalue: '' });
            that.setState({ openScanner: true });
          } else {
            alert("CAMERA permission denied");
          }
        } catch (err) {
          alert("Camera permission err",err);
          console.warn(err);
        }
      }
      //Calling the camera permission function
      requestCameraPermission();
    }else{
      that.setState({ qrvalue: '' });
      that.setState({ openScanner: true });
    }    
  }

  shareMessage() {
    Share.share({message: this.state.qrvalue}).then(this.onBarcodeScan);
  }

  render() {
    //If qrvalue is set then return this view
    if (!this.state.openScanner) {
      return (
        <View style={styles.container}>
            {/*<Text style={styles.heading}>React Native QR Code Example</Text> */}
            <Text style={styles.simpleText}>{this.state.qrvalue ? 'Scanned QR Code: '+this.state.qrvalue : ''}</Text>
            
            {this.state.qrvalue.includes("http") ? 
            
              <TouchableHighlight
                onPress={() => this.onOpenlink()}
                style={styles.button}>
                  <Text style={{ color: '#FFFFFF', fontSize: 12 }}>Open Link</Text>
              </TouchableHighlight>
              
              : <View>
                {this.onopenScanner()}
                </View>
            }
            
            <TouchableHighlight
              onPress={() => this.onopenScanner()}
              style={styles.button}>
                <Text style={{ color: '#FFFFFF', fontSize: 12 }}>
                Open QR Scanner
                </Text>
            </TouchableHighlight>

            <TouchableHighlight
            onPress={()=> this.shareMessage()}
            style={styles.button}>
              <Text style={{ color: '#FFFFFF',  fontSize: 12}}>
                Share
              </Text>
            </TouchableHighlight>        

        </View>  
      );
    }

    return (
      <View style={{ flex: 1 }}>
        <CameraKitCameraScreen
          showFrame={true}
          //Show/hide scan frame
          scanBarcode={true}
          //Can restrict for the QR Code only
          laserColor={'blue'}
          //Color can be of your choice
          frameColor={'yellow'}
          //If frame is visible then frame color
          colorForScannerFrame={'white'}
          //Scanner Frame color
          onReadCode={event =>
            this.onBarcodeScan(event.nativeEvent.codeStringValue)
          }          
        />
      </View>
    );
  }
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'white'
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#2c3539',
    padding: 10,
    width:300,
    marginTop:16
  },
  heading: { 
    color: 'black', 
    fontSize: 24, 
    alignSelf: 'center', 
    padding: 10, 
    marginTop: 30 
  },
  simpleText: { 
    color: 'black', 
    fontSize: 20, 
    alignSelf: 'center', 
    padding: 10, 
    marginTop: 16
  }
});