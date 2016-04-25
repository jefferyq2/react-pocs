/**
 * Social Login in React Native created by Irna - Mitrais cdc team , contoh ini :D
 * 
 */

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  Image,
  NavigatorIOS,
  TouchableHighlight,
  ActivityIndicatorIOS
} from 'react-native';

import styles from './styles';
import Login from './login';

class ios_MediaSocialSignIn extends Component {
  render() {
    return (
      <NavigatorIOS
        style={styles.container}
        initialRoute={{
          title: 'Social Sign In',
          component: Login,
          passProps: {
            authProviders: [
              'google-web',
              'instagram'
            ]
          }
        }}/>
    );
  }
}
AppRegistry.registerComponent('ios_MediaSocialSignIn', () => ios_MediaSocialSignIn);
