"use strict";

import React, {
    Component,
    Image,
    PropTypes,
    StyleSheet,
    TouchableOpacity,
    View
} from 'react-native';

const styles = StyleSheet.create({
    button: {
        marginTop: 15,
        marginLeft: 15        
    }
});

/**
 * Custom JSX Tag for rendering navigation button
 */
class NavigationBackButton extends Component{
    render(){
        return (
            <TouchableOpacity style={styles.button} onPress={this.props.onPress}>
                <View>
                    <Image source={require('../../../Resources/left-arrow-24px.png')}/>                                    
                </View>
            </TouchableOpacity>
        );
    }
}

/** Define properties validation for <NavigationButton> */
NavigationBackButton.propTypes = {
    onPress: PropTypes.func.isRequired
};

export default NavigationBackButton;