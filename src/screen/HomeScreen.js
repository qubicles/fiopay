import React, { Component } from 'react';
import { View, Text, ScrollView, Image,Modal ,TouchableOpacity, TextInput } from 'react-native';

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
       creatPayment: '',
       isModalVisible: true,
       search: '',
       visible: '',
       text: ''
    };
  }

  invoiceToPay = () =>{
    this.props.navigation.navigate('InvoiceToPay')
  }

  createPayment = () =>{
    this.setState({creatPayment: !this.state.creatPayment})
  }

  paySubscription = () =>{
    this.setState({creatPayment: false})
    this.props.navigation.navigate('PaySubscription')
  }

  requestPayment = () =>{
    this.setState({creatPayment: false})
    this.props.navigation.navigate('RequestScreen')
  }

  searchBar = () =>{
   this.setState({search: !this.state.search})
   this.setState({visible: !this.state.visible})
  }

  recurringPayment = () =>{
    this.props.navigation.navigate('RecurringPayment')
  }

  profileScreen =() =>{
    this.props.navigation.navigate('Contact')
  }

  render() {
    return (
      <ScrollView style={{ flex: 1, padding: 21 }}>
        <View style={styles.headerstyle}>
          <TouchableOpacity onPress={() => this.props.navigation.navigate("ProfileScreen")}>
            <Image
                 source={{ uri : 'https://www.shareicon.net/data/512x512/2016/07/26/802043_man_512x512.png'}}
                 style={{ backgroundColor: "#4099DC",  height: 40, width: 40, borderRadius: 20 }}
            />
          </TouchableOpacity>
         
          <View style={{ flexDirection: 'row',  }}>
                {this.state.search ?  null :
                <TouchableOpacity>
                  <Image source ={require('../images/bell.png')}
                    style={{  height: 44, width: 44 }}
                  />
                </TouchableOpacity>
                } 

              {this.state.visible ? 
              <View style={styles.SectionStyle}>
                  <TextInput
                    style={{ flex: 1 ,fontSize:18,padding:10}}
                    placeholder="Search"
                    underlineColorAndroid="transparent"
                  />
                  <TouchableOpacity onPress={()=>this.searchBar()}>
                  <Image source={require('../images/search.png')}
                    style={styles.ImageStyle}
                  />
                  </TouchableOpacity>
              </View> :
                <TouchableOpacity onPress={()=>this.searchBar()} >
                  <Image source={require('../images/search.png')}
                    style={{ height: 44, width: 44 , marginLeft:10 }}
                  />
                </TouchableOpacity>
              }
          </View>
        </View>

        <View style={styles.cardStyle}>
          <View style={{ margin: 15, alignSelf: 'flex-start' }}>
              <View style={{flexDirection: 'row',justifyContent: 'space-between'}}>
                <View>
                  <Text style={{ fontSize: 20,fontFamily: 'ProximaNova-Bold', color: "#fff", alignSelf: 'center', marginTop: 10 }}>
                    Available Balance
                  </Text>
                </View>

                <View style={{flexDirection: 'row',left: '20%'}}>
                  <Image source ={require('../images/iconWhiteF.png')}
                    style={{ height: 20, width: 8.4 ,marginTop: 12 }}
                    />
                    <Text style={{ fontSize: 20,marginLeft:6,  color: "#fff", alignSelf: 'center', marginTop: 10,fontFamily: 'ProximaNova-Medium' }}>FIOPay</Text>
                </View>
              </View>

                <Text style={{ fontSize: 36, fontFamily: 'ProximaNova-Bold', color: "#fff", textAlign: 'left', marginTop: 10 }}>
                  $7.53
                </Text>
          </View>

          <View
            style={{
              width: "100%", height: 54,
              backgroundColor: '#4099DC', alignItems: 'center', justifyContent: 'center',
              position: 'absolute',flexDirection: 'row',justifyContent: 'space-between',
              bottom: 0, borderBottomLeftRadius: 10,padding:15,borderBottomRightRadius:10
            }}>

            <Text style={{ fontSize: 20,  fontFamily: 'ProximaNova-Bold', color: "#fff", alignSelf: 'center' }}>
              marlon@zenblocks
            </Text>
            <Image source={require('../images/downArrow.png')} style={{width:17, height: 11}} />
          </View>

        </View>

        <View style={{ flexDirection: 'row', marginTop: 30, justifyContent: 'space-between', }}>

          <Text style={{ color: "#404040", fontSize: 24 ,fontFamily: 'ProximaNova-Extrabld'}}>
            Recent Payments
          </Text>

         <TouchableOpacity onPress={()=>this.recurringPayment()}>
            <Text style={{ color: "#404040",marginTop:5, fontSize: 18,fontFamily: 'ProximaNova-Semibold'}}>
              View All
            </Text>
          </TouchableOpacity>
        </View>

        <View style={{ flexDirection: "row", justifyContent: 'space-around',marginTop:22 }}>
            <View style={{ backgroundColor: "#425CC7", height: 165, width: "48%", borderRadius: 10, }}>
              <View style={{flexDirection: 'row',justifyContent: 'space-between',paddingLeft: 14,paddingRight: 14, paddingTop: 16}}>
                <View>
                  <TouchableOpacity onPress={()=>this.profileScreen()}>
                    <Image
                          source={{ uri : 'https://www.shareicon.net/data/512x512/2016/07/26/802043_man_512x512.png'}}
                          style={{ backgroundColor: "#4099DC",  height: 44, width: 44, borderRadius: 30 }}
                      />
                  </TouchableOpacity>
                  <Text style={{ color: "#fff", alignSelf: 'center',marginTop:10, fontSize: 18, fontFamily: 'ProximaNova-Extrabld'}}>
                    Kevin
                  </Text>
                </View>
                <Image source={(require('../images/fadeF.png'))} style={{width:25, height:60}}/>
              </View>

              <Text style={{color: '#fff',fontSize: 24,paddingLeft: 14,paddingRight: 14,marginTop: 5,fontFamily: 'ProximaNova-Extrabld'}}>- 2.240 FIO</Text>
              <Text style={{color: '#fff',fontSize: 14,paddingLeft: 14,paddingRight: 14,marginTop: 5,fontFamily: 'ProximaNova-Semibold'}}>August 8th,2020</Text>
            </View>

            <View style={{ backgroundColor: "#4AA8ED", height: 165,marginLeft:10, width: "48%", borderRadius: 10, justifyContent: 'center'}}>
            <View style={{flexDirection: 'row',justifyContent: 'space-between',paddingLeft: 14,paddingRight: 14, }}>
                <View>
                  <TouchableOpacity onPress={()=>this.profileScreen()}>
                    <Image
                          source={{ uri : 'https://www.shareicon.net/data/512x512/2016/07/26/802043_man_512x512.png'}}
                          style={{ backgroundColor: "#4099DC",  height: 44, width: 44, borderRadius: 30 }}
                      />
                  </TouchableOpacity>
                  <Text style={{ color: "#fff", alignSelf: 'center',marginTop:10, fontSize: 18,fontFamily: 'ProximaNova-Extrabld'}}>
                    Marlon
                  </Text>
                </View>
                <Image source={(require('../images/fadeSecond.png'))} style={{width:37, height:60}}/>
              </View>
              <Text style={{color: '#fff',fontSize: 24,paddingLeft: 14,paddingRight: 14,marginTop: 5,fontFamily: 'ProximaNova-Extrabld'}}>+ 2.24 ETH</Text>
              <Text style={{color: '#fff',fontSize: 14,paddingLeft: 14,paddingRight: 14,marginTop: 5,fontFamily: 'ProximaNova-Semibold'}}>August 9th,2020</Text>
            </View>

        </View>
 
       <TouchableOpacity onPress={()=>this.createPayment()}>
            <View style={{width: '100%',height: 64,overflow: 'hidden',borderRadius: 10,backgroundColor: '#4AA8ED',
              position: 'relative',flexDirection: 'row',justifyContent: 'space-between',padding: 18,marginTop: 22}}>
                  <View style={{width: '30%',height: 80,position: 'absolute',right: -20,top: -10,backgroundColor: '#4099dc',transform: [{skewY: '-10deg'}]}} />
                  <Text style={{ fontSize: 24, color: "#fff",marginLeft:10,fontFamily: 'ProximaNova-Extrabld'}}>Create Payment</Text>
                  <Image source={require('../images/plus.png')} style={{width:17,height:17,marginTop: 10,marginRight: 10}}/>
            </View>
       </TouchableOpacity>

         <Text style={{ color: "#404040", fontSize: 24, marginTop: 30,fontFamily: 'ProximaNova-Extrabld' }}>
          Invoices To Pay
        </Text>
   
         <View  style={ styles.invoiceStyle}>
           <View style={{flexDirection: 'row',justifyContent: 'space-between'}}>
              <TouchableOpacity onPress={() => this.props.navigation.navigate("Contact")} >
                  <View style={{flexDirection: "row", alignItems: 'center',padding: 15, }}>
                  <Image
                        source={{ uri : 'https://www.shareicon.net/data/512x512/2016/07/26/802043_man_512x512.png'}}
                        style={{ backgroundColor: "#4099DC",  height: 44, width: 44, borderRadius: 25 }}
                    />
                    
                    <View style={{marginLeft: 10}}>
                      <Text style={{fontSize: 16, fontFamily: 'ProximaNova-Bold'}}>Marlon</Text>
                      <Text style={{fontSize: 14,marginTop: 5,fontFamily: 'ProximaNova-Medium'}}>marlon@zenblocks</Text>
                    </View>
                  </View>
              </TouchableOpacity>
              
              <TouchableOpacity onPress={()=>this.invoiceToPay()}>
                  <View style={{backgroundColor: '#419bde',width: 110,height: 72, borderRadius:10,flexDirection: 'row', alignItems: 'center'}}>
                  <Image source ={require('../images/iconWhiteF.png')}
                    style={{ height: 30, width: 12 ,marginLeft: 15 }}
                    />
                    <View style={{marginLeft:18,}}>
                      <Text style={{fontSize: 12,color: '#fff',fontFamily: 'ProximaNova-Extrabld'}}>Aug 22</Text>
                      <Text style={{fontSize: 12,color: '#fff',marginTop: 5,fontFamily: 'ProximaNova-Semibold'}}>1.131 FIO</Text>
                    </View>
                  </View>
              </TouchableOpacity>
            </View>
          </View>
       
          <View style={ [styles.invoiceStyle, {marginTop:10}]}>
            <View style={{flexDirection: 'row',justifyContent: 'space-between'}}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate("Contact")}>
              <View style={{flexDirection: "row", alignItems: 'center',padding: 15, }}>
              <Image
                        source={{ uri : 'https://www.shareicon.net/data/512x512/2016/07/26/802043_man_512x512.png'}}
                        style={{ backgroundColor: "#4099DC",  height: 44, width: 44, borderRadius: 25 }}
                    />
                
                <View style={{marginLeft: 10}}>
                      <Text style={{fontSize: 16, fontFamily: 'ProximaNova-Bold'}}>Chrisy</Text>
                      <Text style={{fontSize: 14,marginTop: 5,fontFamily: 'ProximaNova-Medium'}}>chrisy@wdw</Text>
                </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() =>this.invoiceToPay()}>
              <View style={{backgroundColor: '#4099DC',width: 110,height: 72,borderRadius:10,flexDirection: 'row',padding:5, alignItems: 'center'}}>
              <Image source ={require('../images/iconWhiteD.png')}
                  style={{ height: 30, width: 18 ,marginLeft: 10   }}
                  />
                  
                  <View style={{marginLeft:13,}}>
                      <Text style={{fontSize: 12,color: '#fff',fontFamily: 'ProximaNova-Extrabld'}}>Aug 22</Text>
                      <Text style={{fontSize: 12,color: '#fff',marginTop: 5,fontFamily: 'ProximaNova-Semibold'}}>1.131 ETH</Text>
                    </View>
              </View>
            </TouchableOpacity>
            </View>
            </View> 

            <Text style={{ color: "#404040", fontSize: 24, marginTop: 30,fontFamily: 'ProximaNova-Extrabld' }}>
              Tokens
            </Text>
                
            <View style={{ marginTop: 10,flexDirection: 'row',  height: 60,justifyContent: 'space-between'}}>
              <View style={{flexDirection: 'row',}}>
                <Image source ={require('../images/imageF.png')}style={{ height: 44, width: 44 , }}/>
                <Text style={{ fontSize: 20, padding:10, color:'#404040',fontFamily: 'ProximaNova-Extrabld'}}>FIO</Text>
              </View>

              <View style={{marginBottom:5,}}>
                <Text style={{ fontSize: 16,color: 'gray' ,fontFamily: 'ProximaNova-Extrabld'}}>7.2104</Text>
                <Text style={{ fontSize: 16,marginTop:5 ,fontFamily: 'ProximaNova-Extrabld'}}>$216.30</Text>
              </View>
            </View>

            <View style={{ marginTop: 10, flexDirection: 'row',  height: 60,justifyContent: 'space-between'}}>
              <View style={{flexDirection: 'row'}}>
                <Image source ={require('../images/imageB.png')}style={{ height: 44, width: 44 , }}/>
                <Text style={{ fontSize: 20, padding:10,color:'#404040',fontFamily: 'ProximaNova-Extrabld'}}>BTC</Text>
              </View>

              <View style={{marginBottom:5}}>
                <Text style={{ fontSize: 16,color: 'gray',fontFamily: 'ProximaNova-Extrabld' }}>0.0104</Text>
                <Text style={{ fontSize: 16,marginTop:5 ,fontFamily: 'ProximaNova-Extrabld' }}>$216.30</Text>
              </View>
            </View>

            <View style={{ marginTop: 10, flexDirection: 'row',  height: 60,justifyContent: 'space-between'}}>
              <View style={{flexDirection: 'row'}}>
                <Image source ={require('../images/imageD.png')}style={{ height: 44, width: 44 , }}/>
                <Text style={{ fontSize: 20, padding:10,color:'#404040',fontFamily: 'ProximaNova-Extrabld'}}>ETH</Text>
              </View>

              <View style={{marginBottom:5}}>
                <Text style={{ fontSize: 16,color: 'gray',fontFamily: 'ProximaNova-Extrabld' }}>14.2104</Text>
                <Text style={{ fontSize: 16,marginTop:5 ,fontFamily: 'ProximaNova-Extrabld' }}>$216.30</Text>
              </View>
            </View>

            <View style={{flexDirection: 'row',justifyContent: 'space-between',marginTop:10}}>
              <Text style={{ color: '#404040', fontSize: 24, marginTop: 20 ,fontFamily: 'ProximaNova-Extrabld'}}>
                Contacts
              </Text>
              <Text style={{ color: '#404040', fontSize:18, marginTop: 20,fontFamily: 'ProximaNova-Semibold' }}>
                View All
              </Text>
            </View>

<ScrollView horizontal={true}>
            <View style={{ marginTop: 15,flexDirection: 'row',marginBottom: 30}}>

          
            
            <TouchableOpacity onPress={() => this.props.navigation.navigate("Contact")} style={{marginLeft:5,shadowOffset: { width: 5, height: 5, },
                  shadowColor: '#ddd', shadowOpacity: 1.0, elevation: 1, height: 107, width: 79, backgroundColor: "#005cb9", borderRadius: 10,}}>
                  <View
                  style={{ backgroundColor: "#fff",padding:10, height: "85%", width: "100%",alignItems: 'center',borderTopLeftRadius:10,borderTopRightRadius:10}}
                  >
                  <Image
                    source={{ uri : 'https://www.shareicon.net/data/512x512/2016/07/26/802043_man_512x512.png'}}
                    style={{backgroundColor: "#4099DC", height: 44, width: 44, borderRadius: 22, }}/>
                    <Text style={{fontSize:16,marginTop:10}}>  Marlon  </Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => this.props.navigation.navigate("Contact")} style={{marginLeft:15,shadowOffset: { width: 5, height: 5, },
                  shadowColor: '#ddd', shadowOpacity: 1.0, elevation:1, height: 107, width: 79, backgroundColor: "#00a0df", borderRadius: 10,}}>
                  <View
                  style={{ backgroundColor: "#fff",padding:10, height: "85%", width: "100%",alignItems: 'center',borderTopLeftRadius:10,borderTopRightRadius:10}}
                  >
                  <Image
                    source={{ uri : 'https://www.shareicon.net/data/512x512/2016/07/26/802043_man_512x512.png'}}
                    style={{backgroundColor: "#4099DC", height: 44, width: 44, borderRadius: 22, }}/>
                    <Text style={{fontSize:16,marginTop:10}}>  Kevin  </Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => this.props.navigation.navigate("Contact")} style={{marginLeft:15,shadowOffset: { width: 5, height: 5, },
                  shadowColor: '#ddd', shadowOpacity: 1.0, elevation: 1, height: 107, width: 79, backgroundColor: "#425cc7", borderRadius: 10,}}>
                  <View
                  style={{ backgroundColor: "#fff",padding:10, height: "85%", width: "100%",alignItems: 'center',borderTopLeftRadius:10,borderTopRightRadius:10}}
                  >
                  <Image
                    source={{ uri : 'https://www.shareicon.net/data/512x512/2016/07/26/802043_man_512x512.png'}}
                    style={{backgroundColor: "#4099DC", height: 44, width: 44, borderRadius: 22, }}/>
                    <Text style={{fontSize:16,marginTop:10}}>  Chrisy  </Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => this.props.navigation.navigate("Contact")} style={{ marginLeft:15,shadowOffset: { width: 5, height: 5, },
                  shadowColor: '#ddd', shadowOpacity: 1.0, elevation: 1, height: 107, width: 79, backgroundColor: "#4aa8ed", borderRadius: 10,}}>
                  <View
                  style={{ padding:10, height: "85%", width: "100%",alignItems: 'center',justifyContent: 'center'}}
                  >
                  <Image source={require('../images/add.png')} style={{height:44,width:44, marginTop:20 }}/>
                    <Text style={{fontSize:20,marginTop:10,color: '#fff'}}>  New  </Text>
                </View>
            </TouchableOpacity>

            </View>
            </ScrollView>

            {this.state.creatPayment ? <Modal
          animationType={"slide"}
          transparent
          visible={this.state.isModalVisible}
          onRequestClose={() => {alert("Modal has been closed.")}}
          >

        <View style={{flex: 1,backgroundColor: 'rgba(0,0,0,0.3)'}}>
          <View style ={{flex:1, justifyContent: 'flex-end'}}>
              <View style={{backgroundColor: '#ffffff', width: '100%', height: '45%',borderTopLeftRadius:50,borderTopRightRadius: 50}}>
                  <Text style={{fontSize: 28, fontFamily: 'ProximaNova-Extrabld',marginLeft:20,marginRight:20,textAlign: 'center',marginTop:30}}>Choose Payment Type</Text>
                
                <TouchableOpacity onPress={() =>this.paySubscription()}>
                  <View style={{flexDirection: 'row',justifyContent: 'space-between',marginLeft:30,marginRight:30,marginTop:30}}>
                    <View>
                      <Text style={{fontSize: 20,fontFamily: 'ProximaNova-Bold'}}>Pay Subscription</Text>
                      <Text style={{fontSize:12, color: 'gray',marginTop:3,fontFamily: 'ProximaNova-Medium'}}>Create an invoice to pay others</Text>
                    </View>
                    <View>
                      <Image source={require('../images/receive.png')} style={{ height: 44, width: 44 ,  marginRight: 7}}/>
                    </View>
                  </View>
                  </TouchableOpacity>

                <TouchableOpacity onPress={() =>this.requestPayment()}>
                  <View style={{flexDirection: 'row',justifyContent: 'space-between',margin:30,}}>
                    <View>
                      <Text style={{fontSize: 20,fontFamily: 'ProximaNova-Bold'}}>Request Payment</Text>
                      <Text style={{fontSize:12, color: 'gray',marginTop:3,fontFamily: 'ProximaNova-Medium'}}>Create a new subscription payment to you</Text>
                    </View>
                    <View>
                      <Image source={require('../images/sent.png')} style={{ height: 44, width: 44 ,  marginRight: 7}}/>
                    </View>
                  </View>
                </TouchableOpacity>
              </View>
      </View>
     </View>
    </Modal>
     : null }
      </ScrollView>
    )
  }
}

const styles = {
  headerstyle: {
    flexDirection: 'row',
    marginTop: 15,
    justifyContent: 'space-between',
    marginBottom:5
  },
  cardStyle: {
    backgroundColor: "#4AA8ED",
    height: 182,
    width: "100%",
    alignSelf: 'center',
    marginTop: 20,
    borderRadius: 7,
    shadowOffset: { width: 5, height: 5, },
    shadowColor: '#ddd',
    shadowOpacity: 1.0,
    elevation: 3
  },
  invoiceStyle: {
    height: 70,
    backgroundColor:"white",
    borderRadius:15,
    elevation:1,
    shadowColor: 'gray',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    borderWidth:0.2,
    borderRadius: 10,
    borderColor: '#fff',
    marginTop: 20 ,
    justifyContent: 'center',
  },
  SectionStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    height:50,
    borderRadius: 20,
    marginRight: 10,
    marginLeft:20,
    width: '85%',
    
  },
  ImageStyle: {
    height: 54,
    width: 44,
    resizeMode: 'stretch',
    alignItems: 'center',
    marginLeft:10
  },
}



