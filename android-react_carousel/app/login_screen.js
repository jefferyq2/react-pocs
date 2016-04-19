import React, {
    Component,
    Dimensions,
    StyleSheet,
    Text,
    Image,
    View,
    TextInput,
    TouchableOpacity
} from 'react-native';


var {height, width} = Dimensions.get('window');

module.exports = class login_screen extends Component {

    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={styles.bgImageWrapper}>
                    <Image
                        source={{ uri: 'https://images.unsplash.com/photo-1441260038675-7329ab4cc264?h=1024' }}
                        style={styles.bgImage} />
                </View>
                <View style={styles.container}>
                    <TextInput
                        style={styles.inputText2}
                        placeholder={`Username`} />
                    <TextInput
                        style={styles.inputText2}
                        placeholder={`Password`} />
                    <TouchableOpacity onPress={this._onPressButton.bind(this) } style={styles.simpleButton}>
                        <View
                            onPress={this._onPressButton.bind(this) } >
                            <Text style={styles.simpleButtonText}> Login</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }

    _onPressButton() {
        this.props.navigator.push({ id: 'HomeScreen' });
    }
}

var styles = StyleSheet.create({
    bgImageWrapper: {
        position: 'absolute',
        top: 0, bottom: 0, left: 0, right: 0
    },
    bgImage: {
        flex: 1,
        resizeMode: "stretch"
    },
    inputText: {
        width: 300,
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        borderBottomWidth: 2
    },
    inputText2: {
        width: 300,
        height: 40,
        backgroundColor: 'white',
        borderColor: '#48209A',
        borderWidth: 1,
        borderRadius: 4,
        paddingHorizontal: 20,
        paddingVertical: 10,
        shadowColor: 'darkgrey',
        shadowOffset: {
            width: 1,
            height: 1
        },
        shadowOpacity: 0.8,
        shadowRadius: 1,
        marginBottom: 10
    },
    simpleButton: {
        backgroundColor: '#5B29C1',
        borderColor: '#48209A',
        borderWidth: 1,
        borderRadius: 4,
        paddingHorizontal: 20,
        paddingVertical: 10,
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
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-end',
        marginBottom: 100
    }
});