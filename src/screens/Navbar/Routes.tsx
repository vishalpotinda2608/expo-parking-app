import { createStackNavigator } from '@react-navigation/stack';
import NavigationString from '../../Constasts/NavigationString';
import LoginScreen from '../Login/LoginScreen';
import RegisterScreen from '../Register/RegisterScreen';
import Navbar from './Navbar';

const Stack = createStackNavigator();

const Routes = () => {
  return (
    <Stack.Navigator initialRouteName={NavigationString.LOGIN}>
    <Stack.Screen name={NavigationString.LOGIN} component={LoginScreen} options={{headerShown:false}} />
    <Stack.Screen name={NavigationString.REGISTER} component={RegisterScreen}  />
    <Stack.Screen name={NavigationString.DASHBOARD} component={Navbar} options={{headerShown:false}} />
  </Stack.Navigator>
  )
}

export default Routes

