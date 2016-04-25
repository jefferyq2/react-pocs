"use strict";

// ES 6's syntax for importing modules, it looks similar to swift's or Java's import statement.  
import React, {
  AppRegistry,
  BackAndroid,
  Component,
  Navigator,
  StyleSheet,
  Text
} from 'react-native';

import SearchPage from './app/modules/search-property/SearchPage';
import SearchResults from './app/modules/property-list/SearchResults';
import PropertyView from './app/modules/property-detail/PropertyView';
import NavigationBackButton from './app/components/navigation-buttons/NavigationBackButton'; 

/** Styles for Navigator */
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  navbar: {
    backgroundColor: '#48BBEC',
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2'
  },
  navbarTitle: {
    color: 'white',
    fontSize: 16,
    marginTop: 15
  }
});

/**
 * Entry point class ( or an app class), inherited from Component class.
 */
class PropertyFinderApp extends Component {  
  /**
   * Define app's navigation bar that persists across scene transitions.
   * Define components & styles that are going to be applied inside the navigation bar's left button, right button & title sections.
   */
  navigationBar(){
    const routeMapper = {
      LeftButton: (route, navigator, index, navState) => {
        // return Navigation Back button based on current route id, 
        if (index === 0) return null;        
        
        return ( <NavigationBackButton onPress={()=>navigator.pop()}/> );
      },
      RightButton: (route, navigator, index, navState)=>{
        // TODO: Implement this. Usually we put icon button(s) here (e.g. Shopping cart, config, profile, etc.)
      },
      Title: (route, navigator, index, navState)=>{
        // Display app's title or logo based on rendered scene's id.
        let title = "";
        switch(route.id){
          case SearchPage.Id:
            title = SearchPage.Name;
            break;
          case SearchResults.Id:
            title = SearchResults.Name;
            break;
          case PropertyView.Id:
            title = PropertyView.Name;
            break;
        }
        
        if (title !== ""){
          return (<Text style={styles.navbarTitle}>{title}</Text>);
        }
      }
    };
    
    return (
      <Navigator.NavigationBar style={styles.navbar} 
                               routeMapper={routeMapper}/>
    );
  }
  
  /**
   * Responsible for rendering scene components specified by route's id
   * IN angularJS 1, it seems similar to state routing.
   */
  renderScene(route, navigator) {
    currentNavigator = navigator;
    const routeId = route.id;
    let scene;
    switch(routeId){
      case SearchPage.Id:
        scene = ( <SearchPage navigator={navigator}/>); 
        break; 
      case SearchResults.Id:
        scene = ( <SearchResults navigator={navigator} listings={route.passProps.listings}/>); 
        break; 
      case PropertyView.Id:
        scene = (<PropertyView navigator={navigator} property={route.passProps.property} />);
    }          
    return scene;
  }
  
  /**
   * Determine animation or gesture properties on scenes specified by their route ids
   */
  configureScene(route){
    if (route.sceneConfig){
      return route.sceneConfig;
    }
    return Navigator.SceneConfigs.FloatFromRight;
  }
    
  render(){
    return(
      // Define, navigation routes
      <Navigator style={styles.container}                     
                 initialRoute={{name: 'Property Finder', id:'SearchPage'}}
                 renderScene={this.renderScene.bind(this)}
                 navigationBar={this.navigationBar()}
                 configureScene={this.configureScene.bind(this)}                         
      />
    );
  }  
}

/** 
 * Keep tracking current scene's navigator object, to be used for handling Back button's pressed event.
 */
let currentNavigator;
BackAndroid.addEventListener('hardwareBackPress', ()=>{
  const navigator = currentNavigator;
  if (navigator && navigator.getCurrentRoutes().length > 1){
    navigator.pop();
    return true;
  }
  return false;
});

AppRegistry.registerComponent('PropertyFinder', ()=>PropertyFinderApp);