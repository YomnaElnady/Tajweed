import React, {Component} from 'react';
import {View, Text, FlatList, Button, ImageBackground} from 'react-native';
import {Card} from 'react-native-elements';
import SwipeablePanel from 'rn-swipeable-panel';

class Ekhfaa extends Component {
  constructor() {
    super();
    this.state = {
      FlatListItems: [
        {key: '﴿مَنْصُوراً﴾', hokm: 'النون الساكنة مع الصاد'},
        {
          key: '﴿مَّن ذَا﴾',
          hokm: 'النون الساكنة مع الذال',
        },
        {
          key: '﴿الإِنْسَانَ﴾ ',
          hokm: 'النون الساكنة مع السين',
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
          key: '﴿مِن شَيْءٍ﴾ ',
          hokm: 'النون الساكنة مع الشين',
        },
        {
          key: '﴿مِن قَبْلِهِ﴾',
          hokm: 'النون الساكنة مع القاف',
        },
        {
          key: '﴿أَندَاداً﴾ ',
          hokm: 'النون الساكنة مع الدال',
        },
        {
          key: '﴿يَنطِـقُونَ﴾ ',
          hokm: 'النون الساكنة مع الطاء',
        },
        {
          key: '﴿أَنزَلْنَا﴾',
          hokm: 'النون الساكنة مع الزين',
        },
        {
          key: '﴿شَيْءٍ فَإِنَّ﴾',
          hokm: 'النون الساكنة مع الفاء',
        },
        {
          key: '﴿وَأَنتُمْ﴾',
          hokm: 'النون الساكنة مع التاء',
        },
        {
          key: '﴿مِّن ضَعْفٍ﴾',
          hokm: 'النون الساكنة مع الضاد',
        },
        {
          key: '﴿تَنظُرُونَ﴾',
          hokm: 'النون الساكنة مع الظاء',
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
                الإدغام
              </Text>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: 'bold',
                  fontFamily: 'Cochin',
                  margin: 15,
                }}>
                لغة: الإدخال.
              </Text>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: 'bold',
                  fontFamily: 'Cochin',
                  margin: 15,
                }}>
                اصطلاحا: اللفظ بحرفين حرفا واحدا مشددا من جنس الثاني. أو التلفظ
                بساكن فمتحرك بلا فصل من مخرج واحد.
              </Text>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: 'bold',
                  fontFamily: 'Cochin',
                  margin: 15,
                }}>
                حروفه: تُدغم النون الساكنة والتنوين في ستة حروف مجموعة في كلمة
                (يرملون)
              </Text>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: 'bold',
                  fontFamily: 'Cochin',
                  margin: 15,
                }}>
                أقسامه: قسمان إدغام بغنة وإدغام بلا غنة.
              </Text>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: 'bold',
                  fontFamily: 'Cochin',
                  margin: 15,
                }}>
                1. إدغام بغنة: يكون الإدغام بغنة إذا وقع بعد النون الساكنة أو
                التنوين أحد حروف كلمة (ينمو).
              </Text>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: 'bold',
                  fontFamily: 'Cochin',
                  margin: 15,
                }}>
                وهو على قسمين: إدغام كامل بغنة وإدغام ناقص بغنة.
              </Text>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: 'bold',
                  fontFamily: 'Cochin',
                  margin: 15,
                }}>
                إدغام كامل بغنة: له حرفان الميم والنون. والغنة الباقية عند إدغام
                النون الساكنة أو التنوين في هذين الحرفين تكون للحرف المدغم فيه
                ولهذا كان الإدغام كاملا.
              </Text>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: 'bold',
                  fontFamily: 'Cochin',
                  margin: 15,
                }}>
                إدغام ناقص بغنة: له حرفان الواو والياء. والإدغام ناقص هنا لأن
                الغنة الباقية صفة للحرف المدغم.
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
