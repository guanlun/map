import React from 'react';
import { StyleSheet, View, Text, ScrollView, FlatList } from 'react-native';

import LocationView from './LocationView';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    scrollView: {
        flex: 1,
        backgroundColor: 'skyblue',
    },
    item: {
        flex: 1,
        fontSize: 20,
        height: 40,
        color: 'white',
    },
});

const LOCATIONS = [
    { key: 'Devin' },
    { key: 'Jackson' },
    { key: 'James' },
    { key: 'Joel' },
    { key: 'John' },
    { key: 'Jillian' },
    { key: 'Jimmy' },
    { key: 'Julie' },
];

for (const loc of LOCATIONS) {
    loc.location = {
        latitude: Math.random() * 3 + 37.78825,
        longitude: Math.random() * 3 - 122.4324,
    };
}

export default class Overview extends React.Component {
    constructor() {
        super();
        this.state = {
            selectedItem: '',
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <ScrollView style={styles.scrollView}>
                    <Text>This is the overview {this.props.additionalText}</Text>
                    <FlatList
                        data={LOCATIONS}
                        renderItem={this.renderLocationListItem.bind(this)}
                    />
                    <Text>Selected Item: {this.state.selectedItem}</Text>
                </ScrollView>
            </View>
        )
    }

    renderLocationListItem({item, index}) {
        return <Text style={styles.item} onPress={() => this.handleListItemTouch(index)}>{item.key}</Text>
    }

    handleListItemTouch(itemIndex) {
        this.props.navigator.push({
            component: LocationView,
            title: 'Location ' + LOCATIONS[itemIndex].key,
            passProps: {
                locations: LOCATIONS,
                itemIndex,
            },
        });
    }
}