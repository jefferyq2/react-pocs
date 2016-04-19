import React, {
    Component,
    Dimensions,
    Text,
    View
} from 'react-native';

import NavigationBar from 'react-native-navbar';

var {height, width} = Dimensions.get('window');

module.exports = class home_screen extends Component {

    render() {
        const rightButtonConfig = {
            title: 'Next',
            handler: () => alert('hello!'),
        };

        const leftButtonConfig = {
            title: 'Menu',
            handler: () => alert('show menu'),
        }

        const titleConfig = {
            title: 'Hello, world',
        };

        return (
            <View style={{ flex: 1, }}>
                <NavigationBar
                    title={titleConfig}
                    rightButton={rightButtonConfig}
                    leftButton={leftButtonConfig} />
                <Text>This is Home Screen </Text>
            </View>
        );
    }
}
