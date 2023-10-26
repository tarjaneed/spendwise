import { useContext } from 'react';
import { View, TouchableOpacity, Image, Text, ImageBackground, Alert } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';

import Ionicons from '@expo/vector-icons/Ionicons';

import AuthContext from '../../context/AuthContext';

import { styles } from './Styles';

const CustomDrawerComponent = (props) => {
    const { signOut, name } = useContext(AuthContext);

    return (
        <View style={styles.container}>
            <DrawerContentScrollView
                {...props}
                contentContainerStyle={styles.drawerContainer}
            >
                <ImageBackground
                    source={require('../../assets/menu-bg.png')}
                    style={styles.imageBgContainer}
                >
                    <Image
                        source={require('../../assets/user-profile.jpg')}
                        style={styles.userImage}
                    />
                    <Text style={styles.userName}>
                        {name || 'John Doe'}
                    </Text>
                </ImageBackground>

                <View style={styles.drawerContent}>
                    <DrawerItemList {...props} />
                </View>
            </DrawerContentScrollView>

            <View style={styles.footerContainer}>
                <TouchableOpacity onPress={() => { Alert.alert('Share App') }} style={styles.footerItemContainer}>
                    <View style={styles.footerItemContent}>
                        <Ionicons name="share-social-outline" size={22} />
                        <Text style={styles.footerItemText}>
                            Tell a Friend
                        </Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { signOut() }} style={styles.footerItemContainer}>
                    <View style={styles.footerItemContent}>
                        <Ionicons name="exit-outline" size={22} />
                        <Text style={styles.footerItemText}>
                            Sign Out
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default CustomDrawerComponent;