"use strict";

import React, { Component } from 'react';
import {
  Image,
    PropTypes,
    StyleSheet,
    TouchableOpacity,
    View
} from 'react-native';


const styles = StyleSheet.create({
    button: {
        marginRight:10
    }
});

/**
 * Custom JSX Tag for rendering navigation button
 */
class MenuButton extends Component{
    render(){
        return (
            <TouchableOpacity style={styles.button} onPress={this.props.onPress}>
                <View>
                    <Image source={require('../../../Resources/menu-icon.png')}/>                                    
                </View>
            </TouchableOpacity>
        );
    }
}

export default MenuButton;