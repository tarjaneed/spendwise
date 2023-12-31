import React, { useState, useEffect, useContext } from 'react';
import { Text, View, TextInput, TouchableOpacity, Button, FlatList, ActivityIndicator, Alert } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import moment from 'moment';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

import { collection, addDoc, query, onSnapshot, doc, getDoc, updateDoc, where } from 'firebase/firestore';

import { db } from '../../firebase';

import { styles } from './Styles';
import AuthContext from '../../context/AuthContext';


const AddTransactionScreen = ({ navigation }) => {

    const { userID } = useContext(AuthContext);
    const [amount, setAmount] = useState('');
    const [comment, setComment] = useState('');
    const [category, setCategory] = useState(null);
    const [date, setDate] = useState(moment(new Date()).format('YYYY-MM-DD'));
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [showDatePicker, setShowDatePicker] = useState(false);

    const handleTextChange = (text) => {
        if (!text.startsWith('$')) {
            text = '$' + text;
        }
        setAmount(text);
    };

    // Lists Categories
    useEffect(() => {
        const q = query(collection(db, 'categories'), where('userID', '==', userID));
        const unsub = onSnapshot(q, (querySnapshot) => {
            let categories = [];
            querySnapshot.forEach((doc) => {
                categories.push({ ...doc.data(), id: doc.id });
            });

            setCategories(categories);
            setLoading(false);
        });

        // Unsubscribe from events when no longer in use
        return () => unsub();
    }, []);

    const renderItem = ({ item }) => (
        <View style={{ marginLeft: 5 }}>
            <TouchableOpacity
                onPress={() => setCategory(item)}
                style={[styles.categoryBox, { borderColor: item.color }, { backgroundColor: category?.id === item?.id ? '#E6E6E6' : null }]}>
                <Text style={{ ...styles.categoryText, color: item.color }}>
                    {item.name}
                </Text>
            </TouchableOpacity>
        </View>
    );

    handleSubmit = async () => {
        if (amount === '') {
            Alert.alert('Amount cannot be empty!');
            return;
        } else if (comment.trim() === '') {
            Alert.alert('Comment cannot be empty!');
            return;
        } else if (category == null) {
            Alert.alert('Category cannot be empty!');
            return;
        }

        let amountValue = amount.replace('$', '');

        try {
            setLoading(true);
            await addDoc(collection(db, 'transactions'), {
                userID,
                amount: parseFloat(amountValue),
                date,
                category: {
                    id: category.id,
                    name: category.name,
                    color: category.color,
                },
                notes: comment,
            });

            // Get doc based on categoryID
            const docRef = doc(db, 'categories', category.id);
            const docSnap = await getDoc(docRef);

            const categoryData = docSnap.data();

            // Update total for that doc
            const totalAmount = parseFloat(categoryData.total) + parseFloat(amountValue);
            categoryData.total = totalAmount;

            await updateDoc(doc(db, 'categories', category.id), categoryData);

            // Reset form fields and navigate
            setAmount('');
            setCategory(null);
            setComment('');
            setDate(moment(new Date()).format('YYYY-MM-DD'));
            setLoading(false);
            navigation.navigate('Dashboard');
        } catch (err) {
            console.log(err);
            setLoading(false);
            Alert.alert('An error occured while adding a transaction.')
        }
    }

    handleSelectedDate = (seletedDate) => {
        return seletedDate == moment(date).format('YYYY-MM-DD').toString() ?
            '#808080' : '#E6E6E6';
    }

    return (
        loading ?
            <View style={styles.spinner} pointerEvents={'none'}>
                <ActivityIndicator size={'large'} />
            </View> :
            <View style={styles.container}>
                <View style={styles.topContainer}>
                    <TextInput
                        style={styles.amountField}
                        autoFocus={true}
                        placeholder="Amount"
                        keyboardType="decimal-pad"
                        value={amount}
                        onChangeText={handleTextChange}
                    />
                </View>

                <View style={{ marginHorizontal: 5 }}>
                    <Text style={styles.heading}>
                        Categories
                    </Text>
                </View>
                <View>
                    {loading ?
                        <ActivityIndicator style={styles.loader} size={'large'} /> :
                        <FlatList
                            numColumns={4}
                            data={categories}
                            keyExtractor={item => item.id}
                            renderItem={renderItem}
                        />
                    }
                </View>
                <View style={[styles.addButton, { backgroundColor: 'grey' }]}>
                    <Button
                        onPress={() => { navigation.navigate('Categories') }}
                        mode="contained"
                        title="+ Create"
                        color={'white'}
                    >
                    </Button>
                </View>

                <View style={{ marginHorizontal: 5 }}>
                    <Text style={styles.heading}>Date</Text>
                    <View style={styles.dateContainer}>
                        <View style={styles.dateBoxes}>
                            <TouchableOpacity
                                style={[
                                    styles.dateBox,
                                    { 
                                        marginRight: 30, 
                                        backgroundColor: handleSelectedDate(moment().subtract(1, 'days').startOf('day').format('YYYY-MM-DD').toString()),
                                    },
                                ]}
                                onPress={() => setDate(
                                    moment().subtract(1, 'days').startOf('day')
                                        .format('YYYY-MM-DD')
                                        .toString()
                                )
                                }
                            >
                                <View style={styles.textContainer}>
                                    <Text style={styles.dateText}>
                                        {moment().subtract(1, 'days').startOf('day').format('MM/DD')}
                                    </Text>
                                    <Text style={styles.dateText}>Yesterday</Text>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={[
                                    styles.dateBox,
                                    {
                                        marginRight: 30, 
                                        backgroundColor: handleSelectedDate(moment().format('YYYY-MM-DD').toString()),
                                    },
                                ]}
                                onPress={() => setDate(moment().format('YYYY-MM-DD'))}
                            >
                                <View style={styles.textContainer}>
                                    <Text style={styles.dateText}>
                                        {moment().format('MM/DD').toString()}
                                    </Text>
                                    <Text style={styles.dateText}>Today</Text>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={[
                                    styles.dateBox,
                                    { 
                                        marginRight: 30, 
                                        backgroundColor: handleSelectedDate(moment().add(1, 'days').format('YYYY-MM-DD').toString()),
                                    }
                                ]}
                                onPress={() => setDate(
                                    moment().add(1, 'days')
                                        .format('YYYY-MM-DD')
                                        .toString()
                                )
                                }
                            >
                                <View style={styles.textContainer}>
                                    <Text style={styles.dateText}>
                                        {moment().add(1, 'days').format('MM/DD')}
                                    </Text>
                                    <Text style={styles.dateText}>Tomorrow</Text>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={styles.calendarIcon}
                                onPress={() => {
                                    setShowDatePicker(true);
                                }}>
                                <FontAwesome
                                    name="calendar"
                                    size={25}
                                    color={'#23c0f2'}
                                />
                            </TouchableOpacity>

                            <DateTimePickerModal
                                isVisible={showDatePicker}
                                mode="date"
                                onConfirm={date => {
                                    setDate(moment(date).format('YYYY-MM-DD').toString());
                                    setShowDatePicker(false);
                                }}
                                onCancel={() => setShowDatePicker(false)}
                            />
                        </View>
                    </View>
                </View>

                <View style={{ marginHorizontal: 8 }}>
                    <Text style={styles.heading}>Note</Text>
                    <TextInput
                        style={styles.note}
                        placeholder="Comment"
                        value={comment}
                        onChangeText={(value) => setComment(value)}
                    />
                </View>

                <View style={styles.addButton}>
                    <Button
                        mode="contained"
                        title="Save"
                        color={'white'}
                        onPress={handleSubmit}
                    >
                    </Button>
                </View>
            </View>
    );
};

export default AddTransactionScreen;