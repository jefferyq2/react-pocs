import React, { Component } from 'react';
import {
  Text,
  TouchableHighlight,
  Navigator,
  View
} from 'react-native';

import LoginView from '../login/login';
import styles from '../../styles/style';

class WelcomeView extends Component {
  constructor(props) {
    super(props);
    this.state = { pressStatus: false };
  }

  getStarted() {
    this.setState({ pressStatus: true });
    this.props.navigator.push({
      id: 'Login', title:'Login'
    });
  };

  render() {
    return (
     <View style={[styles.container, styles.navBarContent]}>
        <Text>Please tap below button to continue</Text>
        <TouchableHighlight style={styles.button}>
          <Text style={styles.whiteBoldText} onPress={this.getStarted.bind(this)}> Get Started</Text>
        </TouchableHighlight>
     </View>
    );
  }  
}

export default WelcomeView;
