import { FlatList, View, Image, Button, TouchableOpacity, Text, RefreshControl, landscape, ActivityIndicator, Alert } from 'react-native';
import { useContext, useEffect, useState } from 'react';
import DateTypeSelection from '../../components/dateTypeSelection/DateTypeSelection';

import { collection, query, onSnapshot, where } from 'firebase/firestore';
import { db } from '../../firebase';
import { netExpense } from '../../utils/HelperFunctions';

import { styles } from './Styles';
import AuthContext from '../../context/AuthContext';

const DashboardScreen = ({ navigation, allCategories }) => {

    const { userID } = useContext(AuthContext);
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [refreshing, setRefreshing] = useState(false);
    const [total, setTotal] = useState(0); // To show within pie chart
    const [date, setDate] = useState(new Date());

    // Lists Categories with total > 0
    useEffect(() => {
        try {
            const q = query(collection(db, 'categories'), where('userID', '==', userID), where('total', '>', 0));
            const unsub = onSnapshot(q, (querySnapshot) => {
                let categories = [];
                querySnapshot.forEach((doc) => {
                    categories.push({ ...doc.data(), id: doc.id });
                });

                let total = netExpense(categories);
                let updatedCategories = categories.map((item, index) => {
                    item.percentage = Math.round((item.total / total) * 100);
                    return item;
                });

                setCategories(updatedCategories);
                setTotal(total);
                setLoading(false);
            });

            // Unsubscribe from events when no longer in use
            return () => unsub();
        } catch (e) {
            console.log(e);
            Alert.alert('Error occured while getting the results');
        }
    }, []);

    const onRefresh = () => {
        setRefreshing(true);
        reload();
        setRefreshing(false);
    };

    const handleDateFilter = (type, value) => {
        /*   if (allCategories === null) {
             setCategories(null);
             return;
           }
           let tempCategories = JSON.parse(JSON.stringify(allCategories));
           let filteredCategories = dateFilterHelper(type, value, tempCategories);
           let total = netExpense(filteredCategories);
           filteredCategories = filteredCategories.map((item, index) => {
             item.percentage = Math.round((item.totalExpense / total) * 100);
             return item;
           });
           setCategories(filteredCategories);
           setTotal(total);
   
           */
    };

    if (loading) {
        return (
            <ActivityIndicator style={styles.loader} size={'large'} />
        );
    } else {
        return (
            <View style={styles.container}>
                <View style={[styles.dateContainer, landscape && { flex: 2 }]}>
                    <DateTypeSelection
                        date={date}
                        sendDateToHome={handleDateFilter}
                    />
                </View>

                <View style={styles.chartAndButton}>
                    <View style={styles.chartImage}>
                        <Image
                            source={require('../../assets/chart1.png')}
                            style={{ height: 180, width: 210 }}
                        />
                        <Text>{total}</Text>
                    </View>

                    <View style={styles.addButton}>
                        <Button
                            mode="contained"
                            title="+ ADD TRANSACTION"
                            color={'white'}
                            onPress={() => { navigation.navigate('Add Transaction') }}
                        >
                        </Button>
                    </View>
                </View>

                <View style={styles.dataContainer}>
                    <FlatList
                        data={categories}
                        keyExtractor={item => item.id}
                        refreshControl={
                            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                        }
                        renderItem={({ item }) => {
                            return (
                                <TouchableOpacity>
                                    <View style={styles.card}>
                                        <View style={styles.content}>
                                            <View style={styles.leftContent}>
                                                <View style={[styles.color, { backgroundColor: item.color }]} />
                                                <Text style={styles.text}>{item.name}</Text>
                                            </View>
                                            <View style={styles.rightContent}>
                                                <Text style={styles.text}>{item.percentage} %</Text>
                                                <Text style={styles.text}>$ {item.total}</Text>
                                            </View>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            )
                        }}
                    />
                </View>
            </View>
        );
    }
};


export default DashboardScreen;