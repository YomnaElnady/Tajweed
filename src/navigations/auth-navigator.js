import {createStackNavigator} from 'react-navigation-stack';

import LoginScreen from '_scenes/login';
import Welcome from '_scenes/welcome';
import {

  AsyncStorage
} from 'react-native';

const AuthNavigatorConfig = {
  initialRouteName: 'Welcome',
  header: null,
  headerMode: 'none',
};

const RouteConfigs = {
  Welcome: Welcome,
  // Login:LoginScreen,
};
 
const AuthNavigator = createStackNavigator(RouteConfigs, AuthNavigatorConfig);

export default AuthNavigator;
