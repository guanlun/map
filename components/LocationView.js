import React from 'react';
import { StyleSheet, View, Text, Dimensions } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker, Callout } from 'react-native-maps';
import Carousel from 'react-native-snap-carousel';
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
        position: 'absolute',
        left: 0,
        bottom: 80,
        height: 80,
        flexDirection: 'row',
    },
    carousel: {
        height: 80,
    }
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
                >
                    <Marker
                        coordinate={this.state.selectedLocation.location}
                        title={this.state.selectedLocation.key}
                        description={this.state.selectedLocation.key}
                    >
                        <Callout>
                            <Text>This is the text</Text>
                        </Callout>
                    </Marker>
                </MapView>

                <View style={styles.locationSelector}>
                    <Carousel
                        layout={'default'}
                        ref={(c) => { this._carousel = c; }}
                        data={this.props.locations}
                        renderItem={this.renderLocationCard}
                        firstItem={this.props.itemIndex}
                        sliderWidth={Dimensions.get('window').width}
                        itemWidth={200}
                        onSnapToItem={index => this.handleLocationSelect(index)}
                    />
                </View>
            </View>
        );
    }

    renderLocationCard({ item, index }) {
        return (
            <LocationCard index={index} name={item.key} />
        );
    }

    handleLocationSelect(index) {
        this.setState({
            selectedLocation: this.props.locations[index],
        });
    }
}