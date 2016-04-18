import React, {
    StyleSheet,
    View,
    Text
} from 'react-native';

export default class HomeScreen extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.welcomeMessage}>{"Welcome " + this.props.username + " the " + this.props.role + "!"}</Text>
            </View>
        );
    }
}

var styles = StyleSheet.create({
    container : {
        flexDirection: 'column',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    welcomeMessage : {
       fontSize: 20
    }
});