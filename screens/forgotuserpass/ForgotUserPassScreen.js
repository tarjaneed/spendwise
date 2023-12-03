import React, { useState } from 'react';
import { Text, View, Image, TouchableOpacity, Linking, Alert, Platform } from 'react-native';
import { styles } from './Styles';

const ForgotUserPassScreen = ({ navigation }) => {

    const [inputValue, setInputValue] = useState('1-800-773-6399');

    const openURL = async (url) => {
        const supported = await Linking.canOpenURL(url);
        if (supported) {
            await Linking.openURL(url);
        } else {
            Alert.alert('No app to open the URL');
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.headingContainer}>
                <Text style={styles.headerText}>
                    Contact Us
                </Text>
            </View>
            <View style={styles.descriptionContainer}>
                <Text style={styles.descriptionText}>
                    Forgot your username or password? That's okay, it happens! Spendwise is here to help. For your security please contact us.
                </Text>
            </View>
            <View style={styles.infoContainer}>
                <View style={styles.contactContainer}>
                    <Image
                        source={{ uri: 'https://cdn2.iconfinder.com/data/icons/font-awesome/1792/phone-512.png' }}
                        style={styles.icon}
                    />
                    <View style={styles.textbox}>
                        <TouchableOpacity
                            activeOpacity={0.7}
                            onPress={() => {
                                openURL( Platform.OS == 'android' ? `tel:${inputValue}` : `telprompt:${inputValue}`)}
                            }>
                            <Text style={styles.textboxText}>
                                1-800-SPENDWZ   (1-800-773-6399)
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.contactContainer}>
                    <Image
                        source={{ uri: 'https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-email-512.png' }}
                        style={styles.icon}
                    />
                    <View style={styles.textbox}>
                        <TouchableOpacity
                            activeOpacity={0.7}
                            onPress={() => openURL('mailto:support@spendwise.com')}>
                            <Text style={styles.textboxText}>
                                support@spendwise.com
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>




            <View style={styles.returntoLoginContainer}>
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate('SignIn')
                    }}
                >
                    <Text style={styles.returntoLoginText}>
                        Return to Login
                    </Text>
                </TouchableOpacity>
            </View>

        </View>

    );
};

export default ForgotUserPassScreen;