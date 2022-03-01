import React from 'react';
import {View, Button} from 'react-native';

export default Component2 = (props) => {
  return (
    <View>
      <Button
        title='Navigation to second component'
        onPress={() => props.navigation.navigate('Component3')} 
      />
    </View>
  );
}
