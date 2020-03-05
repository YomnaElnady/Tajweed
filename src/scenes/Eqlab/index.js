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
import PlayerScreen from 'react-native-sound-playerview';

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
        <View style={{justifyContent: 'center', flex: 1, margin: 10}}></View>
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
              الإقلاب
            </Text>
            <Text
              style={{
                fontSize: 20,
                fontWeight: 'bold',
                fontFamily: 'Cochin',
                margin: 15,
              }}>
              لغة: تحويل الشيء عن وجهه.
            </Text>
            <Text
              style={{
                fontSize: 20,
                fontWeight: 'bold',
                fontFamily: 'Cochin',
                margin: 15,
              }}>
              اصطلاحا: تحويل النون الساكنة أو التنوين ميما مخفاة بغنة إذا وقع
              بعدها حرف الباء.
            </Text>
            <Text
              style={{
                fontSize: 20,
                fontWeight: 'bold',
                fontFamily: 'Cochin',
                margin: 15,
              }}>
              ويتم إخفاء الميم المنقلبة عن النون بترك فرجة خفيفة بين الشفتين
              وعدم الشد عليهما. كما يجب مد الغنة بعد الإقلاب مقدار حركتين.
            </Text>
            <Text
              style={{
                fontSize: 20,
                fontWeight: 'bold',
                fontFamily: 'Cochin',
                margin: 15,
              }}>
              ضبط الإقلاب في المصاحف
            </Text>
            <Text
              style={{
                fontSize: 20,
                fontWeight: 'bold',
                fontFamily: 'Cochin',
                margin: 15,
              }}>
              يُشار إلى الإقلاب في رسم المصاحف بوضع ميم صغيرة فوق النون الساكنة
              التي بعدها باء إشارة إلى قلبها ميمًا.
            </Text>
            <Text
              style={{
                fontSize: 20,
                fontWeight: 'bold',
                fontFamily: 'Cochin',
                margin: 15,
              }}>
              أما بالنسبة للتنوين فترسم حركة واحدة من الحركتين متبوعة بميم
              صغيرة.
            </Text>
          </SwipeablePanel>
        </View>

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
                    <View style={{flex: 0.25}}>
                      <PlayerScreen filepath="elmasad_1.mp3" />
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

export default Eqlab;
