import React, { Component } from 'react';
import { View, Text, Image, Dimensions, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

const screenWidth = Math.round(Dimensions.get('window').width);
export default class LoginImport extends Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  enteredImport = () =>{
    this.props.navigation.navigate('LoginImportEntered');
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#425CC7' }}>
        <Image  style={{ width: '100%', height: 110, resizeMode: 'stretch',alignSelf: 'flex-end',backgroundColor: 'rgb(111,167,234)'  }} />
        <Image source ={require('../images/bg3.png')} style={{width: screenWidth + 10 ,
          aspectRatio: 1 ,height: '110%', position: 'absolute',resizeMode: 'stretch', }}/>
     
         <Image source ={require('../images/logo.png')} style={{width: '31%',height: '14%',position: 'absolute',
         justifyContent: 'center',alignSelf: 'center',marginTop: '22%'}}/>
    
          <Image source ={require('../images/rectangleBG.png')} style={{width: '100%',resizeMode: 'stretch',height: '40%',position: 'absolute',bottom:0,}}/>
          <TextInput
          style={{width: '85%',height: '20%',margin: 20,borderRadius:10,marginTop:10,fontSize:22,textAlign: 'center',justifyContent: 'center',alignSelf: 'center',
          borderColor: 'rgb(227,228,236)',borderWidth:3,backgroundColor: 'rgb(243,243,243)',color: '#fff',position: 'absolute',bottom: '14%',fontFamily: 'ProximaNova-Extrabld'}}
          placeholder="Import Private Key"
          placeholderTextColor= 'rgb(205,205,205)'
          />

          <TouchableOpacity onPress={()=>this.enteredImport()} style={{borderRadius:30,bottom: 10, justifyContent: 'center',alignSelf: 'center',height:60,width: '85%',position: 'absolute',backgroundColor: 'rgb(220,234,247)',}}>
          <Text style={{padding: 10,fontFamily: 'ProximaNova-Extrabld',
          borderRadius: 30,textAlign: 'center',color: '#fff',fontSize: 22,textAlignVertical: 'center'}}>Confirm</Text>
          </TouchableOpacity>
      </View>
    )
  }
}
