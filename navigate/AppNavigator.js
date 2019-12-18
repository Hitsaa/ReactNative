import {createStackNavigator} from 'react-navigation';
import Home from './home';
import Friends from './friends';

const AppNavigator = createStackNavigator({
    Home: {screen: Home},
    Friends: {screen: Friends},
});

export default AppNavigator;