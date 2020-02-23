import React from 'react';
import {Text, View, ImageBackground, TouchableOpacity} from 'react-native';
import {
  Collapse,
  CollapseHeader,
  CollapseBody,
} from 'accordion-collapse-react-native';
import {ListItem, Separator} from 'native-base';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Ahkam: [
        'الإظهار',
        'الإدغام',
        'الإقلاب',
        'الإخفاء',
        'الإظهار الشفوي',
        'الإدغام الشفوي',
        'الإخفاء الشفوي',
      ],
    };
  }
  render() {
    alt = () => {
      alert('xcvfd');
    };
    return (
      <ImageBackground
        source={require('_assets/images/islamic.jpg')}
        style={{
          width: '100%',
          height: '100%',
          opacity: 100,
        }}>
        <View>
          <Collapse>
            <CollapseHeader>
              <Separator bordered>
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: 'bold',
                    color: '#33691E',
                    marginRight: 10,
                  }}>
                  أحكام النون الساكنة والتنوين
                </Text>
              </Separator>
            </CollapseHeader>
            <CollapseBody style={{flexDirection: 'row-reverse'}}>
              <ListItem>
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate('Ethhar')}>
                  <Text>الإظهار</Text>
                </TouchableOpacity>
              </ListItem>

              <ListItem>
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate('Edgham')}>
                  <Text>الإدغام</Text>
                </TouchableOpacity>
              </ListItem>

              <ListItem>
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate('Eqlab')}>
                  <Text>الإقلاب</Text>
                </TouchableOpacity>
              </ListItem>

              <ListItem last>
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate('Ekhfaa')}>
                  <Text>الإخفاء</Text>
                </TouchableOpacity>
              </ListItem>
            </CollapseBody>
          </Collapse>
          <Collapse>
            <CollapseHeader>
              <Separator bordered>
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: 'bold',
                    color: '#33691E',
                    marginRight: 10,
                  }}>
                  أحكام الميم الساكنة والتنوين
                </Text>
              </Separator>
            </CollapseHeader>
            <CollapseBody style={{flexDirection: 'row-reverse'}}>
              <ListItem>
                <Text>الإظهار الشفوي</Text>
              </ListItem>
              <ListItem>
                <Text>الإدغام الشفوي</Text>
              </ListItem>
              <ListItem last>
                <Text>الإخفاء الشفوي</Text>
              </ListItem>
            </CollapseBody>
          </Collapse>
        </View>
      </ImageBackground>
    );
  }
}

export default Home;
