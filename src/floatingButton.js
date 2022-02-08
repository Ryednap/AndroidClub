import React, {Component} from 'react';
import { StyleSheet, View, TouchableOpacity, Dimensions, Text } from "react-native";;

export default class FloatingButton extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  render() {
    return (
      <View style={styles.body}>
        <TouchableOpacity
          style={styles.floatingActionButton}
          onPress={this.forward}>
          <Text>Start</Text>
        </TouchableOpacity>
      </View>
    );
  }

  forward = () => {
    console.log('Hello');
  };
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
  },
  floatingActionButton: {
    position: 'absolute',
    bottom: 20,
    left: Dimensions.get('window').width / 2.5,
    flex: 1,
    backgroundColor: '#de0b9f',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0,
    borderRadius: 200,
    width: 100,
    height: 100,
    elevation: 20.0,
    shadowOpacity: 1.0,
    shadowRadius: 1,
    shadowOffset: {width: 0.5, height: 1},
  },
});
