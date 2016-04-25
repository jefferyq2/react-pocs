'use strict';

import React, {
    AppRegistry,
    Component,
    StyleSheet,
    Text,
    View
} from 'react-native';

import Styles from './style_home';

class HomeScreen extends Component {
    render() {
        return (
            <View style={Styles.container}>
                <Text style={Styles.welcome}>
                    Welcome to React Native!
                </Text>
                <Text style={Styles.instructions}>
                    To get started, edit index.android.js
                </Text>
                <Text style={Styles.instructions}>
                    Shake or press menu button for dev menu
                </Text>
            </View>
        );
    }
}

module.exports = HomeScreen;