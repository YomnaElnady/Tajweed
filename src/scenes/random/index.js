import PlayerScreen from 'react-native-sound-playerview';
import React, {Component} from 'react';
import {View, Button, AsyncStorage, Text, alert, TouchableOpacity,Image ,ActivityIndicator, ImageBackground} from 'react-native';
//import {Button} from 'react-native-elements';
//import Icon from 'react-native-vector-icons/FontAwesome';
import axios from 'axios';
import AudioRecord from 'react-native-audio-record';
import { Buffer } from 'buffer';
//import { url } from 'inspector';


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
    this.state = {isloading:false,label: false,surah:'' ,link: '', id: '',parentId:'', verse:'',verseName:'',rulename:'',RuleId:'',discrip:'',  blobUrl: "", audio:'',chunk:'', hokm:'',
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
   
    AudioRecord.on('data', data => {
      // base64-encoded audio data chunks
      const chunk = Buffer.from(data, 'base64');
      this.setState({chunk: chunk}) 
     // console.log(data)
    });
   
    
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

  //  AudioRecord.on(audioFile, data => {
  //   chunk = Buffer.from(data, 'base64');
  //  console.log(chunk)
  //   this.setState({chunk: chunk});
  // });
  }
  

  getRule=async(id)=>{
    axios
    .get(`https://otrojjah-api.herokuapp.com/api/rule/?id=${id}`)
    .then(response => {
    console.log(id)
    this.setState({
      rulename: response.data[0].name,
      discrip:response.data[0].description,
      parentId:response.data[0].parentId
      
    })
    console.log(response)
   // console.log(verseName)
    }).then(()=>{

      axios
      .get(`https://otrojjah-api.herokuapp.com/api/rule/?id=${this.state.parentId}`)
      .then(response => {
      console.log(id)
      this.setState({
        hokm: response.data[0].name,
        isloading:false
      })
      console.log(response)
     // console.log(verseName)
      })
      .catch(error => this.setState({isloading:false}));
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
      RuleId:response.data[0].ruleId,
      surah:response.data[0].surah,


      
    })
    this.getRule(this.state.RuleId) 
    console.log('this is rule id',response)
  //  console.log(response)
   // console.log(verseName)
    })
    .catch(error => console.log(error.response.data));
  }

  getRecord = async () => {

   this.setState({
     link:'',
     isloading:true
  })
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
  const audiofile='file://'+this.state.audio
  //const blobUrl = RNFetchBlob.wrap(RNFetchBlob.fs.asset('file://'+this.state.audio));
 console.log('audiofile')
  console.log(audiofile)
 
  
//  let blobUrl =await result.blob()

//const blob =fromUint8Array(this.state.chunk)

console.log(this.state.chunk)
const view =await new Uint8Array([1,2,5,3,4,5])
const blob= await new Blob([this.state.chunk],{type:'audio/wav'})
console.log(blob.data)
//const blobUrl = URL.createObjectURL(blob);
//const recordURI = Asset.fromModule(require("./assets/01B1.wav")).uri;

console.log(this.state.verseName)
  var data = new FormData();
  data.append("label",  this.state.verseName);
  data.append("verseId",  this.state.verse);
  data.append("record",  {
    uri: audiofile,
    name: "01B1.wav",
    type: "audio/wav"
  });
  data.append("isShaikh", false);
console.log('data')
console.log(data)

   // RNFetchBlob.fetch('POST', 'https://otrojjah-api.herokuapp.com/api/record',
   // {  'Content-Type' : 'multipart/form-data'},
   // [{name:'record',filename:'', label: "فَمَنْ يَعْمَلْ",  data:data, isShaikh:false}])

 


  await axios
    .post('https://otrojjah-api.herokuapp.com/api/record',data, {headers: { "x-auth-token": jwt,  'Content-Type': 'multipart/form-data', }})
  .then(function(response) {
    console.log('then')
    console.log(response.data);
    console.log(response)
  }).catch(error=> console.log(error.response.data))
}





  render() {

    viewButtons= ()=>{
      return(

        
        <View style={{flexDirection:'row', justifyContent:'space-around', marginVertical:10}}> 
        <TouchableOpacity  onPress={this.sendRecord}>
        <Text style={{color:'white', textAlign:'center', fontFamily: 'a-jannat-lt',backgroundColor:'#c28f48',borderRadius: 50, width:150, fontSize:17 ,alignSelf:'flex-start'}}>إرسل التسجيل</Text>

        </TouchableOpacity>
      
        <TouchableOpacity onPress={() => this.setState({hasRecord: false})}>
        <Text style={{color:'white', textAlign:'center', fontFamily: 'a-jannat-lt',backgroundColor:'#c28f48',borderRadius: 50, width:150, fontSize:17 ,alignSelf:'flex-start'}}>إمسح التسجيل</Text>
        </TouchableOpacity>
     
        </View> 
        ); 
         }
    if (this.state.first == true){
      this.getRecord()
      this.setState({first:false})
    }
    return (
     
      <ImageBackground
      source={require('_assets/images/random.jpg')}
      style={{
        width: '100%',
        height: '100%',
      }}>
         
      {this.state.isloading==false &&
      <View
        style={{
          flex: 1,
        }}>
      { this.state.link != '' && 
      
      <View style={{width:300, height:200, alignSelf:'center',alignContent:'center',alignItems:'center' ,marginTop:50, marginRight:10}}>
        <Text style={{fontFamily: 'a-jannat-lt'}}>استمع جيداً ثم قم بالتسجيل</Text>
      <PlayerScreen filepath={this.state.link} />
      </View>
      }
      { this.state.link != '' && 
      <View style={{backgroundColor:'white',width:250,margin:5 ,alignSelf:'center',borderRadius:50, flexDirection:'row',justifyContent:'space-between'}}>
      <Text style={{fontFamily: 'a-jannat-lt',width:150, textAlign:'center',padding:1}}>{this.state.verseName}</Text>  
      <Text style={{textAlign:'center', fontFamily: 'a-jannat-lt',padding:1,backgroundColor:'#243c49', width:100, borderRadius:50, color:'white'}}>الآية</Text> 
      </View>
        }
        
{ this.state.link != '' && 
      <View style={{backgroundColor:'white',width:250,margin:5 ,alignSelf:'center',borderRadius:50, flexDirection:'row',justifyContent:'space-between'}}>
      <Text style={{width:150, textAlign:'center',fontFamily: 'a-jannat-lt',padding:1}}>{this.state.surah}</Text>  
      <Text style={{textAlign:'center', padding:1,fontFamily: 'a-jannat-lt',backgroundColor:'#243c49', width:100, borderRadius:50, color:'white'}}>السورة</Text> 
      </View>
        }
         { this.state.link != '' && 
      <View style={{backgroundColor:'white',margin:5,width:250, alignSelf:'center',borderRadius:50, flexDirection:'row',justifyContent:'space-between'}}>
      <Text style={{width:150, textAlign:'center',fontFamily: 'a-jannat-lt',padding:1}}>{this.state.rulename}</Text>  
      <Text style={{textAlign:'center', padding:1,backgroundColor:'#243c49', fontFamily: 'a-jannat-lt',width:100, borderRadius:50, color:'white'}}>الحكم المفصل</Text> 
      </View>
        }
         { this.state.link != '' && 
      <View style={{backgroundColor:'white',margin:5,width:250, alignSelf:'center',borderRadius:50, flexDirection:'row',justifyContent:'space-between'}}>
      <Text style={{width:150, textAlign:'center',fontFamily: 'a-jannat-lt',padding:1}}>{this.state.hokm}</Text>  
      <Text style={{textAlign:'center', padding:1,backgroundColor:'#243c49', fontFamily: 'a-jannat-lt',width:100, borderRadius:50, color:'white'}}>الحكم</Text> 
      </View>
        }


      { !this.state.working &&     this.state.link != '' && !this.state.hasRecord&&
                <TouchableOpacity 
                     onPress={this.startRecord} 
                     style={{justifyContent:'center', alignItems:'center'}}
                     >
                   
                   <Image  style={{width:100, height:100, }}
                   source={require('_assets/images/rec.png')}/>
           </TouchableOpacity> 
                  }
                   { this.state.working &&
           <TouchableOpacity 
                     onPress={this.stopRecord} 
                     style={{justifyContent:'center', alignItems:'center',marginTop:22}}
                     >
                   
                   <Image   style={{width:50, height:50, }}
                   source={require('_assets/images/stop.png')}/>
                     
           </TouchableOpacity>
                  }
   { this.state.hasRecord && <PlayerScreen filepath='/data/user/0/com.tajweed/files/test.wav'/> }
      
   {this.state.hasRecord && viewButtons()  }   
      
      </View>
      }
      {this.state.isloading==true&&
        
        <View style={{flex:0.5}}>
          <View style={{flex:1}}></View>
            <ActivityIndicator size="large" color="#243c49" />
            </View>
          }
      </ImageBackground>

    );
  }
}


export default Random;
