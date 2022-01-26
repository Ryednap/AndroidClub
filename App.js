import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import MaterialIcons from 'react-native-vector-icons/FontAwesome';
import ProgressCircle from 'react-native-progress-circle';

import setting from './settings';

class HomePage extends React.Component {
  state = {
    counter: 0,
  }

  render() {
    const counterVariable = this.state.counter;
    const percentVariable = (counterVariable / 10.0) * 100;
    return (
      <ImageBackground style={styles.background} source={require('./bcg.jpg')}>
        <View style={styles.container}>
          <ProgressCircle
            percent={percentVariable}
            radius={100}
            borderWidth={15}
            color="#8528c7"
            shadowColor="#aaa8e6"
            bgColor="#daf7f1"
            containerStyle={styles.progressContainer}
          >
            <Text style={styles.counter}>Counter: {counterVariable}</Text>
          </ProgressCircle>
          <TouchableOpacity
            style={styles.floatingActionButton}
            onPress={this.onIncrement}>
            <MaterialIcons name="plus" size={24} color="#eb3449" />
          </TouchableOpacity>
        </View>
      </ImageBackground >
    )
  }
  onIncrement = () => {
    console.log('Hello');
    this.setState({
      counter: this.state.counter + 1,
    })
  };

}

const AppContainer = createAppContainer(
  createStackNavigator({
    Home: {
      screen: HomePage,
      navigationOptions: () => ({
        title: setting.appName,

      }),
    }
  })
);

export default function App() {
  return (
    <AppContainer />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  background: {
    width: null,
    height: null,
    resizeMode: 'cover',
    flex: 1,
  },
  progressContainer: {
    shadowRadius: 1,
    elevation: 10,
    shadowOpacity: 1
  },
  floatingActionButton: {
    borderWidth: 1,
    borderColor: '#4616a6',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 18,
    right: 18,
    width: 80,
    height: 80,
    backgroundColor: '#93bcf5',
    borderRadius: 200,
    elevation: 15.0,
    shadowRadius: 1,
    shadowOffset: { width: 0.5, height: 1 },
    shadowOpacity: 1,
  },
  counter: {
    fontSize: 24,
    fontStyle: 'italic',
  },
});
