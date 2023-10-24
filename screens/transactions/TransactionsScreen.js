import { useContext } from 'react';
import { Text, View, Image ,TouchableOpacity} from 'react-native';
import { styles } from './Styles';

import AuthContext from '../../context/AuthContext';

const TransactionsScreen = ({ navigation }) => {

	const { signOut } = useContext(AuthContext);

	return (
		<View style={styles.container}>
            <Text>List of Transactions</Text>
		</View>
	);
};
  

export default TransactionsScreen;