import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Home from '../screens/Home';
import About from '../screens/About';
import ReviewDetails from '../screens/ReviewDetails';
import Modal from '../Modals/Modal';

const MainStack = createStackNavigator(
    {
        Home:           { screen: Home },
        About:          { screen: About },
        ReviewDetails:  { screen: ReviewDetails },
    },
    {
        initialRouteName: 'Home',
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#659dbd'
            },
            headerTintColor: '#fff',
        }
    }
);

const RootStack = createStackNavigator(
    {
        Main: {
            screen: MainStack,
        },
        Modal: {
            screen: Modal,
        },
    },
    {
        mode: 'modal',
        headerMode: 'none',
    },
)

export default createAppContainer(RootStack);