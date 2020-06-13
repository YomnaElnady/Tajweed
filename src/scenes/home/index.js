import React from 'react';
import {Text, View, ImageBackground, TouchableOpacity, StyleSheet, FlatList, Button,TextInput, ScrollView} from 'react-native';
import {
  Collapse,
  CollapseHeader,
  CollapseBody,
} from 'accordion-collapse-react-native';
import {ListItem, Separator} from 'native-base';
import { SafeAreaView } from 'react-navigation';
import { List } from '@ui-kitten/components';
import { CheckBox } from 'react-native-elements'

//import { ScrollView } from 'react-native-gesture-handler';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      networkError:false,
      dataSource:[{ description:'وده شرح الحكم'}],
      dataSource1:[],
      dataSource2:[],
      showText1:false,
      showText2:false,
      showText3:false,
      description1:'',
      description2:'',
      description3:'',
      Ahkam: [{
      name:  'الإظهار',
      description:'',
      },
      {name:  'الإدغام',}
       
      ],

      show1:false,
      show2:false,
      show3:false,
      first:false
    };
  }
  componentDidMount= async()=> {
   // this.fetchHokm('5e7b449b64a37600171db103');
    //this.fetchHokm('5e7b449b64a37600171db104');
    //this.fetchHokm('5e7b449b64a37600171db105');
  //  this.fetchHokm('5e7b449b64a37600171db106');

  await  fetch('https://otrojjah-api.herokuapp.com/api/rule?parentId=5e7b43e564a37600171db101')
     .then((response)=> response.json())
  //   .then((response)=> console.log(response))
     .then((response)=>{
       this.setState({
         isLoading:false,
         dataSource: response,
         
         
       })
       console.log(this.state.dataSource)
       console.log(response)
     }).then(console.log(this.state.dataSource))
     .catch (error => {
       if(error='Network request failed'){
         this.setState({
           networkError:true
         })
       }
      console.log(error)
    
    })

     await  fetch('https://otrojjah-api.herokuapp.com/api/rule?parentId=5e7b442c64a37600171db102')
     .then((response)=> response.json())
  //   .then((response)=> console.log(response))
     .then((response)=>{
       this.setState({
         isLoading:false,
         dataSource1: response,
         
         
       })
       console.log(this.state.dataSource)
       console.log(response)
     }).then(console.log(this.state.dataSource))
     .catch (error => console.log(error))
     await  fetch('https://otrojjah-api.herokuapp.com/api/rule?parentId=5e8256cd331ad5001725d64d')
     .then((response)=> response.json())
  //   .then((response)=> console.log(response))
     .then((response)=>{
       this.setState({
         isLoading:false,
         dataSource2: response,
         
         
       })
       console.log(this.state.dataSource)
       console.log(response)
     }).then(console.log(this.state.dataSource))
     .catch (error => console.log(error))


  await  fetch('https://otrojjah-api.herokuapp.com/api/rule?id=5e7b43e564a37600171db101')
     .then((response)=> response.json())
  //   .then((response)=> console.log(response))
     .then((response)=>{
       this.setState({
         isLoading:false,
         description1: response[0].description,
         
         
       })
       console.log(this.state.dataSource)
       console.log(response)
     }).then(console.log(this.state.dataSource))
     .catch (error => console.log(error))

 await  fetch('https://otrojjah-api.herokuapp.com/api/rule?id=5e7b442c64a37600171db102')
     .then((response)=> response.json())
  //   .then((response)=> console.log(response))
     .then((response)=>{
       this.setState({
         isLoading:false,
         description2: response[0].description,
         
         
       })
       console.log(this.state.dataSource)
       console.log(response)
     }).then(console.log(this.state.dataSource))
     .catch (error => console.log(error))

   await  fetch('https://otrojjah-api.herokuapp.com/api/rule?id=5e8256cd331ad5001725d64d')
     .then((response)=> response.json())
  //   .then((response)=> console.log(response))
     .then((response)=>{
       this.setState({
         isLoading:false,
         description3: response[0].description,
         
         
       })
       console.log(this.state.dataSource)
       console.log(response)
     }).then(console.log(this.state.dataSource))
     .catch (error => console.log(error))

    
  }
  navigate=(id)=>{
    
      if(id=='5e7b449b64a37600171db103'){
        this.props.navigation.navigate('Ekhfaa')
      }
      else if (id =='5e7b44b664a37600171db104'){
        this.props.navigation.navigate('Edgham')

      }
      else if(id=='5e7b44e064a37600171db105'){
        this.props.navigation.navigate('Eqlab')
      }
      else if (id=='5e7b450d64a37600171db106'){
        this.props.navigation.navigate('Ethhar')

      }else if (id=='5e7b7b1064a37600171db177'){
        this.props.navigation.navigate('EkhfaaShafawy')

      }else if (id=='5e7b7b3864a37600171db178'){
        this.props.navigation.navigate('EdghamShafawy')

      }else if(id=='5e7b7b5464a37600171db179'){
        this.props.navigation.navigate('EthharShafawy')

      }else if (id=='5e8256e9331ad5001725d64e'){
        this.props.navigation.navigate('Almad')

      }
      
      else{
        console.log(id)
      }
  }
  show1=()=>{
    
    this.setState({show1:!this.state.show1})
  }
  show2=()=>{
    
    this.setState({show2:!this.state.show2})
  }
  show3=()=>{
    
    this.setState({show3:!this.state.show3})
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

          {this.state.first==false &&
          <View>
                             {this.state.showText1 && 
                                <View style={{height:'100%', flexGrow:2, margin:10,borderRadius:25,backgroundColor:'#243c49'}}>
                                  <TouchableOpacity onPress={()=>this.setState({showText1:!this.state.showText1})}>
                              <Text style={{textAlign:'left', fontSize:20,margin:10, color:'#faeed7'}}>x</Text>
                              </TouchableOpacity>
                              <SafeAreaView>
                            <ScrollView>                            
                            <Text style={styles.descriptionStyle}>{this.state.description1}</Text>
                            <Text>...</Text>
                            <Text>...</Text>
                            <Text>...</Text>
                            <Text>...</Text>
                            <Text>...</Text>
                            <Text>...</Text>
                            <Text>...</Text>
                            <Text>...</Text>
                             <Text>...</Text>
                            <Text>...</Text>
                            <Text>...</Text>
                            <Text>...</Text>
                            <Text>...</Text>
                            <Text>...</Text>
                              <Text>...</Text>
                            <Text>...</Text>
                              <Text>...</Text>
                            <Text>...</Text>
                            <Text>...</Text>
                            <Text>...</Text>
                            <Text>...</Text>
                            <Text>...</Text>
                            <Text>...</Text>
                            <Text>...</Text>
                             <Text>...</Text>
                           
                            </ScrollView> 
                            </SafeAreaView>
                                </View>
                              }
                              
                   {this.state.showText2 &&
                                <View style={{height:'100%', margin:10,borderRadius:25,backgroundColor:'#243c49'}}>
                                  <TouchableOpacity onPress={()=>this.setState({showText2:!this.state.showText2})}>
                              <Text style={{textAlign:'left', fontSize:20,margin:10}}>x</Text>
                              </TouchableOpacity>
                           <ScrollView>
                            <Text style={styles.descriptionStyle}>{this.state.description2}</Text>
                          <Text>...</Text>
                            <Text>...</Text>
                            <Text>...</Text>
                            <Text>...</Text>
                            <Text>...</Text>
                            <Text>...</Text>
                            <Text>...</Text>
                            <Text>...</Text>
                            <Text>...</Text>
                             <Text>...</Text>
                            <Text>...</Text>
                            <Text>...</Text>
                            <Text>...</Text>
                            <Text>...</Text>
                            <Text>...</Text>
                              <Text>...</Text>
                            <Text>...</Text>
                            </ScrollView>
                                </View>
                              }
                              
                   {this.state.showText3 && 
                                <View style={{height:'100%', margin:10,borderRadius:25,backgroundColor:'#243c49'}}>
                                  <TouchableOpacity onPress={()=>this.setState({showText3:!this.state.showText3})}>
                              <Text style={{textAlign:'left', fontSize:20,margin:10}}>x</Text>
                              </TouchableOpacity>
                            <ScrollView>
                            <Text style={styles.descriptionStyle}>{this.state.description3}</Text>
                            <Text>...</Text>
                            <Text>...</Text>
                            <Text>...</Text>
                            <Text>...</Text>
                            <Text>...</Text>
                            <Text>...</Text>
                            <Text>...</Text>
                            <Text>...</Text>
                            <Text>...</Text>
                             <Text>...</Text>
                            <Text>...</Text>
                            <Text>...</Text>
                            <Text>...</Text>
                            <Text>...</Text>
                            <Text>...</Text>
                              <Text>...</Text>
                            <Text>...</Text>
                           
                            </ScrollView> 
                                </View>
                              }
            
                  <View style={{marginTop:20}}>
               <ScrollView>
              <Collapse>
                       
                <CollapseHeader style={styles.collapseHeader}>
                
                  
                    <Text style={{textAlign:'center',color:'#faeed7',fontSize:20, fontFamily: 'a-jannat-lt'}}>النون الساكنة والتنوين</Text>
                
               
                </CollapseHeader>
                
                <CollapseBody>
               


                  <ListItem style={{alignContent:'center', alignItems:'center', alignSelf:'center'}} >
                   <View  >
                   <SafeAreaView>
                   <TouchableOpacity  onPress={()=>this.setState({showText1:!this.state.showText1})}>
                        <Text style={{borderRadius:25,fontFamily: 'a-jannat-lt',padding:5,alignContent:'center',backgroundColor:'#c28f48',color:'#efede8' ,alignItems:'center'}} >شرح النون الساكنة والتنوين</Text>  
                   </TouchableOpacity> 
                  
                   <FlatList
                    
                      data={this.state.dataSource}
                      extraData={this.state}
                     // renderItem={this._renderItem} 
                      keyExtractor={(item,index) => index.toString()}   
                      renderItem={({item}) => (
                         <View style={{flex: 1, alignItems:"center", alignContent:'center'}}>
                         <TouchableOpacity onPress={()=> this.navigate(item._id)}>
                          <Text style={{textAlign:'center',width:150,backgroundColor:'#faeed7', borderRadius:25 ,fontSize:20,borderWidth:1, padding:5 ,borderColor:'#333333',fontFamily: 'a-jannat-lt'}}>{item.name}</Text>
                          </TouchableOpacity>  

                             </View>
                      )}
                   
                   />
                   </SafeAreaView> 
                   </View>
                  </ListItem>
                 </CollapseBody>

              </Collapse>
              <Collapse>
              <CollapseHeader  style={styles.collapseHeader}>
                    <Text style={{textAlign:'center', color:'#faeed7',fontSize:20,fontFamily: 'a-jannat-lt'}}>الميم الساكنة</Text>
                </CollapseHeader>
                <CollapseBody>
                <ListItem style={{alignContent:'center', alignItems:'center', alignSelf:'center'}} >
                  <View>
                  <TouchableOpacity  onPress={()=>this.setState({showText2:!this.state.showText2})}>
                        <Text style={{borderRadius:25,padding:5,alignContent:'center',backgroundColor:'#c28f48',color:'#efede8' ,textAlign:'center',fontFamily: 'a-jannat-lt'}} >شرح الميم الساكنة</Text>  
                   </TouchableOpacity> 
                  <FlatList
                     data={this.state.dataSource1}
                     extraData={this.state}
                    // renderItem={this._renderItem} 
                     keyExtractor={(item,index) => index.toString()}   
                     renderItem={({item}) => (
                        <View style={{flex: 1, flexDirection: 'row-reverse'}}>
                          <TouchableOpacity onPress={()=> this.navigate(item._id)}>
                         <Text style={{textAlign:'center',width:150,backgroundColor:'#faeed7', borderRadius:25 ,fontSize:20,borderWidth:1, padding:5 ,borderColor:'#333333',fontFamily: 'a-jannat-lt'}}>{item.name}</Text>
                          </TouchableOpacity>

                            </View>
                     )}
                  
                  />
                  </View>
                  </ListItem>
                </CollapseBody>
              </Collapse>
              <Collapse>
              <CollapseHeader style={styles.collapseHeader}>
                    <Text style={{textAlign:'center', color:'#faeed7',fontSize:20,fontFamily: 'a-jannat-lt'}}>المد والقصر</Text>
                </CollapseHeader>
                <CollapseBody>
                <ListItem style={{alignContent:'center', alignItems:'center', alignSelf:'center'}} >
                  <View>
                  <TouchableOpacity  onPress={()=>this.setState({showText3:!this.state.showText3})}>
                        <Text style={{borderRadius:25,padding:5,width:150,alignContent:'center',backgroundColor:'#c28f48',color:'#efede8' ,textAlign:'center',fontFamily: 'a-jannat-lt'}} >شرح المد والقصر </Text>  
                   </TouchableOpacity> 
                  <FlatList
                      contentContainerStyle={{flexGrow: 1}}

                     data={this.state.dataSource2}
                     extraData={this.state}
                    // renderItem={this._renderItem} 
                     keyExtractor={(item,index) => index.toString()}   
                     renderItem={({item}) => (
                        <View style={{flexGrow: 1,alignItems:'center', alignContent:'center'}}>
                          <TouchableOpacity onPress={()=> this.navigate(item._id)}> 
                         <Text style={{textAlign:'center',width:150,backgroundColor:'#faeed7', borderRadius:25 ,fontSize:20,borderWidth:1, padding:5 ,borderColor:'#333333',fontFamily: 'a-jannat-lt'}}>{item.name}</Text>
                         </TouchableOpacity>  


                            </View>
                     )}
                  
                  />
                  </View>
                  </ListItem>
                </CollapseBody>
              </Collapse>
              </ScrollView>  
            </View>
               
            </View> 
                }
                      
          {this.state.networkError==true && 
         
             <View>
               <Text style={{color:'red',fontSize:30,fontFamily:'a-jannat-lt', textAlign:'center'}}>يوجد مشكلة في الإتصال بالإنترنت</Text>
           
             </View>
          }
      
             
        </View>
    
      </ImageBackground>
    );
  }
}
const styles = StyleSheet.create({
  
  hokm: {
    fontSize: 30,
    paddingBottom: 10,
    color:'black',
    fontFamily: 'a-jannat-lt'
  },
  subHokm: {
    fontSize: 20,
    paddingBottom: 10,
  },
  descriptionStyle:{
    fontSize:16,
    textAlign:'center',
    color:'#faeed7',
    fontFamily: 'a-jannat-lt'


  },
collapseHeader:{
  backgroundColor:'#243c49',
  padding:10,
  marginBottom:5 ,
  borderRadius :25,
   width:'75%',
   alignSelf:'center',
   borderColor:'#faeed7',
   borderWidth:1
},
itemName:{
  textAlign:"center",
  backgroundColor:'#faeed7',
   borderRadius:25 ,
   fontSize:20,
   borderWidth:1, 
   padding:5 ,
   borderColor:'#333333'}
 
  
});
export default Home;
