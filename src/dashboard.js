import React, {Component} from 'react';
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";


export default class Dashboard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ImageBackground
        source={require('../assets/dashboard_bcg.jpg')}
        style={styles.background}>
        <ImageBackground
          source={require('../assets/dashboard_top_img.jpg')}
          style={styles.topPallet}>
          <Text style={styles.topPalletRandomText}>*5395</Text>
          <Text style={styles.topPalletBalanceText}>Your balance</Text>
          <View style={styles.balance}>
            {/* eslint-disable-next-line react-native/no-inline-styles */}
            <Text style={{fontSize: 14, color: '#FFFFFF'}}>$ </Text>
            <Text style={{fontSize: 20, color: '#FFFFFF'}}>59,100</Text>
          </View>
        </ImageBackground>
        <ImageBackground source={require('../assets/white.png')} style={styles.bottomPallet}>
          <Text style={styles.horizontalLine}>______</Text>
          <Text
            style={{
              alignSelf: 'center',
              top: 25,
              fontWeight: 'bold',
              color: 'black',
              fontSize: 18,
              fontFamily: 'lobster',
            }}>
            {' '}
            Transactions{' '}
          </Text>

          <View style={styles.heroMode}>
            <Image source={require('../assets/character1-modified.png')} style={styles.heroAvatar}/>
            <View style={styles.heroDescription}>
              {/* eslint-disable-next-line react-native/no-inline-styles */}
              <Text style={{color: 'black', fontWeight: '600', fontSize: 12}}>
                Grim Reaper
              </Text>
              {/* eslint-disable-next-line react-native/no-inline-styles */}
              <Text style={{opacity: 0.5, fontSize: 11, top: 3}}>
                09 Jul 2020
              </Text>
            </View>
            <Text style={styles.heroBalance}>-$7.35</Text>
          </View>
          <View style={[styles.heroMode, {top: 50}]}>
            <Image
              source={require('../assets/spongeBob.jpg')}
              style={styles.heroAvatar}
            />
            <View style={styles.heroDescription}>
              {/* eslint-disable-next-line react-native/no-inline-styles */}
              <Text style={{color: 'black', fontWeight: '600', fontSize: 12}}>
                SpongeBob
              </Text>
              {/* eslint-disable-next-line react-native/no-inline-styles */}
              <Text style={{opacity: 0.5, fontSize: 11, top: 3}}>
                10 Jul 2021
              </Text>
            </View>
            <Text
              style={[
                styles.heroBalance,
                {opacity: 1, color: 'black', fontWeight: 'bold'},
              ]}>
              +$275
            </Text>
          </View>
        </ImageBackground>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  background: {
    height: null,
    width: null,
    flex: 1,
    resizeMode: 'cover',
  },
  topPallet: {
    height: 320,
    width: 250,
    resizeMode: 'cover',
    alignSelf: 'center',
    top: 50.0,
    overflow: 'hidden',
    borderRadius: 30,
  },
  topPalletBalanceText: {
    color: '#FFFFFF',
    fontFamily: 'Open Sans',
    fontWeight: '600',
    top: 200,
    left: 50,
    opacity: 0.8,
  },
  balance: {
    flexDirection: 'row',
    top: 210,
    left: 50,
  },
  topPalletRandomText: {
    fontSize: 16,
    color: '#FFFFFF',
    alignSelf: 'flex-end',
    right: 30,
    top: 25,
  },
  bottomPallet: {
    top: 150,
    height: 500,
    width: null,
    resizeMode: 'cover',
    borderRadius: 100.0,
    overflow: 'hidden',
    alignItems: 'flex-start',
  },
  horizontalLine: {
    color: 'grey',
    alignSelf: 'center',
    fontWeight: 'bold',
    top: 5,
    fontSize: 20,
  },
  heroMode: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    top: 40,
    left: 30,
  },
  heroAvatar: {
    height: 50,
    width: 50,
    borderRadius: 50,
  },
  heroDescription: {
    flexDirection: 'column',
    left: 10,
  },
  heroBalance: {
    fontSize: 18,
    fontWeight: '600',
    opacity: 0.6,
    justifyContent: 'center',
    left: 120,
  },

});
