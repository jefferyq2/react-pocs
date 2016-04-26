/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';

import { NativeModules } from 'react-native';

var FacebookLoginManager = NativeModules.FacebookLoginManager;

class FacebookLogin extends Component {
  constructor(props){
    super(props);
    this.state = {
      result:'...',
      error:'error'
    };
  }
  
  login(){
    FacebookLoginManager.newSession((error, info) => {
      if (error){
        this.setState({result: error});
      }
      else{
        this.setState({result: info});
      }
    });
  }
  
  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight onPress={this.login}>
          <Text style={styles.welcome}>
            Facebook Login
          </Text>
         </TouchableHighlight>
         <Text style={styles.instructions}>
          {this.state.result}
         </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('FacebookLogin', () => FacebookLogin);
