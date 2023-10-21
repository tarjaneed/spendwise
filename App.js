import "react-native-gesture-handler";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import RootNavigator from "./Navigation/navigator";

export default function App() {
	return (
		<>
			{Platform.OS === "ios" && <StatusBar barStyle="default" />}
			<RootNavigator login={false} />
		</>
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