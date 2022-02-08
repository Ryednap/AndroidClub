import React, {Component} from 'react';
import {
  Dimensions,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import FloatingButton from './floatingButton';

export default class FrontPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ImageBackground
        source={require('../assets/front_bcg.jpg')}
        style={styles.background}>
        <View style={styles.container}>
          <View style={styles.textCover}>
            <Text style={styles.text1}> Online </Text>
            <Text style={styles.text2}> Banking </Text>
          </View>
          <FloatingButton />
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  background: {
    width: null,
    height: null,
    resizeMode: 'cover',
    flex: 1,
  },
  textCover: {
    // eslint-disable-next-line no-bitwise
    left: Dimensions.get('window').width >> 2,
    top: Dimensions.get('window').height / 3,
  },
  text1: {
    color: '#ed6c15',
    fontFamily: 'Open Sans',
    fontSize: 44,
    fontStyle: 'italic',
    fontWeight: '800',
    left: 20,
  },
  text2: {
    color: '#ed6c15',
    fontFamily: 'Open Sans',
    fontSize: 44,
    fontStyle: 'italic',
    fontWeight: '800',
  },
});
