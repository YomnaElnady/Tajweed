import PlayerScreen from 'react-native-sound-playerview';
import React, {Component} from 'react';
import {View, Button} from 'react-native';
//import {Button} from 'react-native-elements';
//import Icon from 'react-native-vector-icons/FontAwesome';
import axios from 'axios';

class Validate extends Component {
  constructor(props) {
    super(props);
    this.state = {label: false, link: '', id: ''};
  }
  trueRecord = async () => {
    await this.setState({label: true});
    //alert(this.state.id);
    axios
      .put(`http://192.168.1.7:3001/api/label/${this.state.id}`, {
        correct: this.state.label,
      })
      .then(response => {
        console.log(response.data);
      })
      .catch(error => console.log(error.response.data));
  };
  falseRecord = async () => {
    await this.setState({label: false});
    //alert(this.state.id);
    axios
      .put(`http://192.168.1.7:3001/api/label/${this.state.id}`, {
        correct: this.state.label,
      })
      .then(response => {
        console.log(response.data);
      })
      .catch(error => console.log(error.response.data));
  };
  getRecord = async () => {
    axios
      .get('http://192.168.1.7:3001/api/client/random')
      .then(response => {
        console.log('this is the response', response);
        this.setState({
          link: response.data.link,
          id: response.data._id,
        });
      })
      .catch(error => alert(error.response.data));
  };

  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'space-between',
          backgroundColor: '#FFF8E1',
        }}>
        <PlayerScreen filepath={this.state.link} />
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
            color="#B2DFDB"
            //icon={<Icon name="check" color="white" />}
          />

          <Button
            onPress={this.falseRecord}
            title=" خطأ"
            color="#B2DFDB"
            //icon={<Icon name="times" color="white" />}
          />
          <Button onPress={this.getRecord} title="تسجيل جديد" color="#B2DFDB" />
        </View>
      </View>
    );
  }
}

export default Validate;
