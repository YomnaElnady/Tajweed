import PlayerScreen from 'react-native-sound-playerview';
import React, {Component} from 'react';
import {View, Button, AsyncStorage, Text, alert, TouchableOpacity,Image ,Alert} from 'react-native';
//import {Button} from 'react-native-elements';
//import Icon from 'react-native-vector-icons/FontAwesome';
import axios from 'axios';
import AudioRecord from 'react-native-audio-record';


const options = {
  sampleRate: 16000,  // default 44100
  channels: 1,        // 1 or 2, default 1
  bitsPerSample: 16,  // 8 or 16, default 16
  audioSource: 6,     // android only (see below)
  wavFile: 'test.wav' // default 'audio.wav'
};

AudioRecord.init(options);



class Random extends Component {
  constructor(props) {
    super(props);
    this.state = {label: false, link: '', id: '', verse:'',verseName:'',rulename:'',RuleId:'',discrip:'',  blobUrl: "", audio:'',chunk:'',
    recordedBlob: "",
    btnClass: "btn btn-info disabled normalcursor" 
    ,hasRecord:false, working:false, first:true};
  }
  
  startRecord =()=>{
    console.log('تسجيل')
    this.setState({hasRecord:false});  
    AudioRecord.start()
    console.log(this.state.hasRecord)  
    this.setState({working: !this.state.working});
     

  } 
  
  
  
  

  stopRecord=async()=>{  
   const hasRecord=true
   this.setState({hasRecord: true});
   this.setState({working: !this.state.working});
    audioFile = await AudioRecord.stop()  
    console.log(audioFile)
    this.setState({audio: audioFile});
    console.log('انتهيت') 
   console.log(this.state.hasRecord)   
  }
  

  getRule=async(id)=>{
    axios
    .get(`https://otrojjah-api.herokuapp.com/api/rule/?id=${id}`)
    .then(response => {
    console.log(id)
    this.setState({
      rulename: response.data[0].name,
      discrip:response.data[0].description,
      
    })
    console.log(response)
   // console.log(verseName)
    })
    .catch(error => console.log(error.response.data));
  }


  getVerse=async(id)=>{
    axios
    .get(`https://otrojjah-api.herokuapp.com/api/verse/?id=${id}`)
    .then(response => {
    console.log(id)
    this.setState({
      verseName: response.data[0].name,
      RuleId:response.data[0].ruleId
      
    })
    this.getRule(this.state.RuleId) 
    console.log('this is rule id',this.state.RuleId)
  //  console.log(response)
   // console.log(verseName)
    })
    .catch(error => console.log(error.response.data));
  }

  getRecord = async () => {
   this.setState({link:''})
   const jwt = AsyncStorage.getItem('jwt')

    axios
      .get('https://otrojjah-api.herokuapp.com/api/record/random/shaikh',
      {
        headers: { "x-auth-token": jwt }
      })
      .then(response => {
        console.log('this is the response', response);
        this.setState({
          link: response.data.fileURL,
          id: response.data._id,
          verse: response.data.verseId,
         // RuleId:response.data._id
        });
       this.getVerse(this.state.verse)
      
      })
      .catch(error => alert(error.response.data));
  };

sendRecord=async()=>{
  this.setState({hasRecord: false})



  const jwt = AsyncStorage.getItem('jwt')
  const audiofile=new Blob(this.state.audio)
  const blobUrl = URL.createObjectURL(audiofile);
  console.log(audiofile)
  const data = new FormData();
  data.append("name", this.state.verseName);
  data.append("label",  this.state.verseName);
  data.append("verseId",  this.state.verse);
  data.append("record", blobUrl);
  data.append("isShaikh", false);
  axios
  .post('https://otrojjah-api.herokuapp.com/api/record', data, {headers: { "x-auth-token": jwt }})
  .then(function(response) {
    console.log('then')
    console.log(response);
  }).catch(error=> console.log(error))
}





  render() {

    viewButtons= ()=>{
      return(
        <View style={{flexDirection:'row', justifyContent:'space-around'}}> 
        <Button
        title="ارسل التسجيل"
        color="#00C788"
        onPress={this.sendRecord}
        />
      
      <Button
        title="امسح التسجيل"
        color="#00C788"
        onPress={() => this.setState({hasRecord: false})}
        /> 
        </View> 
        ); 
         }
    if (this.state.first == true){
      this.getRecord()
      this.setState({first:false})
    }
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'space-between',
          backgroundColor: '#FFF8E1',
        }}>
      { this.state.link != '' && <PlayerScreen filepath={this.state.link} />}
      { this.state.link != '' && <Text style={{textAlign:'center'}}>{this.state.verseName}</Text>   }
      { this.state.link != '' && <Text style={{textAlign:'center'}}>{this.state.rulename}</Text>   }
      { this.state.link != '' && <Text style={{textAlign:'center'}}>{this.state.discrip}</Text>   }

      <Text style={{marginBottom: 10}}></Text>

      <Text></Text>
      { !this.state.working &&    
                <TouchableOpacity 
                     onPress={this.startRecord} 
                     style={{justifyContent:'center', alignItems:'center'}}
                     >
                   
                   <Image  style={{width:75, height:75, }}
                   source={require('_assets/images/rec.png')}/>
                     
           </TouchableOpacity> 
                  }
                   { this.state.working &&
           <TouchableOpacity 
                     onPress={this.stopRecord} 
                     style={{justifyContent:'center', alignItems:'center'}}
                     >
                   
                   <Image  
                   source={require('_assets/images/stop.png')}/>
                     
           </TouchableOpacity>
                  }
   { this.state.hasRecord && <PlayerScreen filepath='/data/user/0/com.tajweed/files/test.wav'/> }
      
   {this.state.hasRecord && viewButtons()  }   
      
      </View>
    );
  }
}


export default Random;
