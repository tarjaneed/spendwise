import { Text, View, TouchableOpacity, FlatList,landscape} from 'react-native';
import { styles } from './Styles';
import moment from 'moment';

const TransactionsScreen = ({ navigation }) => {
	const transactions = [
		{
			id: '1',
			transactionDate: '2023-11-01',
			categoryName: 'Groceries',
			note: 'Weekly groceries shopping',
			amount: 50.25,
		  },
		  {
			id: '2',
			transactionDate: '2023-11-05',
			categoryName: 'Transportation',
			note: 'Uber ride',
			amount: 15.50,
		  },
		  {
			id: '3',
			transactionDate: '2023-11-10',
			categoryName: 'Dining',
			note: 'Dinner at a restaurant',
			amount: 35.75,
		  },
		  {
			id: '4',
			transactionDate: '2023-11-15',
			categoryName: 'Entertainment',
			note: 'Movie tickets',
			amount: 20.00,
		  },
		  {
			id: '5',
			transactionDate: '2023-11-20',
			categoryName: 'Utilities',
			note: 'Electricity bill payment',
			amount: 75.00,
		  },
		  {
			id: '6',
			transactionDate: '2023-11-25',
			categoryName: 'Shopping',
			note: 'Clothing purchase',
			amount: 45.50,
		  },
      ];

	  const renderItem = ({item}) => (
		<TouchableOpacity /* onPress={() => setModalItem(item)} */ style={styles.card}>
		  <View style={styles.cardDate}>
			<View>
			  <Text style={styles.text}>
				{moment(new Date(item.transactionDate)).format('DD')}
			  </Text>
			  <Text style={styles.text}>
				{moment(new Date(item.transactionDate)).format('MMM')}
			  </Text>
			</View>
			<View style={styles.divider} />
		  </View>
		  <View style={styles.cardText}>
			<Text style={styles.text}>{item.categoryName}</Text>
			<Text style={{color: 'grey'}}>
			  {item.note === '' ? 'N/A' : item.note}
			</Text>
		  </View>
		  <View style={styles.cardAmount}>
			<Text style={styles.text}>
			{'$'}
			  {item.amount}
			</Text>
		  </View>
		</TouchableOpacity>
	  );	

	return (
		<View style={{flex: 1}}>
			 <View style={[styles.dataContainer, landscape && {flex: 3}]}>
                <FlatList
                  data={transactions}
                  keyExtractor={item => item.id}
                  renderItem={renderItem}
                />
              </View>

			  <View style={[styles.footer, landscape && {flex: 1}]}>
                <TouchableOpacity
                  style={[styles.sortButtons, styles.buttonDivider]}
                //  onPress={() => sortTransactions('transactionDate')}
				>
                  <Text style={styles.footerText}>Sort by Date</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.sortButtons}
                //  onPress={() => sortTransactions('amount')}
				  >
                  <Text style={styles.footerText}>Sort by Amount</Text>
                </TouchableOpacity>
              </View>
		</View>
	);
};
  

export default TransactionsScreen;