'use strict';

var React = require('react-native');
var {
    AppRegistry,
    StyleSheet,
    Component,
    Text,
    View,
    Navigator,
    TouchableOpacity,
    BackAndroid
} = React;

var CarouselScreen = require('./carousel_screen');
var LoginScreen = require('./login_screen');
var HomeScreen = require('./home_screen');
var nav;

class App extends Component {
    render() {
        return (
            <Navigator
                initialRoute={{ id: 'CarouselScreen', name: 'Index' }}
                renderScene={this.renderScene.bind(this) }
                configureScene={(route) => {
                    if (route.sceneConfig) {
                        return route.sceneConfig;
                    }
                    return Navigator.SceneConfigs.FloatFromRight;
                } } />
        );
    }

    renderScene(route, navigator) {
        nav = navigator;
        var routeId = route.id;
        if (routeId === 'CarouselScreen') {
            return (
                <CarouselScreen
                    navigator={navigator} />

            );
        }
        if (routeId === 'LoginScreen') {
            return (
                <LoginScreen
                    navigator={navigator} />
            );
        }
        if (routeId === 'HomeScreen') {
            return (
                <HomeScreen
                    navigator={navigator} />
            );
        }
    }
}

BackAndroid.addEventListener('hardwareBackPress', function () {
    if (nav && nav.getCurrentRoutes().length > 1) {
        nav.pop();
        return true;
    }
    return false;
});

module.exports = App;
