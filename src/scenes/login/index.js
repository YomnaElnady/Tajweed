import React, {Component} from 'react';
import {TextInput, View, Button, ImageBackground} from 'react-native';

class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {name: '', pass: ''};
  }
  render() {
    onConfirm = () => {
      alert(`UserName: ${this.state.name}\nPassword: ${this.state.pass}`);
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
            placeholder="Username"
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
            placeholder="Password"
            value={this.state.pass}
          />
          <View
            style={{
              marginBottom: 20,
              marginTop: 10,
              marginLeft: 10,
              marginRight: 10,
            }}>
            <Button
              onPress={() => this.props.navigation.navigate('Audio')}
              title="Login"
              color="#B2DFDB"
            />
          </View>
        </View>
      </ImageBackground>
    );
  }
}

export default LoginScreen;
