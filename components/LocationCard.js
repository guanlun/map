import React from 'react';
import { StyleSheet, TouchableOpacity, View, Text, ScrollView, FlatList } from 'react-native';

const styles = StyleSheet.create({
    container: {
        margin: 10,
        padding: 10,
        height: 120,
        width: 200,
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
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
            <TouchableOpacity style={styles.container}>
                <Text>{this.props.name}</Text>
            </TouchableOpacity>
        );
    }
}