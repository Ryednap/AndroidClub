import React, { useContext, Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput
} from 'react-native';

import { AppContext } from '../provider/AppProvider';

const Component3 = () => {
  const bookItem = useContext(AppContext);

  return (
    <View style={styles.container}>
      <Text style={styles.bookName}> {bookItem.name} </Text>
      <Text style={styles.bookAuthor}> {bookItem.author}</Text>
      <Text style={styles.bookPrice}> Price : {bookItem.price} </Text>
      <TextInput
        style={styles.input}
        placeholder='price'
        onChangeText={price => bookItem.setPrice(price)}
        value={bookItem.price}
      />    
    </View>
  );
}

const styles = StyleSheet.create({
container: {
  alignItems: 'center',
  justifyContent: 'center',
  margin: 16
},
bookName: {
  fontSize: 24,
  fontWeight: 'bold',
  color: '#c91c6a'
},
bookAuthor: {
  fontSize: 22,
  margin: 16,
  color: 'blue'
},

bookPrice : {
  fontSize : 18,
  margin: 18,
  color : '#c9701c'
},

input: {
  height: 40,
  padding: 8,
  margin: 8,
  borderColor: 'gray',
  borderWidth: 1,
  fontSize: 20,
  width: 100
}
});

export default Component3;
