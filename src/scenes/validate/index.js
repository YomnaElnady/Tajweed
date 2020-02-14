import PlayerScreen from 'react-native-sound-playerview';
import React, {Component} from 'react';
import {View} from 'react-native';
import {Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import axios from 'axios';

class Validate extends Component {
  constructor(props) {
    super(props);
    this.state = {label: '', link: ''};
  }
  trueRecord = async () => {
    await this.setState({label: '1'});
    alert(`Evaluation= ${this.state.label}`);
  };
  falseRecord = async () => {
    await this.setState({label: '0'});
    alert(`Evaluation= ${this.state.label}`);
  };
  getRecord = async () => {
    axios
      .get('http://192.168.1.27:3001/api/client/random')
      .then(response => {
        this.setState({
          link: response.data.link,
        });
        console.log(this.state.link);
      })
      .catch(error => alert(error.response.data));
  };
  displayview() {
    return (
      <View>
        {this.state.link && (
          <View style={{flex: 1, justifyContent: 'space-between'}}>
            <PlayerScreen filepath={this.state.link} />
            <View
              style={{
                flex: 0.25,
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginBottom: 10,
                marginTop: 10,
                marginLeft: 10,
                marginRight: 10,
              }}>
              <View
                style={{
                  flex: 0.25,
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  marginBottom: 10,
                  marginTop: 10,
                  marginLeft: 10,
                  marginRight: 10,
                }}>
                <Button
                  onPress={this.trueRecord}
                  title=" صح"
                  backgroundColor="#B2DFDB"
                  icon={<Icon name="check" color="white" />}
                />

                <Button
                  onPress={this.falseRecord}
                  title=" خطأ"
                  color="#B2DFDB"
                  icon={<Icon name="times" color="white" />}
                />
              </View>
              <Button onPress={this.getRecord} title=" كرّر" color="#B2DFDB" />
            </View>
          </View>
        )}
      </View>
    );
  }

  render() {
    return <View>{this.displayview()}</View>;
  }
}

export default Validate;
