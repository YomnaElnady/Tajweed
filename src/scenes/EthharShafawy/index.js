import React, {Component} from 'react';
import {View, Text, FlatList, Button,TouchableOpacity, ImageBackground,AsyncStorage, Alert, Image,ScrollView} from 'react-native';
import {Card} from 'react-native-elements';
import SwipeablePanel from 'rn-swipeable-panel';
import PlayerScreen from 'react-native-sound-playerview';
import { SafeAreaView } from 'react-navigation';
//import { ScrollView,  } from 'react-native-gesture-handler';
import axios from 'axios';
import AudioRecord from 'react-native-audio-record';
import { Buffer } from 'buffer';
//import { ScrollView } from 'react-native-gesture-handler';




const options = {
  sampleRate: 16000,  // default 44100
  channels: 1,        // 1 or 2, default 1
  bitsPerSample: 16,  // 8 or 16, default 16
  audioSource: 6,     // android only (see below)
  wavFile: 'test.wav' // default 'audio.wav'

};

AudioRecord.init(options);


class Ekhfaa extends Component {
  constructor() {
    super();
    this.state = {

      isLoading:true,
      hasRecord:false,
      working:false,
      showText:false,
      dataSource:[],
      FlatListItems: [],
      description:'',
      mainRule:'',
      versesToShow:[],
      verseIdToSend:'',
      shName:'',
      data:{},
      responeZero:{}, 
      networkError:false

    };
  }



  startRecord =()=>{
    console.log('تسجيل')
    this.setState({hasRecord:false});  
    AudioRecord.start()
    console.log(this.state.hasRecord)  
    this.setState({working: !this.state.working});
   
    // AudioRecord.on('data', data => {
    //   // base64-encoded audio data chunks
    //   const chunk = Buffer.from(data, 'base64');
    //   this.setState({chunk: chunk}) 
    //  // console.log(data)
    // });
   
    
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
    data.append("label",  this.state.versesToShow);
    data.append("verseId",  this.state.verseIdToSend);
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
    }).catch(error=> 
      {
        if(error=='Network request failed'){
          this.setState({
            networkError:true
          })
        }
        console.log(error.response.data)})
  }





  componentDidMount= async()=> {
   // this.fetchHokm('5e7b449b64a37600171db103');
    //this.fetchHokm('5e7b449b64a37600171db104');
    //this.fetchHokm('5e7b449b64a37600171db105');
  //  this.fetchHokm('5e7b449b64a37600171db106');

  await  fetch('https://otrojjah-api.herokuapp.com/api/rule?parentId=5e7b7b5464a37600171db179')
     .then((response)=> response.json())
  //   .then((response)=> console.log(response))
     .then((response)=>{
       this.setState({
         isLoading:false,
         dataSource: response,
         
         
       })
       console.log('this is the first fetch')

       console.log(this.state.dataSource)
       console.log(response)
     }).then(console.log(this.state.dataSource))
     .then(responseJson => {
      responseJson = responseJson.map(item => {
        item.isSelect = false;
        item.fileUrl='';
        
      //  item.selectedClass = styles.list;
        return item;
      })})
     .catch (error =>{
      if(error=='Network request failed'){
        this.setState({
          networkError:true
        })
      } 
      console.log(error)})


     await  fetch('https://otrojjah-api.herokuapp.com/api/rule?id=5e7b7b5464a37600171db179')
     .then((response)=> response.json())
  //   .then((response)=> console.log(response))
     .then((response)=>{
       this.setState({
         isLoading:false,
         description: response[0].description,
         mainRule: response[0]._id
         
       })
       console.log('this is the seconed fetch')
       console.log(this.state.FlatListItems)
       console.log(response)
     }).then(console.log(this.state.dataSource))
     .catch (error =>{
      if(error=='Network request failed'){
        this.setState({
          networkError:true
        })
      } 
      console.log(error)})
   
     
    //Record
    


  }


  getVerse = async (recordId, data) =>{

    await  fetch(`https://otrojjah-api.herokuapp.com/api/verse?ruleId=${recordId}`)
    .then((response)=> response.json())
 //   .then((response)=> console.log(response))
    .then((response)=>{

      this.setState({
        versesToShow:response[0].name,
       verseIdToSend:response[0]._id,
       responeZero:response[0],
       data:data
      })
      console.log('this is the seconed fetch')
      this.checkRecords(data)
      console.log(response)
      
    })
    .catch (error => {
      if(error=='Network request failed'){
        this.setState({
          networkError:true
        })
      }
      console.log(error)})
  }


chooseSH=async(item)=>{
  this.setState({
    shName:item
  })
  this.getRecord(this.state.responeZero,this.state.data)
}


checkRecords=async(data)=>{
  await  fetch(`https://otrojjah-api.herokuapp.com/api/record?verseId=${this.state.responeZero._id}`)
  .then((response)=> response.json())
  .then(responseJson=>{
    if(responseJson.length==0){
      data.fileURL = 'none';
      const index = this.state.dataSource.findIndex(
        item => data._id === item._id
      );
   
      this.state.dataSource[index] = data;
   
      this.setState({
        dataSource: this.state.dataSource,
      });
    }
  }).catch(error=>{console.log(error)})
}

getRecord = async (recordId,data) =>{
 
  await  fetch(`https://otrojjah-api.herokuapp.com/api/record?verseId=${recordId._id}`)
  .then((response)=> response.json())
//   .then((response)=> console.log(response))
  .then( responseJson => {
    
     if(responseJson.length==0){
       data.fileURL = 'none';
       const index = this.state.dataSource.findIndex(
         item => data._id === item._id
       );
    
       this.state.dataSource[index] = data;
    
       this.setState({
         dataSource: this.state.dataSource,
       });
     }
     else{
      var sheikh =responseJson
      var shName = this.state.shName
      var filteredArray = sheikh.filter(function(itm){
        return shName.indexOf(itm.label) > -1;
      });
      filteredArray =  filteredArray ;
      console.log('filtered', filteredArray)
     if (filteredArray[0].label==shName){
      data.fileURL = filteredArray[0].fileURL;

     }else{
     data.fileURL = filteredArray[1].fileURL;
     }
     const index = this.state.dataSource.findIndex(
       item => data._id === item._id
     );
  
     this.state.dataSource[index] = data;
  
     this.setState({
       dataSource: this.state.dataSource,
     });
   }


   

     

    console.log('this is the third fetch',filteredArray)
   
    console.log(responseJson.length)
    })
  .catch (error => {
    if(error=='Network request failed'){
      this.setState({
        networkError:true
      })
    }
    console.log(error)})

}



  selectItem = data => {
    console.log(data.parentId)
    
//to close other tabs when opening a new tab
    var newData = this.state.dataSource.map((item) => {
      return {...item, isSelect: false}
      })
      this.state.dataSource = newData
this.setState({
  dataSource:  this.state.dataSource,
  versesToShow:[],
  verseIdToSend:'',
  shName:''
})

//////

   this.getVerse(data._id, data)
    data.isSelect = !data.isSelect;
   
  
    const index = this.state.dataSource.findIndex(
      item => data.name === item.name
    );
  
    this.state.dataSource[index] = data;
  
    this.setState({
      dataSource: this.state.dataSource,
    });
  };

  addingNewKey= async(dataSource)=>{
    var result = await dataSource.map(function(o) {
      o.opened = false;
      return o;
    })
    
   await this.setState({
     dataSource:result
      
    })
  }




  openPanel = () => {
    this.setState({swipeablePanelActive: true});
  };

  closePanel = () => {
    this.setState({swipeablePanelActive: false});
  };
  render() {

    viewButtons= ()=>{
      return(
        <View style={{flexDirection:'row', justifyContent:'space-around', marginVertical:10}}> 
        <TouchableOpacity  onPress={this.sendRecord}>
        <Text style={{color:'white', textAlign:'center', backgroundColor:'#c28f48',borderRadius: 50, width:150, fontSize:20 ,alignSelf:'flex-start'}}>إرسل التسجيل</Text>

        </TouchableOpacity>
      
        <TouchableOpacity onPress={() => this.setState({hasRecord: false})}>
        <Text style={{color:'white', textAlign:'center', backgroundColor:'#c28f48',borderRadius: 50, width:150, fontSize:20 ,alignSelf:'flex-start'}}>إمسح التسجيل</Text>
        </TouchableOpacity>
     
        </View> 
        ); 
         }



    return (
      <ImageBackground
        source={require('_assets/images/islamic.jpg')}
        style={{
          width: '100%',
          height: '100%',
          opacity: 100,
        }}>
       
             
          <View >
         
              
          <View >
                    {/* <ScrollView>
                    <Text>{this.state.description}</Text>               
                    </ScrollView>  */}
                  
                 <View style={{  width: '100%', height: '100%',}}>   
                   <TouchableOpacity onPress={()=>this.setState({showText:!this.state.showText})}>
                     <Text style={{textAlign:'center', backgroundColor:'#c28f48', fontSize:20, margin:10, color:'white',fontFamily: 'a-jannat-lt',borderRadius:30}}>شرح حكم الإظهار الشفوي</Text>
                   </TouchableOpacity>  
                    
                 
                 {this.state.showText &&
                  <View style={{ margin:10,borderRadius:25,backgroundColor:'#243c49'}}>
                    <TouchableOpacity onPress={()=>this.setState({showText:!this.state.showText})}>
                 <Text style={{textAlign:'left', fontSize:20,margin:10,color:'#faeed7'}}>x</Text>
                 </TouchableOpacity>
               <ScrollView>
              <Text style={{margin:10, color:'#faeed7'}}>{this.state.description}</Text>
              <Text>...</Text>
              <Text>...</Text>
              <Text>...</Text>
              <Text>...</Text>
              </ScrollView> 
                  </View>
                 }
            <FlatList
              extraData={this.state}
              data={this.state.dataSource}
              renderItem={({item}) => (
                <View style={{flex: 1, }}>

                <View>


                  <View
                    style={{
                      flex: 1,
                     // flexDirection: 'column',
                      backgroundColor: '#faeed7',
                      borderWidth:1,
                      borderColor:'black',
                      borderRadius: 30,
                      margin:10,
                      
                    }}>

                    
                       <TouchableOpacity    onPress={() => this.selectItem(item)}>
                      <Text style={{marginBottom: 10,fontSize:18, textAlign:'center', fontFamily: 'a-jannat-lt',}}>{item.name}</Text>
                      </TouchableOpacity>  
                 {item.isSelect &&     <View style={{flex: 0.25}}>
               
                      
                          <TouchableOpacity >
                           <Text style={{textAlign:'center',fontFamily: 'Al-QuranAlKareem', fontSize:20}}>{this.state.versesToShow}</Text>  
                          </TouchableOpacity>
                   {item.isSelect && this.state.shName ==''&& item.fileURL!='none'&&
                   <View style={{alignItems:'center'}}>
                <Text style={{textAlign:'center',fontFamily: 'a-jannat-lt', fontSize:20}}>اختر صوت الشيخ</Text>  

                   <TouchableOpacity onPress={()=>this.chooseSH('عبد الباسط مجود')}>
                    <Text style={{textAlign:'center',marginVertical:3, color:'white', width:150, borderRadius:50,backgroundColor:'#011325',fontFamily: 'Al-QuranAlKareem', fontSize:20}}>عبد الباسط مجود</Text>  
                   </TouchableOpacity>
                   <TouchableOpacity  onPress={()=>this.chooseSH('مشارى')}>
                    <Text style={{textAlign:'center',marginVertical:3,color:'white', width:150, borderRadius:50,backgroundColor:'#011325',fontFamily: 'Al-QuranAlKareem', fontSize:20}}>مشارى</Text>  
                   </TouchableOpacity>
                   <TouchableOpacity  onPress={()=>this.chooseSH('الحصري')}>
                    <Text style={{textAlign:'center',marginVertical:3,color:'white', width:150, borderRadius:50,backgroundColor:'#011325',fontFamily: 'Al-QuranAlKareem', fontSize:20}}>الحصري</Text>  
                   </TouchableOpacity>
                   <TouchableOpacity onPress={()=>this.chooseSH('عبد الباسط')} >
                    <Text style={{textAlign:'center',marginVertical:3,color:'white', width:150, borderRadius:50,backgroundColor:'#011325',fontFamily: 'Al-QuranAlKareem', fontSize:20}}>عبد الباسط</Text>  
                   </TouchableOpacity>
                   <TouchableOpacity  onPress={()=>this.chooseSH('المنشاوى')}>
                    <Text style={{textAlign:'center',marginVertical:3,color:'white', width:150, borderRadius:50,backgroundColor:'#011325',fontFamily: 'Al-QuranAlKareem', fontSize:20}}>المنشاوى</Text>  
                   </TouchableOpacity>
                   <TouchableOpacity  onPress={()=>this.chooseSH('محمود البنا')}>
                    <Text style={{textAlign:'center',marginVertical:3,color:'white', width:150, borderRadius:50,backgroundColor:'#011325',fontFamily: 'Al-QuranAlKareem', fontSize:20}}>محمود البنا</Text>  
                   </TouchableOpacity>
                   <TouchableOpacity  onPress={()=>this.chooseSH(' المنشاوى مجود')}>
                    <Text style={{textAlign:'center',marginVertical:3,color:'white', width:150, borderRadius:50,backgroundColor:'#011325',fontFamily: 'Al-QuranAlKareem', fontSize:20}}>المنشاوي مجود</Text>  
                   </TouchableOpacity>
                   <TouchableOpacity  onPress={()=>this.chooseSH('الحصري مجود')}>
                    <Text style={{textAlign:'center',marginVertical:3,color:'white', width:150, borderRadius:50,backgroundColor:'#011325',fontFamily: 'Al-QuranAlKareem', fontSize:20}}>الحصري مجود</Text>  
                   </TouchableOpacity>
                   </View>
                   }

                     

                      {item.isSelect &&item.fileURL &&item.fileURL!='none' &&<PlayerScreen filepath={item.fileURL} />}
                      {item.isSelect && item.fileURL=='none'  && <Text style={{fontFamily: 'a-jannat-lt', alignSelf:'center', color:'red'}}>لا يوجد تسجيلات لهذا بعد</Text>}

                      { !this.state.working && item.fileURL&& item.fileURL!='none' &&
                              <TouchableOpacity 
                            onPress={this.startRecord} 
                            style={{justifyContent:'center', alignItems:'center'}}
                            >
                          
                          <Image  style={{width:75, height:75, }}
                          source={require('_assets/images/rec.png')}/>
                            
                          </TouchableOpacity>  
                      }
                       { this.state.working && item.fileURL&& item.fileURL!='none' &&
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
             
             
             
             
             }
                
                  </View>
                    {/* overlay */}
                
                  </View> 
                               
       
                </View>
              )}
            />

             

                </View>  
  
                
          </View>
        </View>
      </ImageBackground>
    );
  }
}

export default Ekhfaa;
