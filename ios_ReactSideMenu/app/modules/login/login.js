'use strict';
import React,  {Component} from 'react';
import {
   StyleSheet,
  Text,
  Alert,
  TouchableHighlight,
  TextInput,
  Navigator,
  View
} from 'react-native'; 

import styles from '../../styles/style';

class LoginView extends Component {
   constructor (props) {
       super(props);
       this.state = {email:'text@email.com', password:'password'}
   }

   signIn () {
       if (this.state.email == 'text@email.com' && this.state.password == 'password') {
             var a = this.props.navigator.getCurrentRoutes(); 
        var b = a;
           this.props.navigator.push({
                id: 'Menu', title:'Menu'
            });
       }
       else {
           Alert.alert(
            'Message',
            'Incorrect Email or password. Please fill the form with valid data',
          )
       }
   } 
   
    onTextInputEmailChanged(event){
        this.setState({email: event.nativeEvent.text});
    }
    onTextInputPasswordChanged(event){
        this.setState({password: event.nativeEvent.text});
    }
   
   render () {
       return (
           <View style={styles.container}>
            <Text>Please login before continue</Text>
             <TextInput style={styles.textInput} placeholder="Email"  onChange={this.onTextInputEmailChanged.bind(this)} value ={this.state.email}/>
             <TextInput secureTextEntry={true} style={styles.textInput} placeholder="********" onChange={this.onTextInputPasswordChanged.bind(this)} value={this.state.password}/>
             <TouchableHighlight style = {[styles.button, styles.buttonFull]} onPressIn={this.signIn.bind(this)}>
                <Text style={styles.whiteBoldText}>Login</Text>
             </TouchableHighlight>
           </View>
       )
   }
}

export default LoginView;