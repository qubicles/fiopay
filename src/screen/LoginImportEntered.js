import React, { Component } from 'react';
import { View, Text, Image, Dimensions, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

const screenWidth = Math.round(Dimensions.get('window').width);
export default class LoginImportEntered extends Component {

  constructor(props) {
    super(props);
    this.state = {
    };

  }

  nextScreen = () =>{
    this.props.navigation.navigate('HomeScreen')
    
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#425CC7' }}>
        <Image  style={{ width: '100%', height: 110, resizeMode: 'stretch',alignSelf: 'flex-end',backgroundColor: 'rgb(111,167,234)'  }} />
        <Image source ={require('../images/bg3.png')} style={{width: screenWidth + 10 ,
          aspectRatio: 1 ,height: '110%', position: 'absolute',resizeMode: 'stretch', }}/>
     
        <Image source ={require('../images/logo.png')} style={{width: '31%',height: '14%',position: 'absolute',
          justifyContent: 'center',alignSelf: 'center',marginTop: '22%'}}/>
        
          <View style={{backgroundColor:'#4AA8ED', width: '100%',height: '50%',top: '40%',borderTopLeftRadius: 40, borderTopRightRadius: 40 }}></View>
          
          <View style={{backgroundColor:'#419BDE',position: 'absolute',top: '60%', width: '80%',height: '40%',borderRadius: 80,marginLeft: 40 , marginRight: 30}}></View>
          
          <View style={{justifyContent: 'center',alignItems: 'center'}}>
            <Text style={{color:'#fff',textAlign: 'center',bottom: 10,fontSize: 23,flexWrap: 'wrap',width: '50%',fontFamily: 'ProximaNova-Extrabld'}}>ghdxhsghhdsbcdhchdchjgbj678hg65745jkkqwrrtyuiopgsh877sbnh8798</Text>
          </View>
          <TouchableOpacity onPress={()=>this.nextScreen()} style={{borderRadius:40,bottom: 10, justifyContent: 'center',alignSelf: 'center',height:60,width: '48%',position: 'absolute',backgroundColor: '#fff',}}>
                  <Text style={{
                  borderRadius: 30,textAlign: 'center',color: '#419BDE',fontSize: 36,textAlignVertical: 'center',fontFamily: 'ProximaNova-Extrabld'}}>Hop In !</Text>
          </TouchableOpacity> 

      </View>
    )
  }
}
