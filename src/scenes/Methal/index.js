import React ,{Component}from 'react';
import {View,Text,  FlatList,
Image,Alert} from 'react-native';
import {AudioRecorder, AudioUtils} from 'react-native-audio';


let audioPath = AudioUtils.DocumentDirectoryPath + '/test.aac';
AudioRecorder.prepareRecordingAtPath(audioPath, {
  SampleRate: 22050,
  Channels: 1,
  AudioQuality: "Low",
  AudioEncoding: "aac"
});

class Home extends Component{
  constructor()
  {
    super();
    this.state={
      FlatListItems:[
      {key: '1مثال ',category:''}
          ],

    }
  
  }
  GetItem (item) {
    this.props.navigation.navigate('Methal');

    Alert.alert(item);
   
    }

    
    FlatListItemSeparator = () => {
      return (
        <View
          style={{
            height: 5,
            width: "100%",
            backgroundColor: "#129D9B",
          }}
        />
      );
    }



  render(){
    return (
      <View style={{justifyContent: 'center',
      flex:1,
      margin: 10
      }}>
         <View style={{flex:1,flexDirection:'row', backgroundColor: 'black'}} >
       
  
       </View>
         <FlatList
         
            data={ this.state.FlatListItems }
            
            ItemSeparatorComponent = {this.FlatListItemSeparator}
   
            renderItem={({item}) => 
            
           <View style={{flex:1, flexDirection:'row' }}>
             <Image  source = {{uri:item.ImageUri}} 
            style={{width:0,height:100,margin:5}} 
             /> 
           <View style={{flex:1,flexDirection:'row', backgroundColor: ''}} >
           <Text onPress={this.GetItem.bind(this, item.key)} > {item.key} </Text> 
           <Text  onPress={this.GetItem.bind(this, item.category)} > {item.category} </Text>
  
  
           </View>
           </View>
          }
         />
      
      
  </View>
     
  
     ) ;  
  }
}

export default Home;