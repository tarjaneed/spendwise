import React, { useState, useEffect } from 'react';
import { Text, View, TextInput, TouchableOpacity, Button, FlatList } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import { collection, query, onSnapshot} from 'firebase/firestore';

import { db } from '../../firebase';

import { styles } from './Styles';

const AddTransactionScreen = ({ navigation }) => {

    const [amount, setAmount] = useState('');
    const [comment, setComment] = useState('');
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
                    onPress={() => alert(item.name)}
                    style={[styles.categoryBox, { borderColor: item.color }]}>
                    <Text style={{ ...styles.categoryText, color: item.color }}>
                        {item.name}
                    </Text>
                </TouchableOpacity>
        </View>   
    );


    return (
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
            <FlatList
                    numColumns={4}
                    data={categories}
                    keyExtractor={item => item.id}
                    renderItem={renderItem}
                />
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
                    onPress={() => {
                      setComment('');
                      setAmount('');
                      navigation.navigate('Dashboard');
                    }}
                >
                </Button>
            </View>
        </View>
    );
};

export default AddTransactionScreen;