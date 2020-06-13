import {createDrawerNavigator} from 'react-navigation-drawer';
import React, {Component} from 'react';
//import PlayerScreen from 'react-native-sound-playerview';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  SafeAreaView,
  ScrollView,
  ActivityIndicator,
  StatusBar,
  AsyncStorage,
  Alert
} from 'react-native';
import {createStackNavigator} from 'react-navigation-stack';
import Home from '_scenes/home';
import About from '_scenes/about';
import Validate from '_scenes/validate';
import Login from '_scenes/login';
import Ethhar from '_scenes/Ethhar';
import Edgham from '_scenes/Edgham';
import Eqlab from '_scenes/Eqlab';
import Ekhfaa from '_scenes/Ekhfaa';
import EkhfaaShafawy from '_scenes/EkhfaaShafawy';
import EthharShafawy from '_scenes/EthharShafawy';
import EdghamShafawy from '_scenes/EdghamShafawy';
import Almad from '_scenes/Almad';
import Random from '_scenes/random';


import { createAppContainer, createSwitchNavigator, createNavigationContainer } from 'react-navigation';

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
  
  initialRouteName: 'الرئيسية',
  header: null,
  headerMode: 'none',
  drawerBackgroundColor:'#faeed7',
  contentOptions: {
    activeTintColor: 'primary',
    activeBackgroundColor: 'transparent',
    inactiveTintColor: 'black',
    inactiveBackgroundColor: 'transparent',
    
    labelStyle: {
      fontFamily: 'a-jannat-lt',
      fontSize: 15,
      marginLeft: 10,
      color: '#234c49',
      fontWeight: 'normal',
       
            

      
    },
  },
};

const HomeStack = createStackNavigator({
 
  Random: {
    screen: Random,
    headerMode: 'none',
    header: null,
  },

  Home: {
    screen: Home,
    navigationOptions: ({navigation}) => ({
      title: '',
      headerLeft: <NavigationDrawerStructure navigation={navigation} />,
      headerStyle: {
        backgroundColor: '#faeed7',
      },
      headerTintColor: '#faeed7',
    }),
  },
  Ethhar: { 
    screen: Ethhar,
    headerMode: 'none',
    header: null,
    navigationOptions: ({navigation}) => ({
      title: '',
      headerStyle: {
        backgroundColor: '#faeed7',
      },
      headerTintColor: 'black',
    })
  },
  Edgham: {
    screen: Edgham,
    headerMode: 'none',
    header: null,
    navigationOptions: ({navigation}) => ({
      title: '',
      headerStyle: {
        backgroundColor: '#faeed7',
      },
      headerTintColor: 'black',
    })
  },
  Eqlab: {
    screen: Eqlab,
    headerMode: 'none',
    header: null,
    navigationOptions: ({navigation}) => ({
      title: '',
      headerStyle: {
        backgroundColor: '#faeed7',
      },
      headerTintColor: 'black',
    })
  },
  Ekhfaa: {
    screen: Ekhfaa,
    headerMode: 'none',
    header: null,
  navigationOptions: ({navigation}) => ({
      title: '',
      headerStyle: {
        backgroundColor: '#faeed7',
      },
      headerTintColor: 'black',
    })
    
  },
  EkhfaaShafawy: {
    screen: EkhfaaShafawy,
    headerMode: 'none',
    header: null,
    navigationOptions: ({navigation}) => ({
      title: '',
      headerStyle: {
        backgroundColor: '#faeed7',
      },
      headerTintColor: 'black',
    })
  },
  EthharShafawy: {
    screen: EthharShafawy,
    headerMode: 'none',
    header: null,
    navigationOptions: ({navigation}) => ({
      title: '',
      headerStyle: {
        backgroundColor: '#faeed7',
      },
      headerTintColor: 'black',
    })
  },
  EdghamShafawy: {
    screen: EdghamShafawy,
    headerMode: 'none',
    header: null,
    navigationOptions: ({navigation}) => ({
      title: '',
      headerStyle: {
        backgroundColor: '#faeed7',
      },
      headerTintColor: 'black',
    })
  },
  Almad: {
    screen: Almad,
    headerMode: 'none',
    header: null,
    navigationOptions: ({navigation}) => ({
      title: '',
      headerStyle: {
        backgroundColor: '#faeed7',
      },
      headerTintColor: 'black',
    })
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


const RandomStack = createStackNavigator({
  Random: {
    screen: Random,
    navigationOptions: { header:null,headerVisible: false}

  },
});

var isLoggedIn;
loadData =async()=>{
   isLoggedIn = await AsyncStorage.getItem('isLoggedIn')
  if (isLoggedIn == '1'){
     btngan='1';
  }else btngan='null';
}


loadData();

const LoginStack = createStackNavigator(
  
  {
  
  Login: {
    screen: isLoggedIn  == '1' ? Validate : Login,
    headerMode: 'none',
    navigationOptions: { header:null,headerVisible: false}
     
    
  },
  Audio: {
    screen: Validate,
    navigationOptions: { header:null,headerVisible: false}

  },
});







const AppNavigator = createDrawerNavigator(
  {الرئيسية: HomeStack,  "من نحن": AboutStack, للشيخ: LoginStack, عشوائي:RandomStack},
 
  DrawerNavigatorConfig,


);

export default AppNavigator;

