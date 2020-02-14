import React, {Component} from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  Alert,
  ImageBackground,
} from 'react-native';
import {Card} from 'react-native-elements';
class Eqlab extends Component {
  constructor() {
    super();
    this.state = {
      FlatListItems: [
        {key: ' ﴿مِن بَـنِي﴾', hokm: 'النون الساكنة مع الباء'},
        {
          key: '﴿بَصِيـرٌ بِالْعِبَادِ﴾',
          hokm: 'التنوين مع الباء',
        },
      ],
    };
  }
  GetItem(item) {
    this.props.navigation.navigate('Methal');
  }
  FlatListItemSeparator = () => {
    return (
      <View
        style={{
          height: 5,
          width: '100%',
          backgroundColor: '#129D9B',
        }}
      />
    );
  };

  render() {
    return (
      <ImageBackground
        source={require('_assets/images/islamic.jpg')}
        style={{
          width: '100%',
          height: '100%',
          opacity: 100,
        }}>
        <View style={{justifyContent: 'center', flex: 1, margin: 10}}>
          <FlatList
            data={this.state.FlatListItems}
            renderItem={({item}) => (
              <View style={{flex: 1, flexDirection: 'row-reverse'}}>
                <View
                  style={{
                    flex: 1,
                    flexDirection: 'column',
                    backgroundColor: '',
                    borderRadius: 10,
                  }}>
                  <Card title={item.hokm}>
                    <Text style={{marginBottom: 10}}>{item.key}</Text>
                  </Card>
                </View>
              </View>
            )}
          />
        </View>
      </ImageBackground>
    );
  }
}

export default Eqlab;
