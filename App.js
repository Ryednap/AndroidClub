import React, {Component} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';


import {AppProvider} from './provider/AppProvider';
import Component1 from './src/Component1';
import Component2 from './src/Component2';
import Component3 from './src/Component3';

  const AppStack = createStackNavigator({
  Component1: {
    screen: Component1,
    navigationOptions: () => ({
      title: 'First Component',
    })
  },
  Component2: {
    screen: Component2,
    navigationOptions: () => ({
      title: 'Second Component',
    })
  },
  Component3: {
    screen: Component3,
    navigationOptions: () => ({
      title: 'Third Component',
    })
  },
});

const AppContainer = createAppContainer(AppStack);

const App = () => {
  return ( 
      <AppProvider>
          <AppContainer/>
      </AppProvider>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;