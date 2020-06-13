import PlayerScreen from 'react-native-sound-playerview';
import React, {Component} from 'react';
import {View, Button, AsyncStorage, Text, ImageBackground, TouchableOpacity ,ActivityIndicator} from 'react-native';
//import {Button} from 'react-native-elements';
//import Icon from 'react-native-vector-icons/FontAwesome';
import axios from 'axios';


class Validate extends Component {
  constructor(props) {
    super(props);
    this.state = {label: false, link: '', id: '', verse:'',verseId:'' ,verseName:'',ruleId:'',subhokm:'',parentId:'',hokm:'',first:true};
  }
  trueRecord = async () => {
    const jwt = await AsyncStorage.getItem('token')

    await this.setState({label: true});
    //alert(this.state.id);
    axios
      .put(`https://otrojjah-api.herokuapp.com/api/record/label/${this.state.id}`, {label:"true"} ,{ headers: { "x-auth-token": jwt } })
      .then(response => {
        console.log(response.data);
      })
      .catch(error => console.log(error.response.data));

      this.getRecord()

  };
  falseRecord = async () => {
    const jwt = await AsyncStorage.getItem('token')
    console.log(jwt)
    await this.setState({label: false});
    //alert(this.state.id);

    axios
      .put(`https://otrojjah-api.herokuapp.com/api/record/label/${this.state.id}`, {label:"false"} ,{ headers: { "x-auth-token": jwt } })
      .then(response => {
        console.log(response.data);
      })
      .catch(error => console.log(error.response.data));

      this.getRecord()

  };
  getRecord = async () => {
   this.setState({link:''})
   const jwt = AsyncStorage.getItem('jwt')

    axios
      .get('https://otrojjah-api.herokuapp.com/api/record/random/client',
      {
        headers: { "x-auth-token": jwt }
      })
      .then(response => {
        console.log('this is the response', response);
        this.setState({
          link: response.data.fileURL,
          id: response.data._id,
          verse: response.data.label,
          verseId: response.data.verseId

        });
       console.log('validate',response) 
      }).then(()=>{
      




      axios
      .get(`https://otrojjah-api.herokuapp.com/api/verse?id=${this.state.verseId}`,
      {
        headers: { "x-auth-token": jwt }
      })
      .then(response => {
        console.log('this is the response', response);
        this.setState({
        verseName: response.data[0].surah,
        ruleId:response.data[0].ruleId 

        });
       console.log('versssssss',response) 
      }).then(()=>{


        axios
        .get(`https://otrojjah-api.herokuapp.com/api/rule?id=${this.state.ruleId}`,
        {
          headers: { "x-auth-token": jwt }
        })
        .then(response => {
          console.log('this is the response', response);
          this.setState({
          subhokm: response.data[0].name,
          parentId:response.data[0].parentId, 
  
          });
         console.log('hoooookm',response) 
        }).then(()=>{


          axios
          .get(`https://otrojjah-api.herokuapp.com/api/rule?id=${this.state.parentId}`,
          {
            headers: { "x-auth-token": jwt }
          })
          .then(response => {
            console.log('this is the response', response);
            this.setState({
            hokm: response.data[0].name 
    
            });
           console.log('hoooookm',response) 
          })
          .catch(error => alert(error.response.data));
            }
        )
        .catch(error => alert(error.response.data));
          }
      )
      .catch(error => alert(error.response.data));
        }
      )

      .catch(error => alert(error.response.data));



  };
  signOut=async()=>{
   const value= await AsyncStorage.setItem('isLoggedIn', 'null'); 
   this.props.navigation.navigate('Login')


    
   // this.props.navigation.navigate('Home');

  }
  render() {
    if(this.state.first== true){
    this.getRecord()
    this.setState({
      first:false
    })
    }
    return (
         <ImageBackground
        source={require('_assets/images/random.jpg')}
        style={{
          width: '100%',
          height: '100%',
      
        }}>

      <View>
      <TouchableOpacity onPress={this.signOut}  style={{alignSelf:'flex-start'}}>
            <Text style={{color:'white', fontFamily: 'a-jannat-lt', textAlign:'center', backgroundColor:'#c28f48',borderRadius: 50, width:100, alignSelf:'center'}}>تسجيل الخروج</Text>
            </TouchableOpacity>

      </View>

      <View
        style={{
          flex: 1,
          justifyContent: 'space-between',
        }}>
      { this.state.link != '' && <PlayerScreen filepath={this.state.link} />}
      { this.state.link != '' &&
      <View style={{backgroundColor:'white',width:250, alignSelf:'center',borderRadius:50, flexDirection:'row',justifyContent:'space-between'}}>
      <Text style={{textAlign:'center',fontFamily: 'a-jannat-lt',  width:150, borderRadius:50, alignSelf:'center'}}>{this.state.verse}</Text> 
      <Text style={{textAlign:'center', fontFamily: 'a-jannat-lt',padding:1,backgroundColor:'#243c49', width:100, borderRadius:50, color:'white'}}>الآية</Text>
      </View>
        }
        { this.state.link != '' &&
      <View style={{backgroundColor:'white',width:250, alignSelf:'center',borderRadius:50, flexDirection:'row',justifyContent:'space-between'}}>
      <Text style={{textAlign:'center',fontFamily: 'a-jannat-lt',  width:150, borderRadius:50, alignSelf:'center'}}>{this.state.verseName}</Text> 
      <Text style={{textAlign:'center', fontFamily: 'a-jannat-lt',padding:1,backgroundColor:'#243c49', width:100, borderRadius:50, color:'white'}}>السورة</Text>
      </View>
        }
         { this.state.link != '' &&
      <View style={{backgroundColor:'white',width:250, alignSelf:'center',borderRadius:50, flexDirection:'row',justifyContent:'space-between'}}>
      <Text style={{textAlign:'center',fontFamily: 'a-jannat-lt',  width:150, borderRadius:50, alignSelf:'center'}}>{this.state.subhokm}</Text> 
      <Text style={{textAlign:'center', fontFamily: 'a-jannat-lt',padding:1,backgroundColor:'#243c49', width:100, borderRadius:50, color:'white'}}>الحكم المفصل</Text>
      </View>
        }
{ this.state.link != '' &&
      <View style={{backgroundColor:'white',width:250, alignSelf:'center',borderRadius:50, flexDirection:'row',justifyContent:'space-between'}}>
      <Text style={{textAlign:'center',fontFamily: 'a-jannat-lt',  width:150, borderRadius:50, alignSelf:'center'}}>{this.state.hokm}</Text> 
      <Text style={{textAlign:'center', fontFamily: 'a-jannat-lt',padding:1,backgroundColor:'#243c49', width:100, borderRadius:50, color:'white'}}>الحكم</Text>
      </View>
        }
        <View
          style={{
            flex: 0.5,
            flexDirection: 'column',
            justifyContent: 'space-evenly',
            marginBottom: 10,
            marginTop: 10,
            marginLeft: 10,
            marginRight: 10,
            
          }}>

           {this.state.link !='' &&
           <View style={{flexDirection: 'row', justifyContent: 'space-between' }}>
            <TouchableOpacity onPress={this.trueRecord}>
            <Text style={{color:'white', textAlign:'center',fontFamily: 'a-jannat-lt', backgroundColor:'#c28f48',borderRadius: 50, width:100,fontSize:20 ,alignSelf:'flex-end'}}>صحيح</Text>
            </TouchableOpacity>
    

            <TouchableOpacity onPress={this.falseRecord}>
            <Text style={{color:'white', textAlign:'center', fontFamily: 'a-jannat-lt',backgroundColor:'#c28f48',borderRadius: 50, width:100, fontSize:20 ,alignSelf:'flex-start'}}>خطأ</Text>
            </TouchableOpacity>
            </View>
             }

          {this.state.link==''&& 
            <ActivityIndicator size="large" color='#243c49' />
          }

         
        </View>
      </View>
         </ImageBackground>
    );
  }
}

export default Validate;
