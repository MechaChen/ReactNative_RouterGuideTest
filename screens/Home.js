import React from 'react';
import { Text, View, Button } from 'react-native';
import { globalStyles } from '../styles/global';

export default function Home(props) {
    return (
        <View>
            <Text style={globalStyles.titleText}>Home page</Text>
            <View style={globalStyles.buttonContainer}>
                <Button
                    title="go to About"
                    onPress={() => props.navigation.navigate('About', {
                        itemId: 47,
                        otherParam: 'Other Param is still here.'
                    })}
                    color="#659dbd"
                />
                <Button
                    title="go to Review Details"
                    onPress={() => props.navigation.navigate('ReviewDetails', {
                        reviewParam: 'Review Details'
                    })}
                    color="#e98074"
                />
            </View>
        </View>
    );
}

Home.navigationOptions = {
    title: 'Home',
}