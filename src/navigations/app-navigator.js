import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createDrawerNavigator} from 'react-navigation-drawer';
import React, {Component} from 'react';

import Home from '_scenes/home';
import About from '_scenes/about';
import Hokm from '_scenes/Hokm';
import Methal from '_scenes/Methal';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import {createStackNavigator} from 'react-navigation-stack';
import Login from '_scenes/login';

class NavigationDrawerStructure extends Component {
  constructor(props) {
    super(props);
    //this.toggleDrawer=this.toggleDrawer.bind(this);
  }
  //Structure for the navigatin Drawer
  toggleDrawer = () => {
    //Props to open/close the drawer
    this.props.navigation.dispatch(DrawerActions.toggleDrawer());
  };
  render() {
    return (
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.toggleDrawer();
          }}>
          <Image
            source={require('../assets/images/i2.jpg')}
            style={{width: 45, height: 45, resizeMode: 'contain'}}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

const DrawerNavigatorConfig = {
  initialRouteName: 'Home',
  header: null,
  headerMode: 'none',
};

const HomeStack = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: ({navigation}) => ({
      title: '',
      headerLeft: <NavigationDrawerStructure navigation={navigation} />,
      headerStyle: {
        backgroundColor: '#ffffff',
      },
      headerTintColor: '#ffffff',
    }),
  },
});

const AboutStack = createStackNavigator({
  About: {
    screen: About,
    navigationOptions: ({navigation}) => ({
      title: '',
      headerLeft: <NavigationDrawerStructure navigation={navigation} />,
      headerStyle: {
        backgroundColor: 'none',
      },
      headerTintColor: '#ffffff',
    }),
  },
});

const LoginStack = createStackNavigator({
  Login: {
    screen: Login,
    navigationOptions: ({navigation}) => ({
      title: '',
      headerLeft: <NavigationDrawerStructure navigation={navigation} />,
      headerStyle: {
        backgroundColor: 'none',
      },
      headerTintColor: '#ffffff',
    }),
  },
});
const HokmStack = createStackNavigator({
  Hokm: {
    screen: Hokm,
    navigationOptions: ({navigation}) => ({
      title: '',
      headerLeft: <NavigationDrawerStructure navigation={navigation} />,
      headerStyle: {
        backgroundColor: 'none',
      },
      headerTintColor: '#ffffff',
    }),
  },
});
const MethalStack = createStackNavigator({
  Methal: {
    screen: Methal,
    navigationOptions: ({navigation}) => ({
      title: '',
      headerLeft: <NavigationDrawerStructure navigation={navigation} />,
      headerStyle: {
        backgroundColor: 'none',
      },
      headerTintColor: '#ffffff',
    }),
  },
});
const AppNavigator = createDrawerNavigator(
  {Home: HomeStack, About: AboutStack, Login: LoginStack, Hokm:HokmStack, Methal:MethalStack},
  DrawerNavigatorConfig,
);

export default AppNavigator;
