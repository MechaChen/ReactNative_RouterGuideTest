import React, { useState } from 'react';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import HomeStack from './routes/HomeStack';

const getFonts = () => Font.loadAsync({
    'josefinSans': require('./assets/fonts/JosefinSans-Regular.ttf'),
    'josefinSans-Bold': require('./assets/fonts/JosefinSans-Bold.ttf'),
    'kanit': require('./assets/fonts/Kanit-Regular.ttf'),
    'kanit-Bold': require('./assets/fonts/Kanit-Bold.ttf'),
});

export default function App() {
    const [fontsLoaded, setFontsLoaded] = useState(false);

    return fontsLoaded ?
        <HomeStack />
        :
        <AppLoading
            startAsync={getFonts}
            onFinish={() => setFontsLoaded(true)}
            onError={console.warn}
        />
    ;
}
