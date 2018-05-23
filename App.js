import React from 'react';
import { StyleSheet, NavigatorIOS } from 'react-native';

import Overview from './components/Overview';

export default class App extends React.Component {
    render() {
        return (
            // <View style={styles.container}>
            //     <Overview additionalText="haha" />
            // </View>
            <NavigatorIOS
                initialRoute={{
                    component: Overview,
                    title: 'Locations',
                    passProps: {
                        additionalText: 'locations!',
                    }
                }}
                style={{
                    flex: 1,
                }}
            />
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
