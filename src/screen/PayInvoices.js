import React, { Component } from 'react'
import { Text, View, ScrollView, Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

export default class PayInvoices extends Component {

    constructor(props){
        super(props);
        this.state={
            connectedValue: ''
        }
    }

    connectedValue = () =>{
      this.setState({connectedValue: !this.state.connectedValue})
    }
    render() {
        return (
            <ScrollView style={{ flex: 1}}>

               <View style={{flexDirection: 'row',justifyContent: 'space-between',padding: 20}}> 
                    <TouchableOpacity 
                        onPress={() => this.props.navigation.goBack()}
                        style={{ margin: 10}}>
                            <Image source={require('../images/leftArrow.png')}
                            style={{ height: 20, width: 15}}/>
                    </TouchableOpacity>

                    <TouchableOpacity 
                        onPress={() => this.props.navigation.goBack()}
                        style={{ margin: 10}}>
                            <Image source={require('../images/edit.png')}
                            style={{  shadowColor: '#000',height:40,width: 40, 
                            shadowOffset: { width: 0, height: 1 },
                            shadowOpacity:0.1,
                            elevation: 5, }}/>
                    </TouchableOpacity>
               </View>
               <View style={{flexDirection: 'row',margin:20,}}>
                    <Image
                        source={{ uri : 'https://www.shareicon.net/data/512x512/2016/07/26/802043_man_512x512.png'}}
                        style={{ backgroundColor: "#4099DC", height: 140, width: 140, borderRadius: 50 }}
                    />   
                    <View style={{justifyContent:'center',marginLeft:20}}>
                        <Text style={{fontSize:24}}>Marlon</Text>
                        <View style={{flexDirection: 'row'}}>
                            <Image source ={require('../images/imageF.png')}style={{ height: 30, width: 30 ,backgroundColor: '#fff' }}/>
                            <Text style={{fontSize:20,marginLeft:10}}>marlon@zenblocks</Text>
                        </View>
                        <TouchableOpacity onPress={()=> this.connectedValue()}>
                            {this.state.connectedValue ? 
                                <View style={{flexDirection: 'row',backgroundColor: '#4099DC',justifyContent: 'center',height:40,borderRadius:10,elevation:10,shadowColor: 'gray',shadowOffset: { width: 0, height: 3 },
                                    shadowOpacity: 0.5,shadowRadius: 5,alignItems: 'center',marginTop:10}}>
                                    <Text style={{color:'#fff',fontSize:18}}>Connected</Text>
                                    <Image style={{backgroundColor: '#fff',width:20,height:20,borderRadius:10,marginLeft:10}} />
                                </View> 
                                :
                                <View style={{flexDirection: 'row',backgroundColor: '#fff',justifyContent: 'center',height:40,borderRadius:10,elevation:10,shadowColor: 'gray',shadowOffset: { width: 0, height: 3 },
                                    shadowOpacity: 0.5,shadowRadius: 5,alignItems: 'center',marginTop:10}}>
                                    <Text style={{color:'#4099DC',fontSize:18}}>Connect</Text>
                                </View> 
                            }
                        </TouchableOpacity>
                    </View>
               </View>

               <View style={styles.viewPart}>
                   <Text style={{fontSize: 26,color: 'gray',padding:20,marginTop:10}}>Transaction History</Text>
                   
                   <View style={{flexDirection: 'row'}}>
                        <View style={styles.cardStyle}>
                                <View style={{flexDirection: 'row'}}>
                                    <Image
                                    style={{ height: 40, width: 40 , borderRadius: 10, backgroundColor: "#425CC7", marginRight: 7}}
                                    />
                                    <View style={{padding:5}}>
                                    <Text style={{fontWeight: 'bold'}}>Sent Money</Text>
                                    <Text style={{color: 'gray'}}>August 10th 2020</Text>
                                    </View>
                                </View>
                                <View style={{flexDirection: 'row'}}>
                                    <Text style={{color:'#425CC7',fontWeight: 'bold' }}>-3.1920 ETH  </Text>
                                
                                </View>
                        </View>
                        <View style={{backgroundColor: '#425CC7',marginLeft: -25,width: '2%',borderTopRightRadius: 20,borderBottomRightRadius: 14}}>
                            <Text> </Text>
                        </View>
                   </View>

                   <View style={{flexDirection: 'row',marginTop: 20}}>
                        <View style={{flexDirection: "row",width: '90%',marginLeft: 20,marginRight: 20, alignItems: 'center',padding: 5,shadowColor: 'gray',backgroundColor: '#fff',
                            shadowOffset: { width: 0, height: 2 },
                            shadowOpacity:0.3,
                            shadowRadius: 5,
                            justifyContent: 'space-between',
                            borderTopRightRadius: 14,padding: 10,
                            borderBottomRightRadius: 14}}>
                                <View style={{flexDirection: 'row'}}>
                                    <Image
                                    style={{ height: 40, width: 40 , borderRadius: 10, backgroundColor: "#4AA8ED", marginRight: 7}}
                                    />
                                    <View style={{padding:5}}>
                                    <Text style={{fontWeight: 'bold'}}>Received Money</Text>
                                    <Text style={{color: 'gray'}}>August 10th 2020</Text>
                                    </View>
                                </View>
                                <View style={{flexDirection: 'row'}}>
                                    <Text style={{color:'#4099DC',fontWeight: 'bold' }}>+14.1021 FIO  </Text>
                                
                                </View>
                        </View>
                        <View style={{backgroundColor: '#4099DC',marginLeft: -25,width: '2%',borderTopRightRadius: 20,borderBottomRightRadius: 14}}>
                            
                        </View>
                   </View>

                   <View style={{flexDirection: 'row',marginTop: '50%',
                   justifyContent: 'space-between',padding: 20,borderRadius: 20}}>
                       <TouchableOpacity style={{width: 160,height: 50,backgroundColor: '#425CC7',borderRadius: 40,justifyContent: 'center',alignItems: 'center'}}>
                         <Text style={{color: '#fff',borderRadius: 20,fontSize: 20,fontWeight: 'bold'}}>Pay</Text>
                       </TouchableOpacity>
                       <TouchableOpacity style={{width: 160,height: 50,backgroundColor: '#4099DC',borderRadius: 40,justifyContent: 'center',alignItems: 'center'}}>
                         <Text style={{color: '#fff',borderRadius: 20,fontSize:  20,fontWeight: 'bold'}}>Request</Text>
                       </TouchableOpacity>
                   </View>
               </View>
        </ScrollView>
        )
    }
}
const styles = {
    viewPart: {
      height: '200%',
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
      width: '90%',
      marginLeft: 20,
      marginRight: 20, 
      alignItems: 'center',
      padding: 5,
      shadowColor: 'gray',
      backgroundColor: '#fff',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity:0.3,
      shadowRadius: 5,
      elevation: 5,
      justifyContent: 'space-between',
      borderTopRightRadius: 14,
      padding:10,
      borderBottomRightRadius: 14
      }
  }
