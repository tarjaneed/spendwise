import React, { useState, useEffect } from 'react';
import { Text, View, TextInput, TouchableOpacity, Button, FlatList, ActivityIndicator, Alert } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import moment from 'moment';

import { collection, addDoc, query, onSnapshot, doc, getDoc, updateDoc } from 'firebase/firestore';

import { db } from '../../firebase';

import { styles } from './Styles';

const AddTransactionScreen = ({ navigation }) => {

    const [amount, setAmount] = useState('');
    const [comment, setComment] = useState('');
    const [category, setCategory] = useState(null);
    const [date, setDate] = useState(moment(new Date()).format('YYYY-MM-DD'));
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);

    const handleTextChange = (text) => {
        if (!text.startsWith('$')) {
            text = '$' + text;
        }
        setAmount(text);
    };

    // Lists Categories
    useEffect(() => {
        const q = query(collection(db, 'categories'));
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
        } else if (!Object.keys(category).length) {
            Alert.alert('Category cannot be empty!');
            return;
        }

        let amountValue = amount.replace('$', '');

        try {
            setLoading(true);
            await addDoc(collection(db, 'transactions'), {
                amount: amountValue,
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
            // Reset date after datepicker changes
            setLoading(false);
            navigation.navigate('Dashboard');
        } catch (err) {
            console.log(err);
            setLoading(false);
            Alert.alert('An error occured while adding a transaction.')
        }
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
                                    { marginRight: 30 },
                                ]}>
                                <View style={styles.textContainer}>
                                    <Text style={styles.dateText}>
                                        12/21
                                    </Text>
                                    <Text style={styles.dateText}>Yesterday</Text>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={[
                                    styles.dateBox,
                                    { marginRight: 30 },
                                ]}>
                                <View style={styles.textContainer}>
                                    <Text style={styles.dateText}>
                                        12/20
                                    </Text>
                                    <Text style={styles.dateText}>Today</Text>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={[
                                    styles.dateBox,
                                    { marginRight: 30 },
                                ]}>
                                <View style={styles.textContainer}>
                                    <Text style={styles.dateText}>
                                        12/19
                                    </Text>
                                    <Text style={styles.dateText}>Tomorrow</Text>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={styles.calendarIcon}
                                onPress={() => {
                                    alert('');
                                }}>
                                <FontAwesome
                                    name="calendar"
                                    size={25}
                                    color={'#23c0f2'}
                                />
                            </TouchableOpacity>
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