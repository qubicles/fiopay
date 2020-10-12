import React, { Component } from 'react'
import { Text, View, ScrollView, Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

export default class Contact extends Component {
    constructor(props){
        super(props);
        this.state={
            connectedValue: ''
        }
    }

    connectedValue = () =>{
      this.setState({connectedValue: !this.state.connectedValue})
    }

    payScreen = () =>{
        this.props.navigation.navigate('ContactPay')
    }

    requestPayemnt = () =>{
        this.props.navigation.navigate('ContactRequestPayment')
    }
    render() {
        return (
            <ScrollView style={{ flex: 1}}>
               <View style={{flexDirection: 'row',justifyContent: 'space-between',padding:15}}> 
                    <TouchableOpacity 
                        onPress={() => this.props.navigation.goBack()}
                        style={{ margin: 10,marginTop:30}}>
                            <Image source={require('../images/leftArrowRequest.png')}
                            style={{ height: 15, width: 17}}/>
                    </TouchableOpacity>

                    <TouchableOpacity 
                        style={{ margin: 10,marginTop:15}}>
                            <Image source={require('../images/edit.png')}
                            style={{  shadowColor: '#000',height:44,width: 44, 
                            shadowOffset: { width: 0, height: 1 },
                            shadowOpacity:0.1,
                            elevation: 1, }}/>
                    </TouchableOpacity>
               </View>

               <View style={{flexDirection: 'row',marginLeft:20,marginRight:20,justifyContent: 'space-between'}}>
                    <Image
                        source={{ uri : 'https://www.shareicon.net/data/512x512/2016/07/26/802043_man_512x512.png'}}
                        style={{ backgroundColor: "#4099DC", height: 148, width: 148, borderRadius: 50 }}
                    />   
                    <View style={{justifyContent:'center',marginLeft:10}}>
                        <Text style={{fontSize:24,fontFamily: 'ProximaNova-Extrabld'}}>Marlon</Text>
                        <View style={{flexDirection: 'row',marginTop:10}}>
                            <Image source ={require('../images/iconSkyF.png')}style={{ height: 20, width: 8.4  }}/>
                            <Text style={{fontSize:18,marginLeft:10,fontFamily: 'ProximaNova-Semibold'}}>marlon@zenblocks</Text>
                        </View>
                        <TouchableOpacity onPress={()=> this.connectedValue()}>
                            {this.state.connectedValue ? 
                                <View style={{flexDirection: 'row',width: '90%', backgroundColor: '#4099DC',justifyContent: 'center',height:50,borderRadius:10,elevation:1,shadowColor: 'gray',shadowOffset: { width: 0, height: 3 },
                                    shadowOpacity: 0.5,shadowRadius: 5,alignItems: 'center',marginTop:10}}>
                                    <Text style={{color:'#fff',fontSize:16,fontFamily: 'ProximaNova-Extrabld'}}>Connected</Text>
                                    <Image source={require('../images/confirm.png')} style={{width:18,height:18,marginLeft:10}} />
                                </View> 
                                :
                                <View style={{flexDirection: 'row',width: '90%',backgroundColor: '#fff',justifyContent: 'center',height:41,borderRadius:10,elevation:1,shadowColor: 'gray',shadowOffset: { width: 0, height: 3 },
                                    shadowOpacity: 0.5,shadowRadius: 5,alignItems: 'center',marginTop:10}}>
                                    <Text style={{color:'#4aa8ed',fontSize:16,fontFamily: 'ProximaNova-Extrabld'}}>Connect</Text>
                                </View> 
                            }
                        </TouchableOpacity>
                    </View>
               </View>

               <View style={styles.viewPart}>
                   <Text style={{fontSize: 24,color: 'rgba(0,0,0,0.6)',padding:20,marginTop:10,fontFamily: 'ProximaNova-Extrabld'}}>Transaction History</Text>
                   
                   <View style={{flexDirection: 'row'}}>
                   <View style={{backgroundColor: '#425CC7',height:70, marginLeft: 20,marginRight: 20, width: '90%',borderRadius: 10,}}>
                        <View style={styles.cardStyle}>
                                <View style={{flexDirection: 'row',marginLeft:20,alignItems: 'center'}}>
                                    <Image source={require('../images/receive.png')}
                                    style={{ height: 44, width: 44 , marginRight: 7}}
                                    />
                                    <View style={{padding:5}}>
                                    <Text style={{fontFamily: 'ProximaNova-Bold',fontSize:15}}>Sent Money</Text>
                                    <Text style={{color: 'gray',marginTop:5,fontSize:12,fontFamily: 'ProximaNova-Medium'}}>August 10th 2020</Text>
                                    </View>
                                </View>
                                <View style={{flexDirection: 'row'}}>
                                    <Text style={{color:'#4c5fab',fontFamily: 'ProximaNova-Bold',fontSize:15 }}>-3.1920 ETH  </Text>
                                
                                </View>
                        </View>
                    </View>
                   </View>

                   <View style={{flexDirection: 'row',marginTop:20}}>
                   <View style={{backgroundColor: '#4aa8ed',height:70, marginLeft: 20,marginRight: 20, width: '90%',borderRadius: 10,}}>
                        <View style={styles.cardStyle}>
                                <View style={{flexDirection: 'row',marginLeft:20,alignItems: 'center'}}>
                                    <Image source={require('../images/sent.png')}
                                    style={{ height: 44, width: 44 , marginRight: 7}}
                                    />
                                    <View style={{padding:5}}>
                                    <Text style={{fontFamily: 'ProximaNova-Bold',fontSize:15}}>Sent Money</Text>
                                    <Text style={{color: 'gray',marginTop:5,fontSize:12,fontFamily: 'ProximaNova-Medium'}}>August 10th 2020</Text>
                                    </View>
                                </View>
                                <View style={{flexDirection: 'row'}}>
                                    <Text style={{color:'#419bde',fontFamily: 'ProximaNova-Bold',fontSize:15 }}>+14.1021 FIO  </Text>
                                
                                </View>
                        </View>
                    </View>
                   </View>

                   <View style={{flexDirection: 'row',marginTop: '50%',
                   justifyContent: 'space-between',padding: 20,borderRadius: 20}}>
                       <TouchableOpacity onPress={()=>this.payScreen()} style={{width: 160,height: 57,backgroundColor: '#405ac5',borderRadius: 40,justifyContent: 'center',alignItems: 'center'}}>
                         <Text style={{color: '#fff',borderRadius: 20,fontSize: 22,fontFamily: 'ProximaNova-Bold'}}>Pay</Text>
                       </TouchableOpacity>
                       <TouchableOpacity onPress={()=>this.requestPayemnt()} style={{width: 160,marginLeft:10,height: 57,backgroundColor: '#4aa8ed',borderRadius: 40,justifyContent: 'center',alignItems: 'center'}}>
                         <Text style={{color: '#fff',borderRadius: 20,fontSize:  22,fontFamily: 'ProximaNova-Bold'}}>Request</Text>
                       </TouchableOpacity>
                   </View>
                   
               </View>
        </ScrollView>
        )
    }
}
const styles = {
    viewPart: {
      height: 615,
      backgroundColor:"white",
      elevation:10,
      shadowColor: 'gray',
      shadowOffset: { width: 0, height: -0.1 },
      shadowOpacity:0.4,
      shadowRadius: 5,
      borderTopLeftRadius:40,borderTopRightRadius:40,
      borderColor: 'gray',
      marginTop: 20 
    },
    cardStyle: {
      flexDirection: "row",
      width: '97%',
      height:69.5,
      alignItems: 'center',
      shadowColor: 'gray',
      backgroundColor: '#fff',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity:0.3,
      shadowRadius: 5,
      elevation:1 ,
      justifyContent: 'space-between',
      borderRadius: 10,
      marginTop:0.2,
      marginLeft:0.2
      }
  }

