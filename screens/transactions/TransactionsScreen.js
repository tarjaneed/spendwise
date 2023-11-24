import { Text, View, TouchableOpacity, FlatList, landscape } from 'react-native';
import { useEffect, useState } from 'react';
import { styles } from './Styles';
import moment from 'moment';

import { db } from '../../firebase';
import { collection, query, onSnapshot, orderBy } from 'firebase/firestore';

const TransactionsScreen = ({ }) => {

	const [loading, setLoading] = useState(false);
	const [transactions, setTransactions] = useState([]);
	const [sortField, setSortField] = useState('amount');

	// Lists transactions
	useEffect(() => {
		const q = query(collection(db, 'transactions'), orderBy(sortField, 'desc'));
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

	const handleDelete = (itemId) => {
		const updatedTransactions = transactions.filter(item => item.id !== itemId);
		setTransactions(updatedTransactions);
	  };

	const renderItem = ({ item }) => (
		<TouchableOpacity style={styles.card}
		onLongPress={() => handleDelete(item.id)}>
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
			<ActivityIndicator style={styles.loader} size={'large'} />
		);
	} else {
		return (
			<View style={{ flex: 1 }}>
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