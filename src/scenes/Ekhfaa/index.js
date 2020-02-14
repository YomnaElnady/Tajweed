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
class Ekhfaa extends Component {
  constructor() {
    super();
    this.state = {
      FlatListItems: [
        {key: '﴿مَنْ أَعْرَضَ﴾ ', hokm: 'النون الساكنة مع الهمزة'},
        {
          key: '﴿جَنَّاتٍ أَلْفَافاً﴾ ',
          hokm: '  التنوين مع الهمزة',
        },
        {
          key: '﴿مِـنْهُمْ﴾',
          hokm: 'النون الساكنة مع الهاء',
        },
        {
          key: '﴿قَوْمٍ هَادٍ﴾',
          hokm: ' التنوين مع الهاء',
        },
        {
          key: '﴿مِنْ عَاصِمٍ﴾',
          hokm: '  النون الساكنة مع العين',
        },
        {
          key: '﴿شَيْءٍ عَلِيمٌ﴾',
          hokm: ' التنوين مع العين',
        },
        {
          key: '﴿يَنْحِتُونَ﴾',
          hokm: ' النون الساكنة مع الحاء',
        },
        {
          key: '﴿عَزِيزٌ حَكِيمٌ﴾',
          hokm: 'التنوين مع الحاء',
        },
        {
          key: '﴿مِنْ غِسْلِينٍ﴾',
          hokm: '  النون الساكنة مع الغين',
        },
        {
          key: '﴿عَفُوّاً غَفُوراً﴾',
          hokm: 'التنوين مع الغين',
        },
        {
          key: '﴿مِنْ خَشْيَةِ﴾',
          hokm: 'النون الساكنة مع الخاء',
        },
        {
          key: '﴿ذَرَّةٍ خَيْراً﴾ ',
          hokm: '   التنوين مع الخاء',
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

export default Ekhfaa;
