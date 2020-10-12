import React, { Component } from 'react'
import { Text, View, ScrollView, Image,Animated,TouchableOpacity ,TextInput} from 'react-native'

export default class PaymentSuccess extends Component {

    constructor(props){
        super(props);
        this.state={
            connectedValue: '',
            animation : new Animated.Value(0),
        }
    }

    done = () =>{
        this.props.navigation.navigate('Home')
    }

    confirm=()=>{
        this.props.navigation.navigate('Home')
    }
   
    render() {
        const transformStyle ={
            transform : [{ 
              translateY : this.state.animation,
            }]
        }
        return (
            <ScrollView style={{ flex: 1,backgroundColor: '#425CC7'}}>

            <View style={[transformStyle],{backgroundColor:'#415fc9',height: '100%' }}>
                  
                  <View style={{backgroundColor: '#fff',position: 'absolute',borderRadius:20,marginTop:50, width: '85%',marginLeft:30,marginRight:30,height: '80%'}}>
                  <View style={{alignItems: 'center',marginTop: 60,justifyContent: 'center'}}>
                      <Image source={require('../images/successBlue.png')} style={{height:100,width:100,}}/>
                    </View>
                  <Text style={{marginTop: 20,fontSize: 24,textAlign: 'center',fontFamily: 'ProximaNova-Extrabld'}}>Success</Text>
                  <Text style={{color: 'gray',marginTop: 10,fontSize: 20,textAlign: 'center',fontFamily:'ProximaNova-Medium'}}>You Successfully Sent Money</Text>
                 

                        <View style={{flexDirection: 'row',marginTop: 20,justifyContent: 'center',borderRadius: 8,alignItems: 'center'
                            ,marginLeft: 40,marginRight: 40,borderWidth: 0.3,height: 89}}>
                            
                                    <Text style={{fontSize: 30,color: '#3f57c0',fontFamily: 'ProximaNova-Extrabld'}}>1.131FIO</Text>
                            
                        </View>
 
                <View style={{marginLeft:30,marginRight:30}}>
                         <View style={{flexDirection : 'row',justifyContent: 'space-between',marginTop: 20}}>
                            <Text style={{fontFamily: 'ProximaNova-Bold',fontSize:16}}>From:</Text>
                            <Text style={{fontFamily: 'ProximaNova-Bold',fontSize:16}}>dallas@karma</Text>
                        </View>

                        <View style={{flexDirection : 'row',justifyContent: 'space-between',marginTop: 20}}>
                            <Text style={{fontFamily: 'ProximaNova-Bold',fontSize:16}}>To:</Text>
                            <Text style={{fontFamily: 'ProximaNova-Bold',fontSize:16}}>marlon@zenblocks</Text>
                        </View>

                        <View style={{flexDirection : 'row',justifyContent: 'space-between',marginTop: 20}}>
                            <Text style={{fontFamily: 'ProximaNova-Bold',fontSize:16}}>Date:</Text>
                            <Text style={{fontFamily: 'ProximaNova-Bold',fontSize:16}}>August 18th,2020</Text>
                        </View>
                        </View>
                        <TouchableOpacity onPress={()=>this.done()} style={{marginTop:20,marginBottom:20, justifyContent: 'center',alignSelf: 'center',height:60,width: '85%',backgroundColor: '#415fc9',borderRadius:30,}}>
                        <Text style={{padding: 10,
                        textAlign: 'center',color: '#fff',fontSize: 20,textAlignVertical: 'center'}}>Done</Text>
                      </TouchableOpacity>

               </View>
               </View>


               <View style={styles.viewPart}>

                <Text style={{color: 'rgba(0,0,0,0.4)',paddingTop: 30,paddingLeft: 30,fontSize: 16,fontFamily: 'ProximaNova-Bold'}}>Amount</Text>

                <View style={{flexDirection: 'row',paddingTop: 10,paddingLeft: 30,paddingRight:30,justifyContent: 'space-between',alignItems: 'center'}}>
                    
                        <Text style={{fontSize: 36,fontFamily: 'ProximaNova-Bold'}}>1.131 FIO</Text>

                        <Text style={{fontSize: 18,marginLeft: 10,color: '#4BAF7D',fontFamily: 'ProximaNova-Bold'}}>$33.19 USD</Text>
                    
                </View>
                <Text style={{color: 'rgba(0,0,0,0.4)',paddingTop: 20,paddingLeft: 30,fontSize: 16,fontFamily: 'ProximaNova-Bold'}}>To</Text>
                
                <View style={{flexDirection:'row',paddingTop: 10,paddingLeft: 30,paddingRight:30}}>
                    <Image   source={{ uri : 'https://www.shareicon.net/data/512x512/2016/07/26/802043_man_512x512.png'}}
                            style={{ backgroundColor: "#4099DC", height: 40, width: 40, borderRadius: 20 }} />

                            <Text style={{fontSize: 24, marginLeft: 10,padding:5,fontWeight: 'bold',color: '#404040'}}>marlon@zenblocks</Text>
                </View>

                <Text style={{color: 'rgba(0,0,0,0.4)',paddingTop: 20,paddingLeft: 30,fontSize: 16,fontFamily: 'ProximaNova-Bold'}}>From</Text>

                <View style={styles.cardStyle}>

                    <View style={{ margin: 15, alignSelf: 'flex-start' }}>
                        <View style={{flexDirection: 'row',justifyContent: 'space-between'}}>

                            <View>
                                <Text style={{ fontSize: 22, fontFamily: 'ProximaNova-Bold' , color: "#fff", alignSelf: 'center', marginTop: 10 }}>
                                Available Balance
                                </Text>
                            </View>

                            <View style={{flexDirection: 'row',marginLeft: 60}}>
                                <Image source ={require('../images/iconWhiteF.png')}
                                style={{ height: 20, width: 8.4 ,marginTop: 13 }}
                                />
                                <Text style={{ fontSize: 22,marginLeft:6, fontFamily: 'ProximaNova-Medium', color: "#fff", alignSelf: 'center', marginTop: 10 }}>FioPay</Text>
                            </View>
                        </View>

                            <Text style={{ fontSize: 36, fontFamily: 'ProximaNova-Bold', color: "#fff", textAlign: 'left', marginTop: 15 }}>
                                $7.53
                            </Text>

                    </View>


                    <View
                    style={{
                        width: "100%", height: 54,
                        backgroundColor: '#3653b8', alignItems: 'center', justifyContent: 'center',
                        position: 'absolute',flexDirection: 'row',justifyContent: 'space-between',
                        bottom: 0, borderBottomLeftRadius: 10,padding:15,borderBottomRightRadius:10
                    }}>



                    <Text style={{ fontSize: 20,  fontFamily: 'ProximaNova-Bold', color: "#fff", alignSelf: 'center' }}>
                        dallas@karma
                    </Text>
                    <Image source={require('../images/downArrow.png')} style={{width:14, height: 14}} />
                    </View>

                    </View>

                    <Text style={{color: 'rgba(0,0,0,0.4)',paddingTop: 20,paddingLeft: 30,fontSize: 16,fontFamily: 'ProximaNova-Bold'}}>Frequency</Text>

                <TouchableOpacity  style={{borderWidth: 0.3,backgroundColor: '#415fc9',marginLeft:30,marginRight:30,marginTop:10 ,width: 94,borderColor: 'gray',height: 37,padding: 10,borderRadius: 10}}>
                        <Text style={{fontSize: 14,color: '#fff' ,textAlign: 'center',fontFamily: 'ProximaNova-Extrabld'}}> Monthly </Text>
                </TouchableOpacity>

                <Text style={{color: 'rgba(0,0,0,0.4)',paddingTop: 20,paddingLeft: 30,fontSize: 16,fontFamily: 'ProximaNova-Bold'}}>Memo</Text>
                <Text style={{paddingTop: 10,paddingLeft: 30,fontSize: 14,fontFamily: 'ProximaNova-Bold'}}>Sushi in Santa Monica!</Text>

                <TouchableOpacity onPress={()=>this.confirm()} style={{marginTop:40,marginBottom:20, justifyContent: 'center',alignSelf: 'center',height:64,width: '85%',backgroundColor: '#415fc9',borderRadius:30,}}>
                    <Text style={{padding: 10,fontFamily: 'ProximaNova-Extrabld',
                    textAlign: 'center',color: '#fff',fontSize: 22,textAlignVertical: 'center'}}>Confirm</Text>
                </TouchableOpacity>
                </View>


        </ScrollView>
        )
    }
}
const styles = {
    viewPart: {
      height: '90%',
      backgroundColor:"white",
      elevation:10,
      shadowColor: 'gray',
      shadowOffset: { width: 0, height: -0.1 },
      shadowOpacity:0.4,
      shadowRadius: 5,
      borderTopLeftRadius:40,borderTopRightRadius:40,
      borderColor: 'gray',
      
    },
    cardStyle: {
        backgroundColor: "#425CC7",
        height: 200,
        width: "85%",
        alignSelf: 'center',
        marginTop: 20,
        borderRadius: 7,
        shadowOffset: { width: 5, height: 5, },
        shadowColor: '#ddd',
        shadowOpacity: 1.0,
        elevation: 5,
        marginLeft:30,
        marginRight:  30
    
      },
    
  }

