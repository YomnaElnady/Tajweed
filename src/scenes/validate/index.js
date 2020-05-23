import PlayerScreen from 'react-native-sound-playerview';
import React, {Component} from 'react';
import {View, Button, AsyncStorage, Text} from 'react-native';
//import {Button} from 'react-native-elements';
//import Icon from 'react-native-vector-icons/FontAwesome';
import axios from 'axios';


class Validate extends Component {
  constructor(props) {
    super(props);
    this.state = {label: false, link: '', id: '', verse:''};
  }
  trueRecord = async () => {
    const jwt = AsyncStorage.getItem('jwt')

    await this.setState({label: true});
    //alert(this.state.id);
    axios
      .put(`https://otrojjah-api.herokuapp.com/api/record/label/${this.state.id}`, 'true' ,{ headers: { "x-auth-token": jwt } })
      .then(response => {
        console.log(response.data);
      })
      .catch(error => console.log(error.response.data));
  };
  falseRecord = async () => {
    const jwt = AsyncStorage.getItem('jwt')

    await this.setState({label: false});
    //alert(this.state.id);
    axios
      .put(`https://otrojjah-api.herokuapp.com/api/record/label/${this.state.id}`,"false" ,{ headers: { "x-auth-token": jwt } })
      .then(response => {
        console.log(response.data);
      })
      .catch(error => console.log(error.response.data));
  };
  getRecord = async () => {
   this.setState({link:''})
   const jwt = AsyncStorage.getItem('jwt')

    axios
      .get('https://otrojjah-api.herokuapp.com/api/record/random/client',
      {
        headers: { "x-auth-token": jwt }
      })
      .then(response => {
        console.log('this is the response', response);
        this.setState({
          link: response.data.fileURL,
          id: response.data._id,
          verse: response.data.label,
        });
       console.log(this.state.id) 
      })
      .catch(error => alert(error.response.data));
  };
  signOut=async()=>{
   const value= await AsyncStorage.setItem('isLoggedIn', 'null'); 
    alert(value)
    
    this.props.navigation.navigate('Home');

  }
  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'space-between',
          backgroundColor: '#FFF8E1',
        }}>
      { this.state.link != '' && <PlayerScreen filepath={this.state.link} />}
      { this.state.link != '' && <Text style={{textAlign:'center'}}>{this.state.verse}</Text>   }
      <Text></Text>
        <View
          style={{
            flex: 0.5,
            flexDirection: 'column',
            justifyContent: 'space-evenly',
            marginBottom: 10,
            marginTop: 10,
            marginLeft: 10,
            marginRight: 10,
            
          }}>
 
    
          <Button
            onPress={this.trueRecord}
            title=" صح"
            color="#1ABC9C"
            //icon={<Icon name="check" color="white" />}
          />

          <Button
            onPress={this.falseRecord}
            title=" خطأ"
            color="#1ABC9C"
            //icon={<Icon name="times" color="white" />}
          />
          <Button onPress={this.getRecord} title="تسجيل جديد" color="#1ABC9C" />
          
          <Button
            onPress={this.signOut}
            title="خروج"
            color="#1ABC9C"
            //icon={<Icon name="times" color="white" />}
          />
        </View>
      </View>
    );
  }
}

export default Validate;
