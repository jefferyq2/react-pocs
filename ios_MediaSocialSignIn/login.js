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

const simpleAuthClient = require('./lib/simpleauthclient');
const secrets = require('./secrets.example');
const profile = require('./profile');

import styles from './styles';

class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: false
    };
  }

  componentWillMount() {
    simpleAuthClient.configure(secrets);
  }

  render() {
    return (
      <View style={styles.content}>
        {
          this.state.loading ? null : this.props.authProviders.map(provider => {
            return (
              <TouchableHighlight
                style={[styles.button, styles[provider]]}
                onPress={this.onBtnPressed.bind(this, provider)}>
                <Text style={[styles.buttonText]}>{provider.split('-')[0]}</Text>
              </TouchableHighlight>
            );
          })
        }
        <ActivityIndicatorIOS
            animating={this.state.loading}
            style={[styles.loading]}
            size='large' />
      </View>
    );
  }

  onBtnPressed(provider) {
    this.setState({
      loading: true
    });
    simpleAuthClient.authorize(provider)
      .then(info => {
        this.props.navigator.push({
          title: provider,
          component: Profile,
          passProps: {
            info: info,
            provider: provider
          }
        });
        this.setState({
          loading: false
        });
      })
      .catch(error => {
          React.AlertIOS.alert(
              'Authorize Error',
              error && error.description || '');
        this.setState({
          loading: false
        });
      });
  }
}

// Export Login class to outside world
export default Login;