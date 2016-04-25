"use strict";

import React, {
    Component,
    Image,
    ListView,
    StyleSheet,
    Text,
    TouchableHighlight,
    View
} from 'react-native';

import Styles from './SearchResults.Styles';
import PropertyView from '../property-detail/PropertyView';

/** Responsible for rendering ListView which display search's results */
class SearchResults extends Component {
    /** Define this component's Id & Name */
    static get Id() { return "SearchResults"; }    
    static get Name() { return "Results"; }
    
    constructor(props){
        super(props);
        let dataSource = new ListView.DataSource({
            /** tells list view to re-render when there are changes on the source data.
             * In this case, it works by comparing the identity of a pair of rows.
             */
            rowHasChanged: (r1, r2) => r1.guid !== r2.guid
        });
        if (this.props.listings){
            this.state = {
                dataSource: dataSource.cloneWithRows(this.props.listings)
            };
        }
    }
    
    onRowTouched(touchedRow){
        // navigate to PropertyView and pass in the touchedRow
        this.props.navigator.push({
            title: PropertyView.Name,
            component: PropertyView,
            id: PropertyView.Id,
            passProps: {property: touchedRow}
        });
    }
    
    /** Supplies UI for each row */
    onRenderRow(rowData, sectionID, rowID){
        console.log('[DEBUG] - SearchResults onRenderRow is invoked. sectionID=%s, rowID = %s, img_url=%s',
            sectionID, rowID, rowData.img_url
        );
        // Always comment any console.dir lines before running RN app on iPhone :D
        //console.dir(rowData);
        const price = rowData.price_formatted.split(' ')[0];
        return (
            <TouchableHighlight underlayColor='#dddddd'
                                onPress={()=>this.onRowTouched(rowData)}>
                <View style={Styles.rowContainer}>
                    <Image style={Styles.image} source={{uri: rowData.img_url}}/>
                    <View style={Styles.textContainer}>
                        <Text style={Styles.price}>{price}</Text>
                        <Text style={Styles.title}
                              numberOfLines={2}>{rowData.title}</Text>
                    </View>
                </View>
            </TouchableHighlight>
        );
    }
    
    render(){
        console.log('[DEBUG] - SearchResults.render is called.');
        return(
            <ListView  dataSource={this.state.dataSource} 
                       renderRow={this.onRenderRow.bind(this)}
                       style={Styles.list}/>
        );
    }
}

export default SearchResults;