import React, {Component} from 'react';
import { View, SafeAreaView} from 'react-native';
import AppNavigator from './src/navigation/AppNavigation';
import {  } from 'react-native-safe-area-context';


export default class App extends Component{
  render() {
    console.disableYellowBox = true;

    return (
      <SafeAreaView style={{ flex: 1}}>
       <AppNavigator />
      </SafeAreaView>
    
    );
  }
}
