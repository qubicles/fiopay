import React, { Component } from 'react';
import { View, Text, Image, Dimensions, TouchableOpacity } from 'react-native';

const screenWidth = Math.round(Dimensions.get('window').width);
export default class LoginScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
    };

  }

  loginImport = () =>{
    this.props.navigation.navigate('LoginImport');
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#425CC7' }}>
        <Image  style={{ width: '100%', height: 110, resizeMode: 'stretch',alignSelf: 'flex-end',backgroundColor: 'rgb(111,167,234)'  }} />
        <Image source ={require('../images/bg3.png')} style={{width: screenWidth + 10 ,
          aspectRatio: 1 ,height: '110%', position: 'absolute',resizeMode: 'stretch', }}/>
     
        <Image source ={require('../images/logo.png')} style={{width: '31%',height: '16%',position: 'absolute',
        justifyContent: 'center',alignSelf: 'center',marginTop: '18%'}}/>
    
        <Image source ={require('../images/rectangleBG.png')} style={{width: '100%',resizeMode: 'stretch',height: '34%',position: 'absolute',bottom:0,}}/>
        <Image source ={require('../images/phone.png')} style={{width: '50%',height: '36%',position: 'absolute',marginTop:'30%',bottom:120,justifyContent: 'center',alignSelf: 'center',}}/>
        
        <TouchableOpacity onPress={()=>this.loginImport()} style={{borderRadius:30,bottom: 40, justifyContent: 'center',alignSelf: 'center',height:60,width: '80%',position: 'absolute',backgroundColor: '#419BDE',}}>
            <Text style={{padding: 10,
            borderRadius: 30,textAlign: 'center',color: '#fff',fontSize: 22,textAlignVertical: 'center',fontFamily: 'ProximaNova-Extrabld'}}>Import Account</Text>
        </TouchableOpacity>

        </View>
    )
  }
}
