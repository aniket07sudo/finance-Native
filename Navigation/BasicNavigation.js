import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer} from 'react-navigation';
import DashboardScreen from '../Screens/Dashboard';
import SignupScreen from '../Screens/Signup';
import WelcomeScreen from '../Screens/Welcome';

const BasicNavigation = createStackNavigator({
    Welcome: {
        screen: WelcomeScreen,
        navigationOptions: {
            headerShown:false
        }
    },
    Signup: {
        screen: SignupScreen,
        navigationOptions: {
            headerShown:false
        }
    },
    Dashboard: {
        screen: DashboardScreen,
        navigationOptions: {
            headerShown:false
        }
    }
})

export default createAppContainer(BasicNavigation)