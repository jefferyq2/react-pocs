"use strict";
import React, {
  StyleSheet,
  Dimensions
} from 'react-native';

var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  menuContent : {
    height:100,
    backgroundColor: 'black'
  },
  navBarContent : {
    top:60
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
  whiteBoldText: {
    color: 'white',
    fontWeight: 'bold'
  },
  button: {
    alignSelf: 'center',
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#48BBEC',
    margin: 10
  },
  buttonFull: {
    width: width - 40,
    alignItems: 'center'
  },
  buttonPress: {
    alignSelf: 'center',
    padding: 10,
    borderRadius: 10,
    backgroundColor: 'black'
  },
  textInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginRight: 20,
    marginLeft: 20,
    marginTop: 5,
    marginBottom: 5,
    borderRadius: 5,
    padding: 5
  },
  navbar: {
    backgroundColor: '#48BBEC',
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2'
  },
  navbarTitle: {
    color: 'white',
    fontSize: 16,
    marginTop: 15,
    fontWeight: 'bold'
  }
});

export default styles;