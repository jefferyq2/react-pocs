/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
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

const simpleAuthClient = require('./lib/simpleauthclient');
const secrets = require('./secrets.example')
const profile = require('./profile').default;

class ios_MediaSocialSignIn extends Component {
  render() {
    return (
      <NavigatorIOS
        style={styles.container}
        initialRoute={{
          title: 'Social Sign In',
          component:Login ,
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

const styles = StyleSheet.create({
 text: {
    color: 'black',
    backgroundColor: 'white',
    fontSize: 30
  },
  container: {
    flex: 1
  },
  content: {
    flex: 1,
    marginTop: 80,
    marginRight: 10,
    marginLeft: 10
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    alignSelf: 'center'
  },
  button: {
    height: 36,
    flexDirection: 'row',
    borderRadius: 8,
    marginBottom: 10,
    justifyContent: 'center'
  },
  pic: {
    width: 100,
    height: 100
  },
  mono: {
    fontFamily: 'Menlo',
    paddingTop: 10
  },
  scroll: {
    marginTop: 0,
    paddingTop: 0,
    backgroundColor: '#f2f2f2',
    borderColor: '#888',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
    flexDirection: 'row'
  },
  header: {
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 10,
    fontSize: 16
  },
  loading: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  'google-web': {
    backgroundColor: '#ccc'
  },
  instagram: {
    backgroundColor: '#3F729B'
  },
});

AppRegistry.registerComponent('ios_MediaSocialSignIn', () => ios_MediaSocialSignIn);
