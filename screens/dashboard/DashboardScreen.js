import { useContext } from 'react';
import { Text, View, Image ,TouchableOpacity} from 'react-native';
import { styles } from './Styles';

import AuthContext from '../../context/AuthContext';

const Dashboardcreen = ({ navigation }) => {

	const { signOut } = useContext(AuthContext);

	return (
		<View style={styles.container}>
			<View style={styles.chartAndButton}>

			<View style={styles.chartImage}>
                <Image
                    source={require('../../assets/chart1.png')}
                    style={{ height: 180, width: 180, backgroundColor: '#f0ffff'}}
                />
            </View>

			<View style={styles.addTransactionBox}>
                <TouchableOpacity
                    onPress={() => {navigation.navigate('Add Transaction')}}
                    style={
                        styles.addTransactionBox
                    }>
                    <Text style={[styles.transactionText, { fontSize: 16, fontWeight: 'bold', color: '#fff' }]}>
                        + ADD TRANSACTION
                    </Text>
                </TouchableOpacity>
            </View>
			</View>


			<View style={styles.dataContainer}>
				<View style={styles.cardContent}>
			<Text style={{ ...styles.cardText, color: '#5F9EA0' }}>
                        Gift
                    </Text>
					</View>
					<View style={styles.cardContent}>
					<Text style={{ ...styles.cardText, color: '#6495ED' }}>
                        Education
                    </Text>
					</View>
					<View style={styles.cardContent}>
					<Text style={{ ...styles.cardText, color: '#FF7F50' }}>
                        Food
                    </Text>
					</View>
					<View style={styles.cardContent}>
					<Text style={{ ...styles.cardText, color: '#BDB76B' }}>
                        Travel
                    </Text>
					</View>
					<View style={styles.cardContent}>
					<Text style={{ ...styles.cardText, color: '#9932CC' }}>
                        Fitness
                    </Text>
					</View>
					<View style={styles.cardContent}>
					<Text style={{ ...styles.cardText, color: '#CD5C5C' }}>
                        Health
                    </Text>
					</View>
				
     		 </View>


			<View style={[styles.transactionText, {flex :1 }]}>
                <TouchableOpacity
               
					onPress={() => {
						signOut();
					}}
                    >
                    <Text style={[styles.transactionText, { fontSize: 16, fontWeight: 'bold', color: 'black' }]}>
                        Log Out
                    </Text>
                </TouchableOpacity>
               
            </View>
		</View>
	);
};
  

export default Dashboardcreen;