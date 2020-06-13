import React, {Component} from 'react';
import {
  SafeAreaView,
  ImageBackground,
  Text,
ActivityIndicator,
  AsyncStorage,
  View,
  TextInput,
  Alert,
  TouchableOpacity,

} from 'react-native';
import axios from 'axios';

class Welcome extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstTime:false,
      email:'',
      password:'',
      userName:'',
      isLoading: false,
    };
  }

 async componentDidMount () {
   const firstTime= await AsyncStorage.getItem('firstTime')
    if(firstTime != 'false'){
        this.setState({
          firstTime:true
        })
    }else{

    setTimeout(() => {
      
      this.props.navigation.navigate('Home');
    }, 30);
  }
  }

  render() {

    login =()=>{
      this.setState({
        isLoading:true
      })
      axios
      .post("https://otrojjah-api.herokuapp.com/api/auth", {
     //  name:this.state.userName,  
      email: this.state.email ,
      password: this.state.password
      })

      
   
     .then(async (response) =>{ 
      this.setState({
        isLoading:false
      })
     
       console.log(response.data)
       const jwt = await AsyncStorage.setItem('userJWT',response.data)
       const value=  await AsyncStorage.setItem('firstTime', 'false')
       const value2 = await AsyncStorage.getItem('firstTime')
       console.log(response)

    }).then(async()=>{
        jwt = await AsyncStorage.getItem('userJWT')
      if (jwt!=''){
        this.props.navigation.navigate('Home');

      }
      })
    .catch((error)=> {
      this.setState({
        isLoading:false
      })

      if (error.response.data == 'Invalid email or password.'){
     Alert.alert('الإيميل او كلمة السر خطأ')
     
    }else if (error.response.data == '"email" must be a valid email'){
      Alert.alert('البريد الإلكتروني غير صحيح')
    }else{
      alert(error.response.data)
    }
    });
    }
    register=()=>{
      this.setState({
        isLoading:true
      })
      axios
      .post("https://otrojjah-api.herokuapp.com/api/user", {
      name:this.state.userName,
      email: this.state.email ,
      password: this.state.password
      })

      
   
     .then(async()=>{
      this.setState({
        isLoading:false
      })
        jwt = await AsyncStorage.getItem('userJWT')
      if (jwt!=''){
        login()
      }
      })
    .catch((error)=> {
      console.log(error)
      this.setState({
        isLoading:false
      })
      if (error.response.data == 'Invalid email or password.'){
     Alert.alert('الإيميل او كلمة السر خطأ')
     
    }else{
      Alert.alert(error.response.data)
    }
    });
    }




    return (
      <View>
      {this.state.firstTime ==false &&
      <View >
      <SafeAreaView>
        <ImageBackground
          source={require('_assets/images/islamicintro.jpg')}
          style={{
            width: '100%',
            height: '100%',
          }}>
            <View></View>
          </ImageBackground>
      </SafeAreaView>
      </View>
  }
  {this.state.firstTime ==true && this.state.isLoading==false&&
  <ImageBackground
  source={require('_assets/images/login.jpg')}
  style={{
    width: '100%',
    height: '100%',
  }}>
   <View style={{flex:1}}></View>
  <View
    style={{
      flex:1,
      justifyContent: 'center',
    }}>


        <Text style={{color:'#011325',borderWidth:1 ,textAlign:'center', backgroundColor:'#faeed7',borderRadius: 50, width:100, fontFamily: 'a-jannat-lt',alignSelf:'center'}}>اسم المستخدم</Text>

        <TextInput
          style={{
            height: 40,
            borderColor: 'gray',
            borderWidth: 1,
            backgroundColor: '#FFFFFF',
            marginBottom:10,
            borderRadius: 50,
            width:250,
            alignSelf:'center',
            fontFamily: 'a-jannat-lt'
          }}
          on
          placeholder=" "
          onChangeText={userName => this.setState({userName})}
          value={this.state.userName}
          autoCapitalize="none"
        />



   <Text style={{color:'#011325', textAlign:'center',borderWidth:1, backgroundColor:'#faeed7',borderRadius: 50, width:100, fontFamily: 'a-jannat-lt',alignSelf:'center'}}>البريد الإلكتروني</Text>

    <TextInput
      style={{
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        backgroundColor: '#FFFFFF',
        marginBottom:10,
        borderRadius: 50,
         width:250,
        alignSelf:'center',
        fontFamily: 'a-jannat-lt'
      }}
      on
      placeholder=" "
      onChangeText={email => this.setState({email})}
      value={this.state.email}
      autoCapitalize="none"
    />
    <Text
     style={{color:'#011325',
      textAlign:'center',
      backgroundColor:'#faeed7',
      borderRadius: 50,
       width:100, 
       alignSelf:'center',
       fontFamily: 'a-jannat-lt',
       borderWidth:1
       }}>
       كلمةالمرور</Text>

    <TextInput
      onChangeText={password => this.setState({password})}
      style={{
        
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        backgroundColor: '#FFFFFF',
        marginBottom: 10,
        borderRadius: 50,
        width:250,
        alignSelf:'center'
      }}
      
      placeholder=""
      secureTextEntry={true}
      value={this.state.password}
      direction ='rtl'
    />
    <View
      style={{
        marginBottom: 20,
        marginLeft: 50,
        marginRight: 50,
        flexDirection:'row',
        justifyContent:'space-between'
      }}>
     
      <TouchableOpacity onPress={register}>
      <Text style={{color:'white', textAlign:'center', backgroundColor:'#c28f48',borderRadius: 50, width:100, fontFamily: 'a-jannat-lt',alignSelf:'center'}}>تسجيل</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={login}>
      <Text style={{color:'white', textAlign:'center', backgroundColor:'#c28f48',borderRadius: 50, width:100, fontFamily: 'a-jannat-lt',alignSelf:'center'}}>دخول</Text>
      </TouchableOpacity>
    </View>
  </View>
</ImageBackground>






       

  }
  {
    this.state.firstTime==true && this.state.isLoading==true&&
    <ImageBackground
    source={require('_assets/images/islamicintro.jpg')}
    style={{
      width: '100%',
      height: '100%',
    }}>
    <View style={{flex:1}}>
      <View style={{flex:1}}></View>

            <ActivityIndicator size="large" color="#faeed7" />

    </View>
    </ImageBackground>
  }
      </View>
    );
  }
}

export default Welcome;
