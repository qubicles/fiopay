import React, { Component } from 'react'
import { Text, View, ScrollView, Image, Dimensions } from 'react-native'
import { TouchableOpacity, TextInput } from 'react-native-gesture-handler'
const screenWidth = Math.round(Dimensions.get('window').width);

export default class ContactPay extends Component {
    constructor(props){
        super(props);
        this.state={
            connectedValue: '',
            once: '',
            weekly: '',
            monthly: '',
            yearly: ''
        }
    }

    once =()=>{
        this.setState({once: !this.state.once})
    }

    weekly =()=>{
        this.setState({weekly: !this.state.weekly})
    }

    monthly =()=>{
        this.setState({monthly: !this.state.monthly})
    }

    yearly =()=>{
        this.setState({yearly: !this.state.yearly})
    }

    sendPayment =() =>{
        this.props.navigation.navigate('PaymentConfirm')
    }
   
    render() {
        return (
            <ScrollView style={{ flex: 1,backgroundColor: '#3653b8'}}>
                <View style={{width:'124%',position: 'absolute',height: '100%',backgroundColor: '#415fc9',transform: [{skewX: '25deg'}]}}></View>
             
                    <TouchableOpacity 
                        onPress={() => this.props.navigation.goBack()}
                        style={{margin: 20,marginTop:30 }}>
                            <Image source={require('../images/leftArrowPay.png')}
                            style={{ height: 12, width: 17}}/>
                    </TouchableOpacity>
                    <Text style={{fontSize: 33,marginLeft: 25,color: '#fff',fontFamily: 'ProximaNova-Extrabld'}}>Pay</Text>

               <View style={styles.viewPart}>
                      <Text style={{color: '#405ec7',fontSize: 24,marginLeft: 30,marginTop:25,fontFamily: 'ProximaNova-Extrabld'}}>Receiving Address</Text>
                       
                      <View style={{flexDirection: 'row',marginTop: 10,padding: 10,borderRadius: 8,alignItems: 'center',justifyContent: 'space-between',
                        marginLeft: 30,marginRight: 30,borderWidth:3,height: 70,borderColor:'rgba(76,95,171,0.1)'}}>
                           <Text style={{fontSize: 20,fontFamily: 'ProximaNova-Bold',marginLeft:10,color:'#666666'}}>marlon@zenblocks</Text>
                           <Image source={require('../images/downArroeLIght.png')} style={{width:17,height:12}}/>
                      </View>

                      <Text style={{color: '#405ec7',fontSize: 24,marginLeft: 30,marginTop: 20,fontFamily: 'ProximaNova-Extrabld'}}>Choose Currency</Text>
                       
                      <View style={{flexDirection: 'row',marginTop: 10,justifyContent: 'space-between',padding: 10,borderRadius: 8,alignItems: 'center',
                        marginLeft: 30,marginRight: 30,borderWidth: 3,height: 70,borderColor:'rgba(76,95,171,0.1)'}}>
                        <View style={{flexDirection: 'row'}}>
                            <Image source={require('../images/iconBlueF.png')} style={{ height: 30, width: 12,marginLeft:10 }} />
                            <Text style={{fontSize: 20,fontFamily: 'ProximaNova-Extrabld',marginLeft: 10,color:'#666666'}}>FIO</Text>
                        </View>
                       <Image source={require('../images/downArroeLIght.png')} style={{width:17,height:12}}/>
                      </View>

                    <Text style={{color: '#405ec7',fontSize: 24,marginLeft: 30,marginTop: 10,fontFamily: 'ProximaNova-Extrabld'}}>Amount</Text>
                    <View style={{flexDirection: 'row',marginTop:10,borderRadius: 8,justifyContent: 'space-between',alignItems:'center',borderColor: 'gray',
                            marginLeft: 30,marginRight: 30,borderWidth: 3,height: 70,borderColor:'rgba(76,95,171,0.1)'}}>
                             <View style={{flexDirection: 'row',marginLeft:20}}>
                             <Image source={require('../images/iconBlueF.png')} style={{ height: 30, width: 12, }} />
                                <View style={{marginLeft: 10}}>
                                  <Text style={{fontSize: 20,fontFamily: 'ProximaNova-Extrabld',color:'#666666'}}>FIO</Text>
                                  <Text style={{color:'gray',fontSize: 14,fontFamily:'ProximaNova-Extrabld'}}>7.2104 Available</Text>
                                </View>
                             </View>

                             <Text style={{marginRight: 20,color: 'gray',fontSize: 23,fontFamily: 'ProximaNova-Extrabld'}}>Amount</Text>
                      </View>

                      <Text style={{color: '#405ec7',fontSize: 24,marginLeft: 30,marginTop: 20,fontFamily: 'ProximaNova-Extrabld'}}>Frequency</Text>
                      
                      <View style={{flexDirection: 'row',marginLeft: 30,marginRight: 30,marginTop: 10}}>
                          <TouchableOpacity onPress={()=> this.once()} style={{borderWidth: 3,backgroundColor: this.state.once ? '#415fc9' : '#fff', width: 80,borderColor:'rgba(76,95,171,0.1)',height: 37,padding: 5,borderRadius: 10}}>
                            <Text style={{fontSize: 14,fontFamily: 'ProximaNova-Extrabld',color:this.state.once ? '#fff' : 'gray',textAlign: 'center'}}> Once </Text>
                          </TouchableOpacity>

                          <TouchableOpacity onPress={()=> this.weekly()} style={{borderWidth: 3,backgroundColor: this.state.weekly ? '#415fc9' : '#fff',width: 80,marginLeft: 10,borderColor:'rgba(76,95,171,0.1)',height: 37,padding: 5,borderRadius: 10}}>
                            <Text style={{fontSize: 14,fontFamily: 'ProximaNova-Extrabld',color:this.state.weekly ? '#fff' : 'gray',textAlign: 'center'}}> Weekly </Text>
                          </TouchableOpacity>

                          <TouchableOpacity onPress={()=> this.monthly()} style={{borderWidth:3,backgroundColor: this.state.monthly ? '#415fc9' : '#fff',width: 80,marginLeft: 10,borderColor:'rgba(76,95,171,0.1)',height: 37,padding: 5,borderRadius: 10}}>
                            <Text style={{fontSize: 14,fontFamily: 'ProximaNova-Extrabld',color:this.state.monthly ? '#fff' : 'gray',textAlign: 'center'}}> Monthly </Text>
                          </TouchableOpacity>

                          <TouchableOpacity onPress={()=> this.yearly()} style={{borderWidth:3,backgroundColor: this.state.yearly ? '#415fc9' : '#fff',width: 80,marginLeft: 10,borderColor:'rgba(76,95,171,0.1)',height: 37,padding: 5,borderRadius: 10}}>
                            <Text style={{fontSize: 14,fontFamily: 'ProximaNova-Extrabld',color:this.state.yearly ? '#fff' : 'gray',textAlign: 'center'}}> Yearly </Text>
                          </TouchableOpacity>
                      </View>
                  
                      <Text style={{color: '#405ec7',fontSize: 24,marginLeft: 30,marginTop: 20,fontFamily: 'ProximaNova-Extrabld'}}>What's This For?</Text>

                      <TextInput 
                      placeholder= 'Say Something'
                      style={{marginLeft: 30,fontFamily: 'ProximaNova-Extrabld',marginRight:30,marginTop:10,borderWidth: 3,height: 120,borderRadius: 10,borderColor: 'rgba(76,95,171,0.1)',fontSize: 24,padding: 10}}
                      />

                      <TouchableOpacity onPress={()=>this.sendPayment()} style={{marginTop:20,marginBottom:20, justifyContent: 'center',alignSelf: 'center',height:64,width: '85%',backgroundColor: '#405ec7',borderRadius:30,}}>
                        <Text style={{padding: 10,fontFamily: 'ProximaNova-Extrabld',
                        textAlign: 'center',color: '#fff',fontSize: 22,textAlignVertical: 'center'}}>Send Payment</Text>
                      </TouchableOpacity>
                     
               </View>

        </ScrollView>
        )
    }
}
const styles = {
    viewPart: {
      height: '400%',
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

