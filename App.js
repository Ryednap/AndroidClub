import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet, Text, View, TextInput, AppRegistry, ImageBackground, Image,
  TouchableOpacity
} from 'react-native';


export default function App() {
  return (
    <ImageBackground
      style={[styles.background, styles.container]}
      resizeMode="cover"
      source={require('./bcg23_page2.jpg')}
    >
      <View style={styles.container} />
      <View style={styles.wrapper}>
        <View style={styles.inputWrap}>
          <View style={styles.iconWrap}>
            <Image
              source={require('./user.png')}
              style={styles.icon}
              resize="contain"
            />
          </View>
          <TextInput
            placeholder="username"
            style={styles.input}
            underlineColorAndroid="transparent"
          />
        </View>
        <View style={styles.inputWrap}>
          <View style={styles.iconWrap}>
            <Image
              source={require('./lock.png')}
              style={styles.icon}
              resize="contain"
            />
          </View>
          <TextInput
            placeholder="password"
            secureTextEntry
            style={styles.input}
            underlineColorAndroid="transparent"
          />
        </View>
        <TouchableOpacity activeOpacity={.5}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Login</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.container} />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    width: null,
    height: null,
  },
  inputWrap: {
    flexDirection: "row",
    marginVertical: 10,
    height: 40,
    backgroundColor: "transparent",

  },
  wrapper: {
    paddingHorizontal: 18,
  },
  input: {
    flex: 1,
    paddingHorizontal: 10,
    backgroundColor: '#FFFFFF'
  },
  iconWrap: {
    paddingHorizontal: 5,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: '#204196',
  },
  icon: {
    width: 25,
    height: 25,
  },
  button: {
    backgroundColor: '#c9861a',
    paddingVertical: 15,
    marginVertical: 15,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18
  }
});
