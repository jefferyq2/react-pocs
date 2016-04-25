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

class Profile extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            name: this.getName(props.provider),
            picture: this.getPictureLink(props.provider)
        };
    }
    
  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.pic} source={{uri: this.state.picture}} />
        <Text style={styles.header}>{this.state.name} </Text>
        <View style={styles.scroll}>
            <Text style={styles.mono}>
            {JSON.stringify(this.props.info, null,4)}
            </Text>
        </View>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
      </View>
    );
  }
  
  getName(provider){
      switch(provider){
          case 'instagram':
            return this.props.name;
          default:
          return this.props.name
      }
  }
  
  getPictureLink(provider){
      switch (provider){
          case 'google-web':
            return this.props.info.picture;
          case 'instagram':
          return this.props.info.data.profile_picture;
      }
  }
}

//export default Profile;
module.exports = Profile;