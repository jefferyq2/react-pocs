import React, {
    Component,
    Dimensions,
    StyleSheet,
    Text,
    View,
    Alert,
    Navigator,
    Image,
    TouchableOpacity
} from 'react-native';

import Carousel from "react-native-carousel-control";

var {height, width} = Dimensions.get('window');

module.exports = class carousel_screen extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <Carousel style={{ flex: 1 }}>
                    <View style={{ flex: 1 }}>
                        <View style={styles.bgImageWrapper}>
                            <Image
                                source={{ uri: 'https://images.unsplash.com/photo-1441742917377-57f78ee0e582?h=1024' }}
                                style={styles.bgImage} />
                        </View>
                        <View style={styles.containerWelcom}>
                            <Text style={styles.welcome}>
                                Welcome to React Native!
                            </Text>
                        </View>
                    </View>
                    <View style={styles.container}>
                        <View style={styles.bgImageWrapper}>
                            <Image
                                source={{ uri: 'https://images.unsplash.com/photo-1441716844725-09cedc13a4e7?h=1024' }}
                                style={styles.bgImage} />
                        </View>
                        <View style={styles.containerWelcom}>
                            <Text style={styles.welcome}>
                                Second Page!
                            </Text>
                        </View>
                    </View>
                    <View style={styles.container}>
                        <View style={styles.bgImageWrapper}>
                            <Image
                                source={{ uri: 'https://images.unsplash.com/photo-1441448770220-76743f9e6af6?h=1024' }}
                                style={styles.bgImage} />
                        </View>
                        <View style={styles.containerWelcom}>
                            <Text style={styles.welcome}>
                                Third Page!
                            </Text>
                        </View>
                    </View>
                </Carousel>
                <View>
                    <View style={styles.footer}>
                        <TouchableOpacity onPress={this._onPressButton.bind(this) } style={styles.footerButton}>
                            <View >
                                <Text style={styles.simpleButtonText}>Cancle</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this._onPressButton.bind(this) } style={styles.footerButton}>
                            <View >
                                <Text style={styles.simpleButtonText}>OK</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }

    _onPressButton() {
        // Alert.alert( 'Alert Title', 'My Alert Msg');
        this.props.navigator.push({ id: 'LoginScreen' });
    }
}

var styles = StyleSheet.create({
    container: {
        width: width,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent',
    },
    simpleButton: {
        backgroundColor: '#5B29C1',
        borderColor: '#48209A',
        borderWidth: 1,
        borderRadius: 4,
        paddingHorizontal: 20,
        paddingVertical: 15,
        shadowColor: 'darkgrey',
        shadowOffset: {
            width: 1,
            height: 1
        },
        shadowOpacity: 0.8,
        shadowRadius: 1,
    },
    simpleButtonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16
    },
    bgImageWrapper: {
        position: 'absolute',
        top: 0, bottom: 0, left: 0, right: 0
    },
    bgImage: {
        flex: 1,
        resizeMode: "stretch"
    },
    welcome: {
        color: 'white',
        fontSize: 20,
        margin: 10
    },
    containerWelcom: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'center'
    },
    footer: {
        flexDirection: 'row'
    },
    footerButton: {
        flex: 1,
        backgroundColor: '#5B29C1',
        borderColor: '#48209A',
        borderWidth: 1,
        paddingHorizontal: 20,
        paddingVertical: 15,
        shadowColor: 'darkgrey',
        shadowOffset: {
            width: 1,
            height: 1
        },
        shadowOpacity: 0.8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    footerText: {
        color: 'white'
    }
});