import React, {Component} from 'react';
import PlayerScreen from 'react-native-sound-playerview';
import {StackNavigator} from 'react-navigation';
import AudioRecord from 'react-native-audio-record';

import {
  View,
  Text,
  FlatList,
  Button,
  Alert,
  ImageBackground,
  TouchableOpacity,
  PermissionsAndroid,
  Image
} from 'react-native';
import {Card} from 'react-native-elements';
import SwipeablePanel from 'rn-swipeable-panel';
//import PlayerScreen from 'react-native-sound-playerview';

//var audio =''

async function requestMicrophonePermission() {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
      {
        title: "Requesting Microphone Access",
        message: "App needs permission to access to your microphone "
      }
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log("You can use the microphone");
    } else {
      console.log("Microphone permission denied");
      alert("Microphone permission denied");
    }
  } catch (err) {
    console.warn(err);
  }
}
async function requestWritePermission() {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
      {
        title: "Requesting Microphone Access",
        message: "App needs permission to access to your microphone "
      }
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log("You can use the external writing");
    } else {
      console.log("Microphone permission denied");
      alert("Microphone permission denied");
    }
  } catch (err) {
    console.warn(err);
  }
}

requestMicrophonePermission();
requestWritePermission();

const options = {
  sampleRate: 16000,  // default 44100
  channels: 1,        // 1 or 2, default 1
  bitsPerSample: 16,  // 8 or 16, default 16
  audioSource: 6,     // android only (see below)
  wavFile: 'test.wav' // default 'audio.wav'
};

AudioRecord.init(options);




class Ethhar extends Component {
  constructor(props) {
    super(props);
    this.stopRecord = this.stopRecord.bind(this)
   // this.startRecord = this.startRecord.bind(this)


    this.state = {
      swipeablePanelActive: false,
      audio:'test.wav',
      isLoading: true,
      dataSource:[], 
      FlatListItems: [
        {key: '﴿مَنْ أَعْرَضَ﴾ ', 
        hokm: 'النون الساكنة مع الهمزة',
        voice: "elmasad_1.mp3",
        hasRecord:false,
        working:false
      
        },
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
  
  startRecord =()=>{
    this.setState({hasRecord:false});  
    AudioRecord.start()
    console.log(this.state.hasRecord)  
    this.setState({working: !this.state.working});
     

  } 
  
  
  
  

 async stopRecord(){  
   const hasRecord=true
   this.setState({hasRecord: true});
   this.setState({working: !this.state.working});
    audioFile = await AudioRecord.stop()  
    console.log(audioFile)
    this.setState({audio: audioFile});
    console.log('انتهيت') 
   console.log(this.state.hasRecord)   
  }


   componentDidMount() {
    try {
    fetch('https://otrojjah-api.herokuapp.com/api/verse')
     .then((response)=> response.json())
     .then((responseJson)=>{
       this.setState({
         isLoading:false,
         FlatListItems: responseJson
       })
     })
    } catch (error) {
      console.error(error);
    }
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
    
    let {dataSource, isLoading}= this.state
    
    viewButtons= ()=>{
      return(
        <View style={{flexDirection:'row', justifyContent:'space-around'}}> 
        <Button
        title="ارسل التسجيل"
        color="#00C788"
        onPress={() => this.setState({hasRecord: false})}
        />
      
      <Button
        title="امسح التسجيل"
        color="#00C788"
        onPress={() => Alert.alert('Button with adjusted color pressed')}
        /> 
        </View> 
        ); 
         };
       
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
                  extraData={this.state}
                 // renderItem={this._renderItem} 
                  keyExtractor={(item,index) => index.toString()}   
                  renderItem={({item}) => (
                    
                     <View style={{flex: 1, flexDirection: 'row-reverse'}}>
                       <View
                         style={{
                           flex: 1,
                           flexDirection: 'column',
                           backgroundColor: '',
                         borderRadius: 10,
                       }}>
                    
      
                         <Card title={item.name}>
                           <Text style={{marginBottom: 10}}>{item.key}</Text>
                           <PlayerScreen filepath= 'elmasad_1.mp3' />
                          
                   <View  style={{flex:1 }}>
                { this.state.hasRecord && <PlayerScreen filepath='/data/user/0/com.tajweed/files/test.wav'/> }
         
               { !this.state.working &&     <TouchableOpacity 
                     onPress={this.startRecord} 
                     style={{justifyContent:'center', alignItems:'center'}}
                     >
                   
                   <Image  style={{width:150, height:150, }}
                   source={require('_assets/images/rec.png')}/>
                     
           </TouchableOpacity> 
                  }
          {/* stop */}

           { this.state.working &&
           <TouchableOpacity 
                     onPress={this.stopRecord} 
                     style={{justifyContent:'center', alignItems:'center'}}
                     >
                   
                   <Image  style={{width:65, height:65, }}
                   source={require('_assets/images/stop.png')}/>
                     
           </TouchableOpacity>
                  }
      
          <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
         
              </View>    
      
              {this.state.hasRecord && viewButtons()  }
             
            
             
           </View>
                       
                        
                       </Card>
                      </View>
                     </View>
                    )}
                />
           
           
              </View>
            </ImageBackground>
          );}
         


          
  
}

export default Ethhar;
