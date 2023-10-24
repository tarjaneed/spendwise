import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, Button } from 'react-native';
import { styles } from './Styles';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const TransactionsScreen = () => {

    const [amount, setAmount] = useState('');

    const handleTextChange = (text) => {
        if (!text.startsWith('$')) {
            text = '$' + text;
        }
        setAmount(text);
    };

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
            

            <View style={styles.categoryItems}>
                <TouchableOpacity
                    onPress={() => alert('Gift')}
                    style={[ styles.categoryBox ]}>

                    <Text style={{ ...styles.categoryText, color: '#5F9EA0' }}>
                        Gift
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => alert('Education')}
                    style={[ styles.categoryBox ]}>

                    <Text style={{ ...styles.categoryText, color: '#6495ED' }}>
                        Education
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => alert('Food')}
                    style={[ styles.categoryBox ]}>

                    <Text style={{ ...styles.categoryText, color: '#FF7F50' }}>
                        Food
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => alert('Travel')}
                    style={[ styles.categoryBox ]}>

                <Text style={{ ...styles.categoryText, color: '#BDB76B' }}> 
                        Travel
                    </Text>
                </TouchableOpacity>

            </View>

            <View style={styles.categoryItems}>
                <TouchableOpacity
                    onPress={() => alert('Fitness')}
                    style={[ styles.categoryBox ]}>

<                   Text style={{ ...styles.categoryText, color: '#9932CC' }}>
                        Fitness
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => alert('Health')}
                    style={[ styles.categoryBox ]}>

                    <Text style={{ ...styles.categoryText, color: '#CD5C5C' }}>
                        Health
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => alert('Loan')}
                    style={[ styles.categoryBox ]}>

                    <Text style={{ ...styles.categoryText, color: '#20B2AA' }}>
                        Loan
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => alert('Utilities')}
                    style={[ styles.categoryBox ]}>

                    <Text style={{ ...styles.categoryText, color: '#90EE90' }}>
                        Utilities
                    </Text>
                </TouchableOpacity>
            </View>

            <View style={styles.addCategoryBox}>
                <TouchableOpacity
                    //onPress={() => navigation.navigate('CategoryScreen')}
                    style={
                        styles.addCategoryBox
                    }>
                    <Text style={[styles.categoryText, { fontSize: 18, fontWeight: 'bold', color: '#fff' }]}>
                        + Create
                    </Text>
                </TouchableOpacity>
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
                />
            </View>

            <View style={styles.addButton}>
                <Button
                    mode="contained"
                    title="Save"
                    color={'white'}
                    style={styles.addButton}>
                       Save
                </Button>
            </View>
        </View>
    );
};

export default TransactionsScreen;