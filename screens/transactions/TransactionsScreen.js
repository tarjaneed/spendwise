import { Text, View, TouchableOpacity, FlatList, landscape, Alert, ActivityIndicator, Modal } from 'react-native';
import { useContext, useEffect, useLayoutEffect, useRef, useState } from 'react';

import DatePicker from 'react-native-modern-datepicker';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import moment from 'moment';

import { styles } from './Styles';

import { db } from '../../firebase';
import { collection, query, onSnapshot, orderBy, updateDoc, getDoc, deleteDoc, doc, where } from 'firebase/firestore';
import AuthContext from '../../context/AuthContext';

const TransactionsScreen = ({ navigation }) => {

	const { userID } = useContext(AuthContext);
	const [loading, setLoading] = useState(false);
	const [transactions, setTransactions] = useState([]);
	const [sortField, setSortField] = useState('date');
	const [date, setDate] = useState(new Date());
	const [showDatePicker, setShowDatePicker] = useState(false);

	const startDate = '2022-01-01';
	const [pickDate, setPickDate] = useState(null); // moment(new Date()).format('YYYY-MM')
	const [selectedStartDate, setSelectedStartDate] = useState(null); // moment(new Date()).format('YYYY-MM')
	const [startedDate, setStartedDate] = useState(startDate);
	const [filterStartDate, setFilterStartDate] = useState(null);
	const [filterEndDate, setFilterEndDate] = useState(null);

	useLayoutEffect(() => {
		navigation.setOptions({
			headerRight: () => (
				<FontAwesome
					style={{ paddingEnd: 10 }}
					name="filter"
					size={30}
					color={'#000000'}
					onPress={() => {
						setShowDatePicker(true);
					}}
				/>
			)
		});
	}, [navigation]);

	// Lists transactions
	useEffect(() => {
		setLoading(true);
		let q = query(collection(db, 'transactions'), where('userID', '==', userID));

		if (selectedStartDate) {
			if (sortField == 'date') {
				q = query(q, where('date', '>=', filterStartDate), where('date', '<=', filterEndDate));
			}
			else {
				q = query(q, orderBy('date'), where('date', '>=', filterStartDate), where('date', '<=', filterEndDate));
			} 
		}

		if (sortField) {
			q = query(q, orderBy(sortField, 'desc'));
		}

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
	}, [sortField, selectedStartDate]);

	const handleDateFilter = () => {
		setShowDatePicker(false);
		if (pickDate) {
			const filterDate = pickDate.replace(' ', '-');
			setFilterStartDate(`${filterDate}-01`);
			setFilterEndDate(`${filterDate}-31`);
			setSelectedStartDate(filterDate);
		}
	}

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

	const renderItem = ({ item }) => (
		<TouchableOpacity style={styles.card}
			onLongPress={() => handleDelete(item)}>
			<View style={styles.cardDate}>
				<View>
					<Text style={styles.text}>
						{moment(new Date(item.date)).format('DD')}
					</Text>
					<Text style={styles.text}>
						{moment(new Date(item.date)).format('MMM')}'{moment(new Date(item.date)).format('YY')}
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
			<View style={{ flex: 1, backgroundColor: '#f0ffff' }}>
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

				{/* Create modal for date picker */}
				<Modal
					animationType="slide"
					transparent={true}
					visible={showDatePicker}
				>
					<TouchableOpacity style={styles.centeredView} onPress={() => setShowDatePicker(false)}>
						<View style={styles.modalView}>
							<DatePicker
								mode="monthYear"
								minimumDate={startDate}
								selected={startedDate}
								onMonthYearChange={date => setPickDate(date)}
								options={styles.customOptions}
							/>

							<TouchableOpacity style={styles.doneView} onPress={pickDate && handleDateFilter}>
								<Text style={styles.doneText}>Done</Text>
							</TouchableOpacity>
						</View>
					</TouchableOpacity>
				</Modal>
			</View>
		);
	}
};

export default TransactionsScreen;