import {createStackNavigator} from 'react-navigation-stack';

import LoginScreen from '_scenes/login';
import Welcome from '_scenes/welcome';

const AuthNavigatorConfig = {
  initialRouteName: 'Welcome',
  header: null,
  headerMode: 'none',
};

const RouteConfigs = {
  Welcome:Welcome,
  // Login:LoginScreen,
};

const AuthNavigator = createStackNavigator(RouteConfigs, AuthNavigatorConfig);

export default AuthNavigator;