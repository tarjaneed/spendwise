import { useEffect, useState } from 'react';
import { Text, View, TextInput, Button, FlatList, ActivityIndicator, Alert } from 'react-native';
import { styles } from './Styles';
import Ionicons from '@expo/vector-icons/Ionicons';
import randomColor from 'randomcolor';

import { collection, addDoc, query, onSnapshot, doc, updateDoc, deleteDoc } from 'firebase/firestore';

import { db } from '../../firebase';

const CategoryScreen = ({ navigation }) => {

    const [loading, setLoading] = useState(true);
    const [category, setCategory] = useState({});
    const [name, setName] = useState('');
    const [categories, setCategories] = useState([]);

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

    // Handles category addition and updation
    const handleUpdateCategory = async (e) => {
        setLoading(true);
        e.preventDefault();
        if (name !== "") {
            if (Object.keys(category).length) {
                await updateDoc(doc(db, "categories", category.id), { 
                    name,
                    color: category.color,
                    total: category.total,
                });
            } else {
                await addDoc(collection(db, "categories"), {
                    name: name,
                    color: randomColor(),
                    total: 0,
                });
            }
            setLoading(false);
            setName('');
            setCategory({});
        } else {
            Alert.alert('Category Name cannot be blank');
            setLoading(false);
        }
    }

    // Loads data when the edit is clicked
    const handleEdit = (item) => {
        setCategory({
            ...item
        });
        setName(item.name);
    }

    const handleDelete = async (id) => {
        setLoading(true);
        await deleteDoc(doc(db, 'categories', id));
        setLoading(false);
    }

    const renderItem = ({ item }) => (
        <View style={styles.card}>
            <View
                style={{
                    flex: 3,
                    padding: 10,
                    flexDirection: 'row',
                    alignItems: 'center',
                }}>
                <View style={[styles.color, { backgroundColor: item.color }]} />
                <Text style={{ color: 'black', fontSize: 15 }}>{item.name}</Text>
            </View>
            <View style={styles.iconsContainer}>
                <Ionicons
                    size={25}
                    color="#0096FF"
                    name="create-outline"
                    onPress={() => handleEdit(item)}
                />
                <Ionicons
                    size={25}
                    color="#D11A2A"
                    name="trash-outline"
                    onPress={() => handleDelete(item.id)}
                />
            </View>
        </View>
    );

    if (loading) {
        return (
            <ActivityIndicator style={styles.loader} size={'large'} />
        );
    } else {
        return (
            <View>
                <View style={styles.header}>
                    <TextInput
                        style={styles.input}
                        value={name}
                        placeholder="Enter Category"
                        placeholderTextColor="grey"
                        onChangeText={(text) => setName(text)}
                    />
                    <View style={styles.addButton}>
                        <Button
                            mode="contained"
                            title={category.id ? 'Update' : 'Add'}
                            color={'white'}
                            style={{ alignSelf: 'center' }}
                            onPress={handleUpdateCategory}
                        >
                        </Button>
                    </View>
                </View>
                <FlatList
                    style={{ marginTop: 10 }}
                    data={categories}
                    keyExtractor={item => item.id}
                    renderItem={renderItem}
                />
            </View>
        );
    }
};

export default CategoryScreen;