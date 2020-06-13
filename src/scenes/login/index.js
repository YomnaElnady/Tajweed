import React, {Component} from 'react';
import {TextInput, View, TouchableOpacity, ImageBackground, AsyncStorage, Alert, Text} from 'react-native';
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
      // const value=  await AsyncStorage.setItem('isLoggedIn', '1')
       const value2 = await AsyncStorage.getItem('isLoggedIn')
    }).then(async()=>{
        this.setState({
          email:'',
          password:''
        })
        jwt = await AsyncStorage.getItem('token')
      if (jwt!=''){
       //isLoggedIn='1' 
       this.props.navigation.navigate('Audio')
      }
      })
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
        source={require('_assets/images/login.jpg')}
        style={{
          width: '100%',
          height: '100%',
        }}>
        <View style={{flex:1}}>
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
          }}>
         <Text style={{color:'#011325', textAlign:'center',fontFamily:'a-jannat-lt' ,backgroundColor:'#faeed7',borderRadius: 50, width:100, alignSelf:'center'}}>اسم المستخدم</Text>
    
          <TextInput
            style={{
              height: 40,
              borderColor: 'gray',
              borderWidth: 1,
              backgroundColor: '#FFFFFF',
              marginBottom:10,
              borderRadius: 50,
               width:250,
              alignSelf:'center'
            }}
            on
            placeholder=" "
            onChangeText={email => this.setState({email})}
            value={this.state.email}
            autoCapitalize="none"
          />
          <Text
           style={{color:'#011325',
            textAlign:'center',
            backgroundColor:'#faeed7',
            borderRadius: 50,
             width:100, 
             alignSelf:'center',
             fontFamily:'a-jannat-lt' 
             }}>
             كلمةالمرور</Text>

          <TextInput
            onChangeText={password => this.setState({password})}
            style={{
              
              height: 40,
              borderColor: 'gray',
              borderWidth: 1,
              backgroundColor: '#FFFFFF',
              marginBottom: 10,
              borderRadius: 50,
              width:250,
              alignSelf:'center'
            }}
            
            placeholder=""
            secureTextEntry={true}
            value={this.state.password}
            direction ='rtl'
          />
          <View
            style={{
              marginBottom: 20,
              marginLeft: 10,
              marginRight: 10,
            }}>
            <TouchableOpacity onPress={onConfirm}>
            <Text style={{color:'white', textAlign:'center',fontFamily:'a-jannat-lt' , backgroundColor:'#c28f48',borderRadius: 50, width:100, alignSelf:'center'}}>تسجيل الدخول</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    );
  }
}

export default LoginScreen;
