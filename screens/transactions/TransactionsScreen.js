import { Text, View } from 'react-native';
import { styles } from './Styles';

const TransactionsScreen = ({ navigation }) => {
	return (
		<View style={styles.container}>
            <Text>List of Transactions</Text>
		</View>
	);
};
  

export default TransactionsScreen;