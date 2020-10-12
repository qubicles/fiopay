import React, { Component } from 'react'
import { Text, View, ScrollView, Image,Dimensions } from 'react-native'
import { TouchableOpacity, TextInput } from 'react-native-gesture-handler'
const screenWidth = Math.round(Dimensions.get('window').width);

export default class RecurringPayment extends Component {

    constructor(props){
        super(props);
        this.state={
            option: ''
        }
    }

    optionValue =() =>{
        this.setState({option: !this.state.option})
    }

    createNewPayemnet=() =>{
        this.props.navigation.navigate('RequestPayemnt')
    }
    

   
    render() {
        return (
            <View style={{ flex: 1,backgroundColor: '#4aa8ed'}}>
            <Image source ={require('../images/bg3.png')} style={{width: screenWidth  ,
              aspectRatio: 1 ,height: '100%', position: 'absolute',resizeMode: 'stretch', }}/>
            
                    <TouchableOpacity 
                        onPress={() => this.props.navigation.goBack()}
                        style={{margin: 20 ,marginTop:30}}>
                            <Image source={require('../images/leftArrowWhite.png')}
                            style={{ height: 20, width: 20}}/>
                    </TouchableOpacity>

                    <Text style={{fontSize: 33,marginLeft: 25,color: '#fff',fontFamily: 'ProximaNova-Extrabld'}}>Recurring Payment</Text>

            
               <View style={styles.viewPart}>
 
                   <View style={{marginLeft:30,marginRight:30,marginTop:30,elevation:10,borderRadius:10,shadowRadius: 5,shadowOpacity:0.4,backgroundColor: '#fff',shadowOffset: { width: 0, height: -0.1 },shadowColor: 'gray',height:70,justifyContent:'center'}}>
                    <View style={{flexDirection: "row", alignItems: 'center',justifyContent: 'space-between' }}>
                          <View style={{flexDirection: 'row'}}>
                            <Image
                                    source={{ uri : 'https://www.shareicon.net/data/512x512/2016/07/26/802043_man_512x512.png'}}
                                    style={{ backgroundColor: "#4099DC",marginLeft:10,  height: 44, width: 44, borderRadius: 25 }}
                                />
                                
                                <View style={{marginLeft: 10}}>
                                    <Text style={{fontSize: 15, fontFamily: 'ProximaNova-Bold'}}>ray@fio</Text>
                                    <Text style={{fontSize: 12,marginTop: 5,fontFamily: 'ProximaNova-Medium'}}>August 7th</Text>
                                </View>
                            </View>

                            <View style={{flexDirection: 'row',justifyContent: 'center',alignItems: 'center',marginRight:20}}>
                                <View style={{marginLeft: 30,width: 84,justifyContent: 'center',alignItems: 'center',  height:44,backgroundColor:this.state.option ? '#ed4a4a' : '#4099DC',borderRadius:10}}>
                                    <Text style={{fontSize:13,color: '#fff',fontFamily:'ProximaNova-Extrabld'}}>{this.state.option ? 'DELETE' : '4.1 FIO'}</Text>
                                </View>

                                <TouchableOpacity onPress={()=>this.optionValue()}>
                                   <Image style={{width:4,height:20,marginLeft:20}} source={require('../images/options.png')}/>
                                </TouchableOpacity>
                            </View>
                    </View>
                   </View>


                   <View style={{marginLeft:30,marginRight:30,marginTop:20,elevation:10,borderRadius:10,shadowRadius: 5,shadowOpacity:0.4,backgroundColor: '#fff',shadowOffset: { width: 0, height: -0.1 },shadowColor: 'gray',height:70,justifyContent:'center'}}>
                    <View style={{flexDirection: "row", alignItems: 'center',justifyContent: 'space-between' }}>
                          <View style={{flexDirection: 'row'}}>
                            <Image
                                    source={{ uri : 'https://www.shareicon.net/data/512x512/2016/07/26/802043_man_512x512.png'}}
                                    style={{ backgroundColor: "#4099DC",marginLeft:10,  height: 44, width: 44, borderRadius: 25 }}
                                />
                                
                                <View style={{marginLeft: 10}}>
                                    <Text style={{fontSize: 15, fontFamily: 'ProximaNova-Bold'}}>chrisy@wdw</Text>
                                    <Text style={{fontSize: 12,marginTop: 5,fontFamily: 'ProximaNova-Medium'}}>August 7th</Text>
                                </View>
                            </View>

                            <View style={{flexDirection: 'row',justifyContent: 'center',alignItems: 'center',marginRight:20}}>
                                <View style={{marginLeft: 30,width: 84,justifyContent: 'center',alignItems: 'center',  height:44,backgroundColor:this.state.option ? '#ed4a4a' : '#4099DC',borderRadius:10}}>
                                    <Text style={{fontSize:13,color: '#fff',fontFamily:'ProximaNova-Extrabld'}}>{this.state.option ? 'DELETE' : '4.1 FIO'}</Text>
                                </View>

                                <TouchableOpacity onPress={()=>this.optionValue()}>
                                   <Image style={{width:4,height:20,marginLeft:20}} source={require('../images/options.png')}/>
                                </TouchableOpacity>
                            </View>
                    </View>
                   </View>
                   
                    <View style={{marginLeft:30,marginRight:30,marginTop:20,elevation:10,borderRadius:10,shadowRadius: 5,shadowOpacity:0.4,backgroundColor: '#fff',shadowOffset: { width: 0, height: -0.1 },shadowColor: 'gray',height:70,justifyContent:'center'}}>
                    <View style={{flexDirection: "row", alignItems: 'center',justifyContent: 'space-between' }}>
                          <View style={{flexDirection: 'row'}}>
                            <Image
                                    source={{ uri : 'https://www.shareicon.net/data/512x512/2016/07/26/802043_man_512x512.png'}}
                                    style={{ backgroundColor: "#4099DC",marginLeft:10,  height: 44, width: 44, borderRadius: 25 }}
                                />
                                
                                <View style={{marginLeft: 10}}>
                                    <Text style={{fontSize: 15, fontFamily: 'ProximaNova-Bold'}}>chrisy@wdw</Text>
                                    <Text style={{fontSize: 12,marginTop: 5,fontFamily: 'ProximaNova-Medium'}}>August 7th</Text>
                                </View>
                            </View>

                            <View style={{flexDirection: 'row',justifyContent: 'center',alignItems: 'center',marginRight:20}}>
                                <View style={{marginLeft: 30,width: 84,justifyContent: 'center',alignItems: 'center',  height:44,backgroundColor:this.state.option ? '#ed4a4a' : '#4099DC',borderRadius:10}}>
                                    <Text style={{fontSize:13,color: '#fff',fontFamily:'ProximaNova-Extrabld'}}>{this.state.option ? 'DELETE' : '4.1 FIO'}</Text>
                                </View>

                                <TouchableOpacity onPress={()=>this.optionValue()}>
                                   <Image style={{width:4,height:20,marginLeft:20}} source={require('../images/options.png')}/>
                                </TouchableOpacity>
                            </View>
                    </View>
                   </View>
                     
                   <TouchableOpacity onPress={()=>this.createNewPayemnet()} style={{marginTop:'80%', justifyContent: 'center',alignSelf: 'center',height:64,width: '85%',backgroundColor: '#4099DC',borderRadius:30,}}>
                        <Text style={{padding: 10,fontFamily: 'ProximaNova-Extrabld',
                        textAlign: 'center',color: '#fff',fontSize: 22,textAlignVertical: 'center'}}>Create New Payment</Text>
                    </TouchableOpacity>

               </View>
            
        </View>
        
        )
    }
}
const styles = {
    viewPart: {
      height: 751,
      backgroundColor:"white",
      elevation:10,
      shadowColor: 'gray',
      shadowOffset: { width: 0, height: -0.1 },
      shadowOpacity:0.4,
      shadowRadius: 5,
      borderTopLeftRadius:40,borderTopRightRadius:40,
      borderColor: 'gray',
      marginTop: 14 
    },
    
  }

