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
