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

class EkhfaaShafawy extends Component {
  constructor() {
    super();
    this.state = {
      swipeablePanelActive: false,
      FlatListItems: [
        {
          key: '﴿أَيُّهُم بِـذَلِكَ﴾',
          hokm: 'الميم الساكنة مع الباء',
        },
        {
          key: '﴿كُنتُم بِـهِ﴾',
          hokm: 'الميم الساكنة مع الباء',
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
                الإخفاء الشفوي
              </Text>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: 'bold',
                  fontFamily: 'Cochin',
                  margin: 15,
                }}>
                حروفه: حرف واحد وهو حرف الباء (ب).
              </Text>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: 'bold',
                  fontFamily: 'Cochin',
                  margin: 15,
                }}>
                فإذا وقع بعد الميم الساكنة حرف الباء جاز إخفاء الميم مع مراعاة
                الغنة.
              </Text>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: 'bold',
                  fontFamily: 'Cochin',
                  margin: 15,
                }}>
                ويلاحظ عند الإخفاء الشفوي تلاصق الشفتين ببعضهما تلاصقا رقيقا (أي
                عدم الضغط عليهما ضغطا قويا) دون انفراجهما حيث أن كلا من الميم
                والباء يخرجان بانطباق الشفتين.
              </Text>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: 'bold',
                  fontFamily: 'Cochin',
                  margin: 15,
                }}>
                ملاحظة: إذا وقع بعد الميم الساكنة باء جاز الإخفاء والإظهار
                وكلاهما صحيح ومأخوذ به. والإخفاء أرجح القولين وهو الذي نختاره.
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

export default EkhfaaShafawy;
