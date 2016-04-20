/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, {
  AppRegistry,
  PropTypes,
  Component,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TouchableHightlight
} from 'react-native';

import {GoogleSignin, GoogleSigninButton} from 'react-native-google-signin';

class GoogleSignup extends Component {
  
    constructor(props) {
    super(props);
    this.state = {
      user: null
    };
   }
   
   componentDidMount() {
    GoogleSignin.configure({
      scopes: [],
      webClientId: '30028181111-od252d2bsnarhubddjcqodoheq0ainm5.apps.googleusercontent.com',
      offlineAccess: true
    });

    GoogleSignin.currentUserAsync().then((user) => {
      console.log('USER', user);
      this.setState({user: user});
    }).done();
  }
  
  render() {
      if (!this.state.user) {
      return (
        <View style={styles.container}>
          <GoogleSigninButton style={{width: 120, height: 44}} color={GoogleSigninButton.Color.Light} size={GoogleSigninButton.Size.Icon} onPress={() => { this._signIn(); }}/>
        </View>
      );
    }
    
       if (this.state.user) {
      return (
        <View style={styles.container}>
          <Text style={{fontSize: 18, fontWeight: 'bold', marginBottom: 20}}>Welcome {this.state.user.name}</Text>
          <Text>Your email is: {this.state.user.email}</Text>

          <TouchableOpacity onPress={() => {this._signOut(); }}>
            <View style={{marginTop: 50}}>
              <Text>Log out</Text>
            </View>
          </TouchableOpacity>
        </View>
      );
    }
    
    
  }
  
   _signIn() {
    GoogleSignin.signIn()
    .then((user) => {
      console.log(user);
      this.setState({user: user});
    })
    .catch((err) => {
      console.log('WRONG SIGNIN', err);
    })
    .done();
  }
  
  _signOut() {
    GoogleSignin.revokeAccess().then(() => GoogleSignin.signOut()).then(() => {
      this.setState({user: null});
    })
    .done();
  }
};

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});

AppRegistry.registerComponent('GoogleSignup', () => GoogleSignup);
