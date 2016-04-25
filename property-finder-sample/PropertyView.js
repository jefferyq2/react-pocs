import React, {
    Component,
    Image,
    Text,
    View
} from 'react-native';

import Styles from './PropertyViewStyles';

class PropertyView extends Component {
    /** Define this component's Id & Name */
    static get Id() { return "PropertyView"; }    
    static get Name() { return "Property Details"; }
    
    constructor(props) {
        super(props);

        this.image = "";
        this.price = 0;
        this.title = "";
        this.summary = "";
        this.stats = "";

        var property = this.props.property;

        if (property) {
            this.image = property.img_url;
            this.price = property.price_formatted.split(' ')[0];
            this.title = property.title;
            this.summary = property.summary;
            // Sample of ES 6's Raw string & String interpolation
            let stats = `${property.bedroom_number} bed ${property.property_type}`;
            if (property.bathroom_number) {
                // Concatenated ES 6's Raw strings with few more String Interpolations
                stats += `, ${property.bathroom_number} ${property.bathroom_number > 1 ? 'bathrooms' : 'bathroom'}`;
            }
            this.stats = stats;
        }
    }

    render() {
        return (
            <View style={Styles.container}>
                <Image style={Styles.image} source={ { uri: this.image } } />
                <View style={Styles.heading}>
                    <Text style={Styles.price}>{this.price}</Text>
                    <Text style={Styles.title}>{this.title}</Text>
                    <View style={Styles.separator}/>
                </View>
                <Text style={Styles.stats}>{this.stats}</Text>
                <Text style={Styles.stats}>{this.summary}</Text>
            </View>
        );
    }
}

export default PropertyView;