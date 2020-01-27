import React ,{Component}from 'react';
import {SafeAreaView,  ImageBackground, Text, TouchableHighlight} from 'react-native';


 class Welcome extends Component {
    constructor(props) {
      super(props);
      
  
      this.state = {}}

      componentDidMount() {
       
        setTimeout(() => {
            this.props.navigation.navigate('Home')
  
          }, 2000);
        
       
      }


      render(){
        return (
            <SafeAreaView>
            <ImageBackground
                      source={require('../../assets/images/i1.png')}

                 style={{
                   width: ('70%'),
                   height: ('70%'),
                 }}>
       
                 </ImageBackground>
         </SafeAreaView>
            )
        
        }
    
    
    
    }




export default Welcome;