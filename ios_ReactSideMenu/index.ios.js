/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  TextInput,
  Switch,
  TouchableHighlight,
  Navigator,
  View
} from 'react-native';

import WelcomeView from './app/modules/welcome/welcome';
import LoginView from './app/modules/login/login';
import styles from './app/styles/style';
import NavigationBackButton from './app/components/navigation-buttons/NavigationBackButton';
import MenuButton from './app/components/navigation-buttons/menu-button';
import DrawerLayout from 'react-native-drawer-layout';

class POC extends Component {
  constructor(props) {
    super(props);
    this.renderScene = this.renderScene.bind(this);
    this.state = { pressStatus: false, drawerLockMode: 'locked-closed' };
  }


  render() {
    const {
      drawerLockMode,
    } = this.state;

    const navigationView = (
      <View style={[styles.container, styles.menuContent]}>
        <Text>Test</Text>
      </View>
    );
    return (
      <DrawerLayout
        onDrawerSlide={(e) => this.setState({ drawerSlideOutput: JSON.stringify(e.nativeEvent) }) }
        onDrawerStateChanged={(e) => this.setState({ drawerStateChangedOutput: JSON.stringify(e) }) }
        drawerWidth={300}
        drawerLockMode={drawerLockMode}
        ref= {(drawer) => { return this.drawer = drawer } }
        keyboardDismissMode="on-drag"
        renderNavigationView={() => navigationView}>
        <Navigator
          initialRoute={{ id: 'Welcome', title: 'Welcome' }}
          renderScene={this.renderScene}
          navigationBar={this.navigationBar() }
          configureScene={(route) => {
            if (route.sceneConfig) {
              return route.sceneConfig;
            }
            return Navigator.SceneConfigs.FloatFromRight;
          } } />
      </DrawerLayout>
    );
  }

  renderScene(route, navigator) {
    nav = navigator;
    let routeId = route.id;
    this.state ={drawerLockMode:'unlocked'};
    switch (routeId) {
      case 'Welcome':
        return (
          <WelcomeView navigator={navigator} />
        );
      case 'Login':
        return (
          <LoginView navigator={navigator} />
        )
    }
  }

  navigationBar() {
    const routeMapper = {
      LeftButton: (route, navigator, index, navState) => {
        // return Navigation Back button based on current route id, 
        if (index === 0) return null;

        return (<NavigationBackButton onPress={() => navigator.pop() }/>);
      },
      RightButton: (route, navigator, index, navState) => {
        return (<MenuButton onPress={() => this.drawer.openDrawer() }/>);
      },
      Title: (route, navigator, index, navState) => {
        // Display app's title or logo based on rendered scene's id.
        let title = "";
        switch (route.id) {
          case 'Welcome':
            title = route.title;
            break;
          case 'Login':
            title = route.title;
            break;
        }

        if (title !== "") {
          return (<Text style={styles.navbarTitle}>{title}</Text>);
        }
      }
    };

    return (
      <Navigator.NavigationBar style={styles.navbar}
        routeMapper={routeMapper}/>
    );
  }
}

AppRegistry.registerComponent('POC', () => POC);
