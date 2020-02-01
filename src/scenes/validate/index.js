import PlayerScreen from 'react-native-sound-playerview';
import React, {Component} from 'react';
import {View} from 'react-native';
import {Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

class Validate extends Component {
  constructor(props) {
    super(props);
    this.state = {label: ''};
  }
  trueRecord = async () => {
    await this.setState({label: '1'});
    alert(`Evaluation= ${this.state.label}`);
  };
  falseRecord = async () => {
    await this.setState({label: '0'});
    alert(`Evaluation= ${this.state.label}`);
  };

  render() {
    return (
      <View style={{flex: 1, justifyContent: 'space-between'}}>
        <PlayerScreen filepath="elmasad_1.mp3" />
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
            title=" True"
            backgroundColor="#B2DFDB"
            icon={<Icon name="check" color="white" />}
          />

          <Button
            onPress={this.falseRecord}
            title=" False"
            color="#B2DFDB"
            icon={<Icon name="times" color="white" />}
          />
        </View>
      </View>
    );
  }
}

export default Validate;
