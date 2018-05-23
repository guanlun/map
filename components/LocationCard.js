import React from 'react';
import { StyleSheet, TouchableOpacity, View, Text, ScrollView, FlatList } from 'react-native';

const styles = StyleSheet.create({
    container: {
        margin: 10,
        padding: 10,
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        flex: 1,
    },
});

export default class LocationCard extends React.Component {
    constructor() {
        super();
        this.state = {
        };
    }

    render() {
        return (
            <TouchableOpacity style={styles.container} onPress={() => this.props.onLocationSelected(this.props.index)}>
                <Text>{this.props.name}</Text>
            </TouchableOpacity>
        );
    }
}