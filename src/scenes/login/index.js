import React, {Component} from 'react';
import {TextInput, View, Button, ImageBackground, AsyncStorage, Alert} from 'react-native';
import axios from 'axios';
import { string } from 'prop-types';

const userInfo={userName: "admin", password:"admin"}



class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {password: '', password: '', token: ''};

 
  }

  
  render() {

    
     
     
    
    onCheck=async()=>{
      if(userInfo.userName === this.state.userName && userInfo.password=== this.state.password){
        alert('logged in')
        const value=  await AsyncStorage.setItem('isLoggedIn', '1');     
        this.props.navigation.navigate('Audio');

      }else {

        Alert.alert('something went off')
      }
    }
    onConfirm=async() => {
     
      axios
      .post("https://otrojjah-api.herokuapp.com/api/auth", {
      email: this.state.email ,
      password: this.state.password
      })

      
   
     .then(async (response) =>{ 
     
       console.log(response.data)
       const jwt = await AsyncStorage.setItem('token',response.data)
       const value=  await AsyncStorage.setItem('isLoggedIn', '1')
       const value2 = await AsyncStorage.getItem('isLoggedIn')
       Alert.alert(value2)
    }).then( this.props.navigation.navigate('Audio'))
 
    .catch(function(error) {

      if (error.response.data == 'Invalid email or password.'){
     Alert.alert('الإيميل او كلمة السر خطأ')
     
    }else{
      Alert.alert(error.response.data)
    }
    });
     };

    return (
      <ImageBackground
        source={require('_assets/images/islamic.jpg')}
        style={{
          width: '100%',
          height: '100%',
        }}>
        <View
          style={{
            //flex: 1,
            justifyContent: 'center',
          }}>
          <TextInput
            style={{
              marginTop: 20,
              height: 40,
              borderColor: 'gray',
              borderWidth: 1,
              backgroundColor: '#FFFFFF',
              marginBottom: 20,
              borderRadius: 50,
            }}
            on
            placeholder="البريد الالكتروني"
            onChangeText={email => this.setState({email})}
            value={this.state.email}
            autoCapitalize="none"
          />

          <TextInput
            onChangeText={password => this.setState({password})}
            style={{
              
              height: 40,
              borderColor: 'gray',
              borderWidth: 1,
              backgroundColor: '#FFFFFF',
              marginBottom: 20,
              borderRadius: 50,
            }}
            
            placeholder="كلمة المرور"
            secureTextEntry={true}
            value={this.state.password}
            direction ='rtl'
          />
          <View
            style={{
              marginBottom: 20,
              marginTop: 10,
              marginLeft: 10,
              marginRight: 10,
            }}>
            <Button onPress={onConfirm} title="سجّل" color="#1ABC9C" />
          </View>
        </View>
      </ImageBackground>
    );
  }
}

export default LoginScreen;
