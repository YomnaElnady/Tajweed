import React, {Component} from 'react';
import {TextInput, View, Button, ImageBackground} from 'react-native';
import axios from 'axios';

class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {name: '', pass: '', token: ''};
  }
  render() {
    onConfirm = () => {
      axios
        .post('http://192.168.1.7:3001/api/auth', {
          email: this.state.name,
          password: this.state.pass,
        })
        .then(response => {
          // console.log(response);
          this.props.navigation.navigate('Audio', {token: response.data});
        })
        .catch(error => alert(error.response.data));
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
            onChangeText={name => this.setState({name})}
            value={this.state.name}
          />

          <TextInput
            onChangeText={pass => this.setState({pass})}
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
            value={this.state.pass}
          />
          <View
            style={{
              marginBottom: 20,
              marginTop: 10,
              marginLeft: 10,
              marginRight: 10,
            }}>
            <Button onPress={onConfirm} title="سجّل" color="#B2DFDB" />
          </View>
        </View>
      </ImageBackground>
    );
  }
}

export default LoginScreen;
