import React from 'react';
import { StyleSheet, View, Text, ScrollView, FlatList } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import LocationCard  from './LocationCard';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    map: {
        position: 'absolute',
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
    },
    locationSelector: {
        flex: 1,
        position: 'absolute',
        left: 0,
        bottom: 80,
        flexDirection: 'row',
    },
});

const LOCAITON_DELTA = {
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
};

export default class LocationView extends React.Component {
    constructor() {
        super();
        this.state = {
            selectedLocation: null,
        };
    }

    componentWillMount() {
        const {
            locations, itemIndex,
        } = this.props;

        this.setState({
            selectedLocation: locations[itemIndex],
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <MapView
                    style={styles.map}
                    provider={PROVIDER_GOOGLE}
                    region={{
                        ...this.state.selectedLocation.location,
                        ...LOCAITON_DELTA,
                    }}
                />
                <View style={styles.locationSelector}>
                    {this.props.locations.map((location, idx) => (
                        <LocationCard
                            key={`location_${idx}`}
                            index={idx}
                            name={location.key}
                            onLocationSelected={index => this.handleLocationSelect(index)}
                        />
                    ))}
                </View>
            </View>
        );
    }

    handleLocationSelect(index) {
        console.log(index)
        this.setState({
            selectedLocation: this.props.locations[index],
        });
    }
}