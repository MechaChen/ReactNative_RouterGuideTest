import React from 'react';
import { Text, View, Button, Image } from 'react-native';
import { globalStyles } from '../styles/global';

export default function ReviewDetails(props) {
    return (
        <View>
            <Text style={globalStyles.titleText}>Review Details page</Text>
            <View style={globalStyles.buttonContainer}>
                <Button
                    title="update the title"
                    onPress={() => props.navigation.setParams({ reviewParam: 'Review Details V2' })}
                    color="#d83f87"
                />
            </View>
        </View>
    );
}

const ReviewLogoTitle = () => {
    return (
        <View>
            <Image
                source={require('../assets/react-logo.png')}
                style={{ width: 30, height: 30 }}
            />
        </View>
    );
}

ReviewDetails.navigationOptions = (props) => ({
    title: props.navigation.getParam('reviewParam'),
    headerStyle: {
        backgroundColor: '#e98074'
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
        fontWeight: 'bold',
    },
    headerTitle: () => <ReviewLogoTitle />,
    headerRight: () => (
        <Button
            title="Info"
            color="#fbeec1"
            onPress={() => props.navigation.navigate('Modal')}    
        />
    )
})

