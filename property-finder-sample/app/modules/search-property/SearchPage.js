"use strict";

import React, {
    StyleSheet,
    Text,
    TextInput,
    View,
    TouchableHighlight,
    ActivityIndicatorIOS,
    Image,
    Component
} from 'react-native';

import BusyIndicator from '../../components/busy-indicator/BusyIndicator';
import SearchResults from '../property-list/SearchResults';

/** Styles for SearchPage component */
import styles from './SearchPage.Styles';

/**
 * Helper method used for invoking REST API
 */
let urlForQueryAndPage = (key, value, pageNumber) => {
    const apiUrl = 'http://api.nestoria.co.uk/api?';
    let data = {
        country: 'uk',
        pretty: '1',
        encoding: 'json',
        listing_type: 'buy',
        action: 'search_listings',
        page: pageNumber
    };
    data[key] = value;
    
    const queryString = 
        Object.keys(data)
                .map(key=> key+'='+encodeURIComponent(data[key]))
                .join('&');
        
    return apiUrl + queryString;
}

/**
 * The page that is displayed as the app's home view is a Search page
 */
class SearchPage extends Component {
    /** Define this component's Id & Name */
    static get Id() { return "SearchPage"; }    
    static get Name() { return "Property Finder"; }
    
    /** Overriden constructor. A constructor takes props argument. 
     * We override this because we want to define states for this component 
     */
    constructor(props) {
        super(props);
        // Define several states for this component 
        this.state = {
            searchString: 'london',
            isLoading: false,
            message: ''
        };
    }
    
    /**
     * Helper for invoking API URL
     */
    _executeQuery(query){
        console.log('[DEBUG] - query = '+query);
        this.setState({isLoading: true});
        // Invoking API's url using HTML 5 Fetch which return promise. IN this case, we see an example of chained promises.
        fetch(query)
            .then(response => response.json())
            .then(json => this._handleResponse(json.response))
            .catch(error => this.setState({
                isLoading: false,
                message: `Something bad happened ${error.message}`
            }));
    }
    
    /**
     * Helper for handling the returned json response from calling API 
     */
    _handleResponse(response){
        this.setState({
            isLoading: false,
            message:''
        });
        if (response.application_response_code.substr(0,1) === '1'){
            console.log('[DEBUG] Properties found: '+response.listings.length);
            /** Navigate to a view which display SearchResults component. It also push the results list into the view. */
            this.props.navigator.push({
                title: SearchResults.Name,
                id: SearchResults.Id,
                component: SearchResults,
                passProps: {listings: response.listings}
            });
        }
        else{
            this.setState({message: 'Location not recognised; please try again.'});
        }
    }
    
    onSearchTextChanged(event){
        console.log('[DEBUG] - onSearchTextChanged event is triggered.');
        this.setState({searchString: event.nativeEvent.text});
        console.log('[DEBUG] - this.state.searchString = '+this.state.searchString);
    }
    
    onSearchPressed(){
        var query = urlForQueryAndPage('place_name', this.state.searchString, 1);
        this._executeQuery(query);
    }
    
    onLocationPressed(){
        // navigator here is a global object, different stuff than this.props.navigator
        navigator.geolocation.getCurrentPosition(
            // JS ES 6's Arrow function are used as callback methods 
            location =>{
                // JS ES6 String interpolation show off ! 
                var searchCoordinate = `${location.coords.latitude}, ${location.coords.longitude}`;
                this.setState({
                    searchString: searchCoordinate
                });
                var query = urlForQueryAndPage('centre_point', this.state.searchString, 1);
                this._executeQuery(query);
            },
            error =>{
                this.setState({
                    message: `There was a problem with obtaining your location: ${error.message}`
                });
            }
        );
    }
                
    render(){
        console.log('[DEBUG] - SearchPage.render is called.');
        // Create progress spinner , implemented by BusyIndicator component, if isLoading is set as true.        
        var spinner = this.state.isLoading ? BusyIndicator : (<View/>);
        return (
            <View style={styles.container}>
                <Text style={styles.description}>Search for houses to buy!</Text>
                <Text style={styles.description}>Search by place-name, postcode or search near your location.</Text>
                <View style={styles.flowRight}>
                    <TextInput style={styles.searchInput} 
                               value={this.state.searchString}
                               onChange={this.onSearchTextChanged.bind(this)}
                               placeholder="Search via name or postcode"/>
                    <TouchableHighlight style={styles.button} 
                                        underlayColor='#99d9f4'
                                        onPress={this.onSearchPressed.bind(this)}>
                        <Text style={styles.buttonText}>Go</Text>
                    </TouchableHighlight>
                </View>
                <TouchableHighlight onPress={this.onLocationPressed.bind(this)} style={styles.button} underlayColor='#99d9f4'>
                    <Text style={styles.buttonText}>Location</Text>
                </TouchableHighlight> 
                <Image source={require('../../../Resources/house.png')} stye={styles.image}/>
                {spinner} 
                <Text style={styles.description}>{this.state.message}</Text>
            </View>     
        );
    }
}

export default SearchPage;