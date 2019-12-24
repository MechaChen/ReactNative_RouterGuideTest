import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

export default function Modal(props) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>this is a MODAL~~~</Text>
            <Button
                onPress={() => props.navigation.goBack()}
                title="Dimiss"
                color="#d1e8e2"
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#116466',
    },
    text: {
        fontSize: 40,
        fontFamily: 'josefinSans-Bold',
        color: '#ffcb9a',
        marginBottom: 30,
    },
});
