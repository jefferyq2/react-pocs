import React, {
    Dimensions,
    StyleSheet
} from 'react-native';

const currentScreenSize = Dimensions.get('window');
const imageHeightInPercentage = 0.4;

const Styles = StyleSheet.create({
    container: {
        marginTop: 65
    },
    image: {
        flex: 1,
        alignSelf: 'stretch',
        height: currentScreenSize.height * imageHeightInPercentage
    },
    heading: {
        backgroundColor: '#F8F8F8'
    },
    price: {
        fontSize:25,
        fontWeight: 'bold',
        color: '#48BBEC',
        margin: 5       
    },
    title:{
        fontSize: 20,
        color: '#656565',
        margin: 5
    },
    separator: {
        height: 1,
        backgroundColor: '#DDDDDD'
    },
    stats: {
        fontSize: 17,
        color: '#656565',
        margin: 5
    }
});

export default Styles;