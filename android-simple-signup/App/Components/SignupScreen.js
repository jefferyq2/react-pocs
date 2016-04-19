import React, {
    StyleSheet,
    View,
    Text,
    TextInput
} from 'react-native';

import SimpleButton from './SimpleButton';

var VALID_USERNAME = [
    {username:'zul',password:'password'},
    {username:'admin',password:'password'},
    {username:'jules',password:'password'}
];

export default class SignupScreen extends React.Component{
   constructor(props){
        super(props)
        this.state={
            username:'',
            password:'',
            message:''          
        }
    }
    
        signup(username, password){
        this.setState({message:'Login Failed'});
        for (var i=0; i < VALID_USERNAME.length; i++) {
            if (username === VALID_USERNAME[i].username && password === VALID_USERNAME[i].password){
                this.setState({message:''});
                this.props.navigator.push({
                    name: 'role',
                    username: username
                });
            }
        }     
    }
    
    render(){
        return(
            <View style={styles.container}>
                 <Text style={styles.message}>
                    {this.state.message}
                </Text>
                <TextInput 
                    style={styles.textInput}
                    placeholder='username'
                    onChangeText={(username) => this.setState({username})}
                 />
                    
                <TextInput
                    style={styles.textInput}
                    placeholder='password'
                    onChangeText={(password) => this.setState({password})}
                />
                
                <SimpleButton
                    style={styles.simpleButton}
                    textStyle={styles.simpleButtonText}
                    customText='Sign Up'
                     onPress={() => this.signup(this.state.username, this.state.password)}
                />
                
                <Text style = {styles.textInfo}>
                    Valid Usernames & Passwords : zul & password, jules & password, admin & password
                </Text> 
               
            </View>
        );
    }
}

var styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textInput:{
        fontSize: 20,
        height: 50
    },
    message:{
        fontSize: 20,
    },
    simpleButton:{
        backgroundColor: '#5B29C1',  
        paddingHorizontal: 20,
        paddingVertical: 15,
        borderColor: '#48209A',
        borderWidth: 1,
        borderRadius: 4,
        shadowColor: 'darkgrey',
        shadowOffset: {
            width: 1,
            height: 1
        },  
        shadowOpacity: 0.8,
        shadowRadius: 1,
        marginTop: 20,
        marginBottom: 20
    },
    simpleButtonText:{
        color:'white',
        fontWeight:'bold',
        fontSize: 20
    },
    textInfo:{
        fontSize: 20,
        marginBottom: 200
    }
});