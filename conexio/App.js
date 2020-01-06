
import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
}from 'react-native';

import LoggedOut from './src/screen/LoggedOut.js'
//import Login from './src/screen/Login';


export default class App extends Component {
  render() {
    return <LoggedOut/>;
  }
}


/*
//instagram sign in
import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Alert,
  Image,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import CookieManager from 'react-native-cookies';
import InstagramLogin from 'react-native-instagram-login'
import store from 'react-native-simple-store'

export default class App extends Component {

  setIgToken = async (data) => {
    await store.save('igToken', data.access_token)
    await store.save('igUserId', data.user_id)
    this.setState({ igToken: data.access_token, igUserId: data.user_id})
  }
 
  logout() {
    CookieManager.clearAll()
      .then((res) => {
        console.log('CookieManager.clearAll =>', res);
        this.setState({ token: '' })
      });
  }

  render() {
    return(
      <View>
    <TouchableOpacity onPress={()=> this.instagramLogin.show()}>
        <Text style={{color: 'white'}}>Login</Text>
    </TouchableOpacity>
    <InstagramLogin
        ref={ref => (this.instagramLogin = ref)}
        appId='1445074925654880'
        appSecret='bde6009d55d9e7eaeeae551b06454399'
        redirectUrl='http://www.appinventers.com/#/'
        scopes={['user_profile', 'user_media']}
        onLoginSuccess={ this.setIgToken }
        onLoginFailure={(data) => console.log(data)}
      />
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageStyle: {
    width: 200,
    height: 300,
    resizeMode: 'contain',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    width: 300,
    marginTop: 30,
  },
});
*/

/*
//google sign in
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Alert,
  Image,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from 'react-native-google-signin';
 
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: null,
      gettingLoginStatus: true,
    };
  }
 
  componentDidMount() {
    //initial configuration
    GoogleSignin.configure({
      //It is mandatory to call this method before attempting to call signIn()
      //scopes: ['https://www.googleapis.com/auth/drive.readonly'],
      scopes: ['https://www.googleapis.com/auth/drive', 'https://www.googleapis.com/auth/drive.metadata', 'https://www.googleapis.com/auth/drive.appdata', 'https://www.googleapis.com/auth/drive.file', 'https://www.googleapis.com/auth/drive.metadata.readonly', 'https://www.googleapis.com/auth/drive.scripts', 'https://www.googleapis.com/auth/drive.readonly', 'https://www.googleapis.com/auth/drive.photos.readonly'],
      // Repleace with your webClientId generated from Firebase console
      webClientId: '464472978423-1r5i6kpcguen0rf39cmu8phml4ju99r4.apps.googleusercontent.com',
    });
    //Check if user is already signed in
    this._isSignedIn();
  }
 
  _isSignedIn = async () => {
    const isSignedIn = await GoogleSignin.isSignedIn();
    if (isSignedIn) {
      alert('User is already signed in');
      //Get the User details as user is already signed in
      this._getCurrentUserInfo();
    } else {
      //alert("Please Login");
      console.log('Please Login');
    }
    this.setState({ gettingLoginStatus: false });
  };
 
  _getCurrentUserInfo = async () => {
    try {
      const userInfo = await GoogleSignin.signInSilently();
      console.log('User Info --> ', userInfo);
      this.setState({ userInfo: userInfo });
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_REQUIRED) {
        alert('User has not signed in yet');
        console.log('User has not signed in yet');
      } else {
        alert("Something went wrong. Unable to get user's info");
        console.log("Something went wrong. Unable to get user's info");
      }
    }
  };
 
  _signIn = async () => {
    //Prompts a modal to let the user sign in into your application.
    try {
      await GoogleSignin.hasPlayServices({
        //Check if device has Google Play Services installed.
        //Always resolves to true on iOS.
        showPlayServicesUpdateDialog: true,
      });
      const userInfo = await GoogleSignin.signIn();
      console.log('User Info --> ', userInfo);
      this.setState({ userInfo: userInfo });
    } catch (error) {
      console.log('Message', error.message);
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        console.log('User Cancelled the Login Flow');
      } else if (error.code === statusCodes.IN_PROGRESS) {
        console.log('Signing In');
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        console.log('Play Services Not Available or Outdated');
      } else {
        console.log('Some Other Error Happened');
      }
    }
  };
 
  _signOut = async () => {
    //Remove user session from the device.
    try {
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();
      this.setState({ userInfo: null }); // Remove the user from your app's state as well
    } catch (error) {
      console.error(error);
    }
  };
 
  render() {
    //returning Loader untill we check for the already signed in user
    if (this.state.gettingLoginStatus) {
      return (
        <View style={styles.container}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      );
    } else {
      if (this.state.userInfo != null) {
        //Showing the User detail
        return (
          <View style={styles.container}>
            <Image
              source={{ uri: this.state.userInfo.user.photo }}
              style={styles.imageStyle}
            />
            <Text style={styles.text}>
              Name: {this.state.userInfo.user.name}{' '}
            </Text>
            <Text style={styles.text}>
              Email: {this.state.userInfo.user.email}
            </Text>
            <TouchableOpacity style={styles.button} onPress={this._signOut}>
              <Text>Logout</Text>
            </TouchableOpacity>
          </View>
        );
      } else {
        //For login showing the Signin button
        return (
          <View style={styles.container}>
            <GoogleSigninButton
              style={{ width: 312, height: 48 }}
              size={GoogleSigninButton.Size.Wide}
              color={GoogleSigninButton.Color.Light}
              onPress={this._signIn}
            />
          </View>
        );
      }
    }
  }
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageStyle: {
    width: 200,
    height: 300,
    resizeMode: 'contain',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    width: 300,
    marginTop: 30,
  },
});
*/

/*
import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import InstagramLogin from './src/screen/InstaLogin';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      token: ''
    };
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <TouchableOpacity
          style={{
            borderRadius: 5,
            backgroundColor: 'orange',
            height: 30, width: 100,
            justifyContent: 'center',
            alignItems: 'center'
          }}
          onPress={() => this.instagramLogin.show()}>
          <Text style={{ color: 'white', textAlign: 'center' }}>Login now</Text>
        </TouchableOpacity>
        <Text style={{ margin: 10 }}>Token: {this.state.token}</Text>
        {this.state.failure && <View>
          <Text style={{ margin: 10 }}>failure: {JSON.stringify(this.state.failure)}</Text>
        </View>}
        <InstagramLogin
          ref={ref => (this.instagramLogin = ref)}
          clientId="931cca1d0c154de3aafd83300ff8b288"
          redirectUrl="https://google.com"
          scopes={['user_profile', 'user_media']}
          onLoginSuccess={token => this.setState({ token })}
          onLoginFailure={data => this.setState({ failure: data })}
        />        
      </View>
    );
  }
}

export default App;
*/