/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

var Fabric = require('react-native-fabric');

var { Crashlytics } = Fabric;

Crashlytics.setUserName('Kadek Juliana Parwanta');

Crashlytics.setUserEmail('kadek.parwanta@gmail.com');

Crashlytics.setUserIdentifier('1234');

Crashlytics.setBool('has_posted', true);

Crashlytics.setString('organization', 'Mitrais');

class FabricCrashlytic extends Component {

  crashme() {
    // Forces a native crash for testing 
    Crashlytics.crash();
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to FabricCrashlytic!
        </Text>
        <Text style={styles.instructions}>
          Tap button below to simulate a crash
        </Text>
        <TouchableOpacity
          onPress={() => this.crashme() }
          style={styles.simpleButton}>
          <View >
            <Text style={styles.simpleButtonText}> Crash Me</Text>
          </View>
        </TouchableOpacity>
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
  simpleButton: {
    width: 250,
    backgroundColor: '#428BFF',
    borderColor: '#275399',
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 10,
    paddingVertical: 5,
    shadowColor: 'darkgrey',
    shadowOffset: {
      width: 1,
      height: 1
    },
    shadowOpacity: 0.8,
    shadowRadius: 1,
    alignItems: 'center',
  },
  simpleButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16
  },
});

AppRegistry.registerComponent('FabricCrashlytic', () => FabricCrashlytic);