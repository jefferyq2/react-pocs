"use strict";

// ES 6's syntax for importing modules, it looks similar to swift's or Java's import statement.  
import React, {
  AppRegistry,
  Component,
  NavigatorIOS,
  StyleSheet
} from 'react-native';

import SearchPage from './app/modules/search-property/SearchPage';

/** Styles for NavigatorIOS */
const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

/**
 * Entry point class ( or an app class), inherited from Component class.
 */
class PropertyFinderApp extends Component {
  render(){
    return(
      // Define, navigation routes
      // NavigatorIOS Seems similar with Ionic's ion-nav-view mixed with State routing
      <NavigatorIOS style={styles.container} 
                    initialRoute={{title: 'Property Finder', component: SearchPage}}/>
    );
  }  
}

AppRegistry.registerComponent('PropertyFinder', ()=>PropertyFinderApp);