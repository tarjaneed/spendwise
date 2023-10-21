import { useContext } from 'react';
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';

import AuthContext from '../../context/AuthContext';

const Dashboardcreen = () => {

	const { signOut } = useContext(AuthContext);

	return (
		<View style={styles.container}>
			<TouchableHighlight onPress={() => {
				signOut();
			}}>
				<Text>Dashboard Screen ---- Click to logout</Text>
			</TouchableHighlight>
		</View>
	);
};
  
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});

export default Dashboardcreen;