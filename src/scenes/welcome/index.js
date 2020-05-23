import React, {Component} from 'react';
import {
  SafeAreaView,
  ImageBackground,
  Text,
  TouchableHighlight,
} from 'react-native';

class Welcome extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    setTimeout(() => {
      this.props.navigation.navigate('Home');
    }, 10);
  }

  render() {
    return (
      <SafeAreaView>
        <ImageBackground
          source={require('_assets/images/islamic.jpg')}
          style={{
            width: '100%',
            height: '100%',
          }}></ImageBackground>
      </SafeAreaView>
    );
  }
}

export default Welcome;
