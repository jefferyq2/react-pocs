import React, {
    StyleSheet
} from 'react-native';

const Styles = StyleSheet.create({
    image: {
        width: 80,
        height: 80,
        marginRight: 10        
    },
    rowContainer: {
        flexDirection: 'row',
        padding: 10
    },
    textContainer: {
        flex: 1
    },
    price: {
        fontSize:20,
        fontWeight: 'bold',
        color: '#48BBEC'
    },
    title:{
        fontSize: 15,
        color: '#656565'
    }
});

export default Styles;