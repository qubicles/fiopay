import React, { Component } from 'react'
import { Text, View, ScrollView, Image } from 'react-native'
import { TouchableOpacity, TextInput } from 'react-native-gesture-handler'


export default class PayScreen extends Component {

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

    payInvoice =() =>{
        this.props.navigation.navigate('PaymentConfirm')
    }

   
    render() {
        return (
            <ScrollView style={{ flex: 1,backgroundColor: '#425CC7'}}>
                    <TouchableOpacity 
                        onPress={() => this.props.navigation.goBack()}
                        style={{margin: 20 }}>
                            <Image source={require('../images/leftArrowPay.png')}
                            style={{ height: 20, width: 20}}/>
                    </TouchableOpacity>

                    <Text style={{fontSize: 24,marginLeft: 20,color: '#fff'}}>Pay Invoice</Text>

               <View style={styles.viewPart}>
                 
                      <View style={{flexDirection: 'row',padding: 30,justifyContent: 'space-between'}}>
                          <View style={{flexDirection: 'row'}}>
                          <Image source={require('../images/iconBlueF.png')} style={{ height: 30, width: 12, }} />
                              <Text style={{fontSize: 26,marginLeft: 10}}>1.131 FIO</Text>
                          </View>
                          <View>
                                 <Image
                                source={{ uri : 'https://www.shareicon.net/data/512x512/2016/07/26/802043_man_512x512.png'}}
                                style={{ backgroundColor: "#425CC7", height: 30, width: 30, borderRadius: 15 }}
                                 /> 
                          </View>
                      </View>

                      <Text style={{color: '#425CC7',fontSize: 24,marginLeft: 30}}>Send From</Text>
                       
                      <View style={{flexDirection: 'row',marginTop: 10,justifyContent: 'space-between',padding: 10,borderRadius: 8,
                        marginLeft: 30,marginRight: 30,borderWidth: 0.3,height: 50,borderColor: 'gray'}}>
                        <Text style={{fontSize: 18,fontWeight: 'bold'}}>marlon@xzenbox</Text>
                        <Image source={require('../images/downArroeLIght.png')} style={{ height: 15, width: 15,marginTop:5 }} />
                      </View>

                      <Text style={{color: '#425CC7',fontSize: 24,marginLeft: 30,marginTop: 20}}>Choose Currency</Text>
                       
                      <View style={{flexDirection: 'row',marginTop: 10,justifyContent: 'space-between',padding: 10,borderRadius: 8,
                        marginLeft: 30,marginRight: 30,borderWidth: 0.3,height: 50,borderColor: 'gray'}}>
                        <View style={{flexDirection: 'row'}}>
                        <Image source={require('../images/iconBlueF.png')} style={{ height: 25, width: 10, }} />
                            <Text style={{fontSize: 20,marginLeft: 10}}>FIO</Text>
                        </View>
                        <Image source={require('../images/downArroeLIght.png')} style={{ height: 15, width: 15,marginTop:5 }} />
                      </View>


                      <Text style={{color: '#425CC7',fontSize: 24,marginLeft: 30,marginTop: 20}}>Frequency</Text>
                      <View style={{flexDirection: 'row',marginLeft: 30,marginRight: 30,marginTop: 10}}>
                          <TouchableOpacity onPress={()=> this.once()} style={{borderWidth: 0.3,backgroundColor: this.state.once ? '#425CC7' : '#fff', width: 80,borderColor: 'gray',height: 30,padding: 5,borderRadius: 10}}>
                            <Text style={{fontSize: 14,color:this.state.once ? '#fff' : 'gray',textAlign: 'center'}}> Once </Text>
                          </TouchableOpacity>

                          <TouchableOpacity onPress={()=> this.weekly()} style={{borderWidth: 0.3,backgroundColor: this.state.weekly ? '#425CC7' : '#fff',width: 80,marginLeft: 10,borderColor: 'gray',height: 30,padding: 5,borderRadius: 10}}>
                            <Text style={{fontSize: 14,color:this.state.weekly ? '#fff' : 'gray',textAlign: 'center'}}> Weekly </Text>
                          </TouchableOpacity>

                          <TouchableOpacity onPress={()=> this.monthly()} style={{borderWidth: 0.3,backgroundColor: this.state.monthly ? '#425CC7' : '#fff',width: 80,marginLeft: 10,borderColor: 'gray',height: 30,padding: 5,borderRadius: 10}}>
                            <Text style={{fontSize: 14,color:this.state.monthly ? '#fff' : 'gray',textAlign: 'center'}}> Monthly </Text>
                          </TouchableOpacity>

                          <TouchableOpacity onPress={()=> this.yearly()} style={{borderWidth: 0.3,backgroundColor: this.state.yearly ? '#425CC7' : '#fff',width: 80,marginLeft: 10,borderColor: 'gray',height: 30,padding: 5,borderRadius: 10}}>
                            <Text style={{fontSize: 14,color:this.state.yearly ? '#fff' : 'gray',textAlign: 'center'}}> Yearly </Text>
                          </TouchableOpacity>

                      </View>
                  
                      <Text style={{color: '#425CC7',fontSize: 24,marginLeft: 30,marginTop: 20}}>What's This For?</Text>

                      <TextInput 
                      placeholder= 'Say Something'
                      style={{marginLeft: 30,marginRight:30,marginTop:10,borderWidth: 0.3,height: 90,borderRadius: 10,borderColor: 'gray',fontSize: 24,padding: 10}}
                      />

                      <TouchableOpacity onPress={()=>this.payInvoice()} style={{marginTop:20, justifyContent: 'center',alignSelf: 'center',height:60,width: '85%',backgroundColor: '#425CC7',borderRadius:30,}}>
                        <Text style={{padding: 10,
                        textAlign: 'center',color: '#fff',fontSize: 20,textAlignVertical: 'center'}}>Pay Invoice</Text>
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
      marginTop: 30 
    },
    
  }

