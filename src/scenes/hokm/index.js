import React ,{Component}from 'react';
import {View,Text,  FlatList,
Image,Alert} from 'react-native';

class Home extends Component{
  constructor()
  {
    super();
    this.state={
      FlatListItems:[
      {key: '1مثال ',category:''},
      {key: '2مثال ',ImageUri:"https://i.ytimg.com/vi/3Y1J6zWSEtU/hqdefault.jpg",category:''},
      {key: 'مثال3 ',ImageUri:"https://media.mnn.com/assets/images/2018/08/grilled_salmon.jpg.653x0_q80_crop-smart.jpg",category:''},
      {key: 'مثال4',ImageUri:"https://media-cdn.tripadvisor.com/media/photo-s/0d/1e/10/55/harvest-kale-grilled.jpg",category:''},
      {key: 'مثال5',ImageUri:"https://assets.epicurious.com/photos/57bb35cdb6069b112362e097/2:1/w_1260%2Ch_630/pan-grilled-steak.jpg",category:' '}
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