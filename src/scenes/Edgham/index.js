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
class Edgham extends Component {
  constructor() {
    super();
    this.state = {
      FlatListItems: [
        {key: '﴿مِن نَّـفْعِهِمَا﴾ ', hokm: 'النون الساكنة مع النون'},
        {
          key: '﴿يَوْمَئِذٍ نَّـاعِمَةٌ﴾',
          hokm: ' التنوين مع النون',
        },
        {
          key: '﴿مِن مَّـاء﴾',
          hokm: 'النون الساكنة مع الميم',
        },
        {
          key: '﴿لَيَكُونـاً مِّنَ﴾ ',
          hokm: 'التنوين مع الميم',
        },
        {
          key: '﴿مِن وَلِيٍّ﴾ ',
          hokm: 'النون الساكنة مع الواو',
        },
        {
          key: '﴿وَلِيٍّ وَلاَ﴾',
          hokm: 'التنوين مع الواو ',
        },
        {
          key: '﴿فَمَن يَـعْمَلْ﴾',
          hokm: 'النون الساكنة مع الياء',
        },
        {
          key: '﴿خَيْراً يَرَهُ﴾',
          hokm: 'التنوين مع الياء',
        },
        {
          key: '﴿مِن لَّـدُنْهُ﴾ ',
          hokm: 'النون الساكنة مع اللام',
        },
        {
          key: '﴿هُدًى لِّـلْمُتَّقِينَ﴾ ',
          hokm: 'التنوين مع اللام',
        },
        {
          key: '﴿مِّن رَّبِّهِمْ﴾ ',
          hokm: 'النون الساكنة مع الراء',
        },
        {
          key: '﴿غَفُورٌ رَّحِيمٌ﴾ ',
          hokm: 'التنوين مع الراء',
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

export default Edgham;
