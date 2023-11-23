import {FlatList, View, Image, Button,TouchableOpacity, Text, RefreshControl } from 'react-native';
import { useEffect, useState } from 'react';

import { collection, query, onSnapshot } from 'firebase/firestore';
import { db } from '../../firebase';
import { styles } from './Styles';

const DashboardScreen = ({ navigation }) => {

    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [refreshing, setRefreshing] = useState(false);

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

    const onRefresh = () => {
        setRefreshing(true);
        reload();
        setRefreshing(false);
      };

    return (
        <View style={styles.container}>
            <View style={styles.chartAndButton}>

                <View style={styles.chartImage}>
                    <Image
                        source={require('../../assets/chart1.png')}
                        style={{ height: 180, width: 210 }}
                    />
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
          renderItem={({item}) => (
           // <TouchableOpacity onPress={() => handleCategoryPress(item)}>
           <TouchableOpacity>
            <View style={styles.card}>
                <View style={styles.content}>
                     <View style={styles.leftContent}>
          <View style={[styles.color, {backgroundColor: item.color}]} />
          <Text style={styles.text}>{item.name}</Text>
                   </View>
               <View style={styles.rightContent}>
                <Text style={styles.text}>10 %</Text>
                <Text style={styles.text}>$ 550</Text>
              </View>
                 </View>
                </View>
            </TouchableOpacity>
          )}
        />
      </View>
        </View>
    );
};


export default DashboardScreen;