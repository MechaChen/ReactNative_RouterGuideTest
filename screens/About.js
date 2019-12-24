import React from 'react';
import { Text, View, Button } from 'react-native';
import { globalStyles } from '../styles/global';

export default function About(props) {
    return (
        <View>
            <Text style={globalStyles.titleText}>About page</Text>
            <View style={globalStyles.buttonContainer}>
                <Button
                    title="go to About... again"
                    onPress={() => props.navigation.push('About', {
                        itemId: Math.floor(Math.random() * 100)
                    })}
                    color="#e3afbc"
                />
                <Button
                    title="go back"
                    onPress={() => props.navigation.goBack()}
                    color="#9a1750"
                />
                <Button
                    title="go back Home"
                    onPress={() => props.navigation.navigate('Home')}
                    color="#ee4c7c"
                />
                <Button
                    title="go back to top"
                    onPress={() => props.navigation.popToTop()}
                    color="#5d001e"
                />
            </View>
            <Text style={globalStyles.itemIdText}>{props.navigation.getParam('itemId', 'NO-ID')}</Text>
            <Text style={globalStyles.otherText}>{props.navigation.getParam('otherParam', 'Default Value')}</Text>
        </View>
    );
}

About.navigationOptions = {
    title: 'About',
}
