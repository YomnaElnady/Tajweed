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
import PlayerScreen from 'react-native-sound-playerview';

class Ethhar extends Component {
  constructor() {
    super();
    this.state = {
      swipeablePanelActive: false,
      FlatListItems: [
        {key: '﴿كَيْدَهُمْ فِـي﴾ ', hokm: 'الميم الساكنة مع الفاء'},
        {
          key: '﴿دِينُكُمْ وَلِيَ﴾',
          hokm: 'الميم الساكنة مع الواو',
        },

        {
          key: '﴿نُطْعِمُكُمْ لِـوَجْهِ﴾',
          hokm: 'الميم الساكنة مع اللام',
        },

        // {
        //   key: '﴿مِنكُمْ جَـزَاء﴾',
        //   hokm: 'الميم الساكنة مع الجيم',
        // },

        // {
        //   key: '﴿الْحَمْدُ﴾',
        //   hokm: 'الميم الساكنة مع الدال',
        // },

        // {
        //   key: '﴿شَيَاطِينِهِمْ قَـالُواْ﴾',
        //   hokm: 'الميم الساكنة مع القاف',
        // },

        // {
        //   key: '﴿مَعَكْمْ إِنَّمَا﴾',
        //   hokm: 'الميم الساكنة مع الهمزة',
        // },
        // {
        //   key: '﴿طُغْيَانِهِمْ يَـعْمَهُونَ﴾',
        //   hokm: 'الميم الساكنة مع الياء',
        // },
        // {
        //   key: '﴿أَبْصَارِهِمْ غِشَاوَةٌ﴾',
        //   hokm: 'الميم الساكنة مع الغين',
        // },
        // {
        //   key: '﴿إِلَيْهِمْ طَرْفُهُمْ﴾',
        //   hokm: 'الميم الساكنة مع الطاء',
        // },
        // {
        //   key: '﴿أَفْئِدَتُهُمْ هَوَاء﴾',
        //   hokm: 'الميم الساكنة مع الهاء',
        // },
        // {
        //   key: '﴿أَبْصَارُهُمْ تَـرْهَقُهُمْ﴾',
        //   hokm: 'الميم الساكنة مع التاء',
        // },
        // {
        //   key: '﴿سَقَاهُمْ رَبُّهُمْ﴾',
        //   hokm: 'الميم الساكنة مع الراء',
        // },
        // {
        //   key: '﴿تَـرْهَقُهُمْ ذِلَّةٌ﴾',
        //   hokm: 'الميم الساكنة مع الذال',
        // },
        // {
        //   key: '﴿هُمْ سَالِمُونَ﴾',
        //   hokm: 'الميم الساكنة مع السين',
        // },
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
            color="#1ABC9C"
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
                    <View style={{flex: 1}}>
                      <Text
                        style={{
                          marginBottom: 10,
                          fontSize: 15,
                          fontWeight: 'bold',
                        }}>
                        {item.key}
                      </Text>
                      <View style={{flex: 0.25}}>
                        <PlayerScreen filepath="elmasad_1.mp3" />
                      </View>
                    </View>
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
