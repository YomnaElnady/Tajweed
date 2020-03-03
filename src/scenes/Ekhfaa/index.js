import React, {Component} from 'react';
import {View, Text, FlatList, Button, ImageBackground} from 'react-native';
import {Card} from 'react-native-elements';
import SwipeablePanel from 'rn-swipeable-panel';
import PlayerScreen from 'react-native-sound-playerview';

class Ekhfaa extends Component {
  constructor() {
    super();
    this.state = {
      FlatListItems: [
        {key: '﴿مَنْصُوراً﴾', hokm: 'النون الساكنة مع الصاد'},
        {key: '﴿رِيحًا صرصرًا﴾', hokm: 'التنوين مع الصاد'},
        {
          key: '﴿مَّن ذَا﴾',
          hokm: 'النون الساكنة مع الذال',
        },
        {
          key: '﴿سراعاً ذلك﴾',
          hokm: 'التنوين مع الذال',
        },
        {
          key: '﴿منثورا﴾',
          hokm: 'النون الساكنة مع الثاء',
        },
        {
          key: '﴿تمهيداً ثمّ﴾',
          hokm: 'التنوين مع الثاء',
        },
        {
          key: '﴿الإِنْسَانَ﴾ ',
          hokm: 'النون الساكنة مع السين',
        },
        {
          key: '﴿عابدتٍ سائحات﴾ ',
          hokm: 'التنوين مع السين',
        },
        {
          key: '﴿منْكُم﴾ ',
          hokm: 'النون الساكنة مع الكاف',
        },
        {
          key: '﴿لَيَؤُوسٌ كَـفُورٌ﴾ ',
          hokm: 'التنوين مع الكاف',
        },
        {
          key: '﴿فَأَنجَيْنَاكُمْ﴾',
          hokm: 'النون الساكنة مع الجيم',
        },
        {
          key: '﴿فصبرٌ جميل﴾',
          hokm: 'التنوين مع الجيم',
        },
        {
          key: '﴿مِن شَيْءٍ﴾ ',
          hokm: 'النون الساكنة مع الشين',
        },
        {
          key: '﴿علمٍ شيئًا﴾ ',
          hokm: 'التنوين مع الشين',
        },
        {
          key: '﴿مِن قَبْلِهِ﴾',
          hokm: 'النون الساكنة مع القاف',
        },
        {
          key: '﴿ثمناً قليلا﴾',
          hokm: 'التنوين مع القاف',
        },
        {
          key: '﴿أَندَاداً﴾ ',
          hokm: 'النون الساكنة مع الدال',
        },
        {
          key: '﴿قنوانٍ دانية﴾ ',
          hokm: 'التنوين مع الدال',
        },
        {
          key: '﴿يَنطِـقُونَ﴾ ',
          hokm: 'النون الساكنة مع الطاء',
        },
        {
          key: '﴿حلالاً طيبا﴾ ',
          hokm: 'التنوين مع الطاء',
        },
        {
          key: '﴿أَنزَلْنَا﴾',
          hokm: 'النون الساكنة مع الزين',
        },
        {
          key: '﴿يومئذٍ زرقا﴾',
          hokm: 'التنوين مع الزين',
        },
        {
          key: '﴿شَيْءٍ فَإِنَّ﴾',
          hokm: 'النون الساكنة مع الفاء',
        },
        {
          key: '﴿سوءٍ فاسقين﴾',
          hokm: 'التنوين مع الفاء',
        },
        {
          key: '﴿وَأَنتُمْ﴾',
          hokm: 'النون الساكنة مع التاء',
        },
        {
          key: '﴿جناتٍ تجري﴾',
          hokm: 'التنوين مع التاء',
        },
        {
          key: '﴿مِّن ضَعْفٍ﴾',
          hokm: 'النون الساكنة مع الضاد',
        },
        {
          key: '﴿مسجداً ضرارا﴾',
          hokm: 'التنوين مع الضاد',
        },
        {
          key: '﴿تَنظُرُونَ﴾',
          hokm: 'النون الساكنة مع الظاء',
        },
        {
          key: '﴿قومٌ ظلموا﴾',
          hokm: 'التنوين مع الظاء',
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
                الإخفاء
              </Text>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: 'bold',
                  fontFamily: 'Cochin',
                  margin: 15,
                }}>
                لغة: الستر.
              </Text>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: 'bold',
                  fontFamily: 'Cochin',
                  margin: 15,
                }}>
                اصطلاحا: النطق بالنون اساكنة أو التنوين على صفة بين الإظهار
                والإدغام مع مراعاة بقاء الغنة في الحرف المخفي.
              </Text>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: 'bold',
                  fontFamily: 'Cochin',
                  margin: 15,
                }}>
                حروفه: خمسة عشر حرفا مجموعة في أوائل كلمات البيت التالي:
              </Text>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: 'bold',
                  fontFamily: 'Cochin',
                  margin: 15,
                }}>
                صف ذا ثـنا كم جاد شخص قد سـما دم طيبا زد فـي تقى ضـع ظـالما
              </Text>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: 'bold',
                  fontFamily: 'Cochin',
                  margin: 15,
                }}>
                أداء الإخفاء: عند إخفاء النون الساكنة أو التنوين يتحول مخرج
                النون من طرف اللسان (مع لثة الأسنان العليا) إلى قرب مخرج حرف
                الإخفاء. أي أن القارئ يجعل طرف لسانه مبتعدا قليلا عن لثة الأسنان
                العليا.
              </Text>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: 'bold',
                  fontFamily: 'Cochin',
                  margin: 15,
                }}>
                كما يُراعى أيضا مد الغنة مقدار حركتين، وتفخيمها –أي الغنة- إذا
                .كان حرف الإخفاء مفخما، وترقيقها إذا كان حرف الإخفاء مرققا
              </Text>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: 'bold',
                  fontFamily: 'Cochin',
                  margin: 15,
                }}>
                هذا ويجب الاحتراز من تحويل الغنة إلى حرف مد كنطق كلمة "كـنـتم"
                هكذا: "كونـتم" وهذا خطأ.
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
        </View>
      </ImageBackground>
    );
  }
}

export default Ekhfaa;
