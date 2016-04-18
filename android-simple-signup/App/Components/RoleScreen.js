import React, {
    StyleSheet,
    View,
    Text,
} from 'react-native';

import SimpleButton from './SimpleButton';

export default class RoleScreen extends React.Component{
    render(){
        return(
            <View style={styles.mainContainer}>  
                <View style={styles.textContainer}> 
                    <Text style={styles.textStyle}>{"What are you " + this.props.username +"?"}</Text>  
                </View>    
                <View style={styles.roleContainer}>
                    <View style={styles.subContainer}>
                        <SimpleButton
                        style={styles.simpleButton}
                        textStyle={styles.simpleButtonText}
                        customText='Merchant'
                        onPress={() => this.props.navigator.push({
                            name:'home',
                            username:this.props.username,
                            role:'Merchant'})}
                        />
                    </View>
                    <View style={styles.subContainer}>
                        <SimpleButton
                            style={styles.simpleButton}
                            textStyle={styles.simpleButtonText}
                            customText='Freelancer'
                            onPress={() => this.props.navigator.push({
                                name:'home', 
                                username:this.props.username,
                                role:'Freelancer'})}
                        />
                    </View>
                 </View>
            </View>         
        );
    }
}

var styles = StyleSheet.create({
    textStyle:{
        fontSize: 20,
        paddingVertical: 50,
    },
    textContainer:{
        justifyContent: 'center',
        alignItems: 'center'
    },  
    mainContainer:{
        marginTop: 100,
        flex: 1,
        flexDirection:'column',
        justifyContent: 'center',
    },
    roleContainer:{
        flexDirection:'row'
    },
    subContainer:{
        alignItems:'center',
        justifyContent: 'center',
        height: 30,
        flex: 1    
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
});