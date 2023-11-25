import { Text, View, TouchableOpacity, FlatList, landscape, Alert, ActivityIndicator } from 'react-native';
import { useContext, useEffect, useState } from 'react';
import { styles } from './Styles';
import moment from 'moment';
import DateTypeSelection from '../../components/dateTypeSelection/DateTypeSelection';

import { db } from '../../firebase';
import { collection, query, onSnapshot, orderBy, updateDoc, getDoc, deleteDoc, doc, where } from 'firebase/firestore';
import AuthContext from '../../context/AuthContext';

const TransactionsScreen = ({ }) => {

	const { userID } = useContext(AuthContext);
	const [loading, setLoading] = useState(false);
	const [transactions, setTransactions] = useState([]);
	const [sortField, setSortField] = useState('amount');
	const [tempTransactions, setTempTransactions] = useState([]);
	const [dateAndType, setdateAndType] = useState([]);
	const [date, setDate] = useState(new Date());

	// Lists transactions
	useEffect(() => {
		const q = query(collection(db, 'transactions'), where('userID', '==', userID), orderBy(sortField, 'desc'));
		const unsub = onSnapshot(q, (querySnapshot) => {
			let transactions = [];
			querySnapshot.forEach((doc) => {
				transactions.push({ ...doc.data(), id: doc.id });
			});

			setTransactions(transactions);
			setLoading(false);
		});

		// Unsubscribe from events when no longer in use
		return () => unsub();
	}, [sortField]);

	const sortTransactions = (property) => {
		setSortField(property);
	};

	const handleDelete = (transaction) => {
		Alert.alert(
			'Delete Transaction',
			'Are you sure you want to delete?',
			[
				{
					text: 'Yes',
					onPress: async () => {
						setLoading(true);
						try {
							await deleteDoc(doc(db, 'transactions', transaction.id));

							// Get doc based on categoryID
							const docRef = doc(db, 'categories', transaction.category.id);
							const docSnap = await getDoc(docRef);

							const categoryData = docSnap.data();

							// Update total for that doc
							const totalAmount = parseFloat(categoryData.total) - parseFloat(transaction.amount);
							categoryData.total = totalAmount;

							await updateDoc(doc(db, 'categories', transaction.category.id), categoryData);
							setLoading(false);
						} catch (error) {
							Alert.alert('Error occured while deleting a transaction.', error);
							setLoading(false);
						}
					},
					style: 'default',
				},
				{
					text: 'No',
					style: 'cancel',
				},
			],
			{
				cancelable: true,
			},
		);
	};

	const handleDateFilter = (type, value) => {
		setdateAndType([type, value]);
		switch (type) {
		  case 'Day':
			setTransactions(
			  tempTransactions.filter(
				item =>
				  new Date(item.transactionDate).toLocaleDateString() ===
				  value.toLocaleDateString(),
			  ),
			);
			break;
		  case 'Month':
			setTransactions(
			  tempTransactions.filter(item => {
				let date = new Date(item.transactionDate);
				return (
				  date.getMonth() === value.getMonth() &&
				  date.getFullYear() === value.getFullYear()
				);
			  }),
			);
			break;
		  case 'Year':
			setTransactions(
			  tempTransactions.filter(
				item => new Date(item.transactionDate).getFullYear() === value,
			  ),
			);
			break;
		}
	  };

	const renderItem = ({ item }) => (
		<TouchableOpacity style={styles.card}
			onLongPress={() => handleDelete(item)}>
			<View style={styles.cardDate}>
				<View>
					<Text style={styles.text}>
						{moment(new Date(item.date)).format('DD')}
					</Text>
					<Text style={styles.text}>
						{moment(new Date(item.date)).format('MMM')}
					</Text>
				</View>
				<View style={styles.divider} />
			</View>
			<View style={[styles.color, { backgroundColor: item.category.color }]} />
			<View style={styles.cardText}>
				<Text style={styles.text}>{item.category.name}</Text>
				<Text style={{ color: 'grey' }}>
					{item.note === '' ? 'N/A' : item.notes}
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

	if (loading) {
		return (
			<ActivityIndicator style={styles.spinner} pointerEvents={'none'} size={'large'} />
		);
	} else {
		return (
		<View style={{ flex: 1 ,backgroundColor: '#f0ffff'}}>
  			<View style={[styles.dateContainer, landscape && {flex: 2}]}>
                  <DateTypeSelection
                    date={date}
                    sendDateToHome={handleDateFilter}
                  />
                </View>
				<View style={[styles.dataContainer, landscape && { flex: 3 }]}>
					<FlatList
						data={transactions}
						keyExtractor={item => item.id}
						renderItem={renderItem}
					/>
				</View>

				<View style={[styles.footer, landscape && { flex: 1 }]}>
					<TouchableOpacity
						style={[styles.sortButtons, styles.buttonDivider]}
						onPress={() => sortTransactions('date')}
					>
						<Text style={styles.footerText}>Sort by Date</Text>
					</TouchableOpacity>
					<TouchableOpacity
						style={styles.sortButtons}
						onPress={() => sortTransactions('amount')}
					>
						<Text style={styles.footerText}>Sort by Amount</Text>
					</TouchableOpacity>
				</View>
			</View>
		);
	}
};

export default TransactionsScreen;