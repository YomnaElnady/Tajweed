import React, {Component} from 'react';
import {
  View,
  Text,
  FlatList,
  Button,
  Alert,
  ImageBackground,
} from 'react-native';
import {Card} from 'react-native-elements';
import SwipeablePanel from 'rn-swipeable-panel';

class Ethhar extends Component {
  constructor() {
    super();
    this.state = {
      swipeablePanelActive: false,
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
  openPanel = () => {
    this.setState({swipeablePanelActive: true});
  };

  closePanel = () => {
    this.setState({swipeablePanelActive: false});
  };
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
          <Button
            title="انظر شرح الحكم"
            color="#B2DFDB"
            onPress={() => this.openPanel()}
          />
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <SwipeablePanel
              fullWidth
              isActive={this.state.swipeablePanelActive}
              onClose={this.closePanel}
              onPressCloseButton={this.closePanel}>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: 'bold',
                  fontFamily: 'Cochin',
                  margin: 15,
                }}>
                الإظهار
              </Text>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: 'bold',
                  fontFamily: 'Cochin',
                  margin: 15,
                }}>
                لغة: البيان
              </Text>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: 'bold',
                  fontFamily: 'Cochin',
                  margin: 15,
                }}>
                اصطلاحا: إخراج كل حرف من مخرجه من غير زيادة في غنة الحرف
                المُظهَر. وعلى هذا يجب فصل النون الساكنة أو التنوين عن الحرف
                الذي بعدها من غير سكت عليه.
              </Text>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: 'bold',
                  fontFamily: 'Cochin',
                  margin: 15,
                }}>
                حروفه: تظهر النون الساكنة أو التنوين إذا وقع بعدها حرف من حروف
                الحلق الستة: الهمزة والهاء والعين والحاء والغين والخاء (ء هـ ع ح
                غ خ) وهذه الحروف مجموعة في أوائل هذه الكلمات: أخي هاك علما حازه
                غير خاسر.
              </Text>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: 'bold',
                  fontFamily: 'Cochin',
                  margin: 15,
                }}>
                ويكون إظهار النون الساكنة في الكلمة الواحدة وفي الكلمتين. أما
                إظهار التنوين فلا يقع حتما إلا في كلمتين.
              </Text>
            </SwipeablePanel>
          </View>
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

export default Ethhar;
