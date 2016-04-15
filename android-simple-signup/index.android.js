/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  TextInput,
  Navigator,
  View
} from 'react-native';

import HomeScreen from './App/Components/HomeScreen';
import SignupScreen from './App/Components/SignupScreen';
import SimpleButton from './App/Components/SimpleButton'

var NavigationBarRouteMapper = {
    LeftButton: function (route, navigator, index, navState){
        switch (route.name){
            case 'home':
                return (
                    <SimpleButton
                        onPress={() => navigator.pop()}
                        customText='Back'
                        style={styles.navBarLeftButton}
                        textStyle={styles.navBarButtonText}
                    />
                );
             default:
                return null;
        }    
    },
    
    RightButton: function (route, navigator, index, navState){
   
    },
    
    Title: function (route, navigator, index, navState){
        switch (route.name){
            case 'signup':
                return(
                    <Text style={styles.navBarTitleText}>Home Page</Text>
                );   
            case 'home':
                return(
                    <Text style={styles.navBarTitleText}>Signup Page</Text>
                );
        }
    }
}

class SimpleSignup extends React.Component {
    constructor (props){
      super (props)
      this.renderScene = this.renderScene.bind(this);
    }
   
    renderScene(route, navigator){
      switch(route.name){
        case 'signup' :
          return (
            <SignupScreen 
              navigator = {navigator}
              onPress = {() => navigator.push({
                name: 'home'
              })}
            />
          );
        case 'home' :
          return(
            <HomeScreen
              username = {route.username}
            />
          );     
      }      
    }
  
    render() {
    const initialRoute = {
      name: 'signup'
    };
 
    return (  
      <Navigator
        initialRoute={initialRoute}
        renderScene={this.renderScene}
        navigationBar={
          <Navigator.NavigationBar
            routeMapper={NavigationBarRouteMapper}
            style={styles.navBar}
          />
        }
      />
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
  navBar: {
        backgroundColor: '#5B29C1',
        borderBottomColor: '#48209A',
        borderBottomWidth: 1
  },
   navBarTitleText: {
        color: 'white',
        fontSize: 16,
        fontWeight: '500',
        marginVertical:16,
    },
    navBarLeftButton: {
        paddingLeft: 10
    },
    navBarRightButton: {
        paddingRight: 10
    },
    navBarButtonText: {
        color: '#EEE',
        fontSize: 16,
        marginVertical : 16
    }
});

AppRegistry.registerComponent('SimpleSignup', () => SimpleSignup);
