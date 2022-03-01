import React, {Component} from 'react';
import {View, Button} from 'react-native';

export default Component1  = (props) => {
	return (
		<View>
			<Button 
				title="Navigate to second component"
				onPress={() => {
					props.navigation.navigate('Component2')
				}}
			/>
		</View>
	);
}