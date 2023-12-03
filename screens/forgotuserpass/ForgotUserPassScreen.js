import React, { useState } from 'react';
import call from 'react-native-phone-call';
import { Text, View, Image, TouchableOpacity, Linking } from 'react-native';
import { styles } from './Styles';



const ForgotUserPassScreen = ({ navigation }) => {

    const [inputValue, setInputValue] = useState('1-800-773-6399');

    const triggerCall = () => {
        const args ={
            number: inputValue,
            prompt: true,
        };
        // Make a call
        call(args).catch(console.error);
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
                        source={{uri: 'https://cdn2.iconfinder.com/data/icons/font-awesome/1792/phone-512.png'}}
                        style={styles.icon}
                    />
                    <View style={styles.textbox}>
                        <TouchableOpacity
                            activeOpacity={0.7}
                            onPress={triggerCall}>
                            <Text style={styles.textboxText}>
                                1-800-SPENDWZ   (1-800-773-6399)
                            </Text>
                        </TouchableOpacity>
                    </View>
				</View>
                <View style={styles.contactContainer}>
                    <Image 
                        source={{uri: 'https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-email-512.png'}}
                        style={styles.icon}
                    />
                    <View style={styles.textbox}>
                        <TouchableOpacity  
                            activeOpacity={0.7}
                            onPress={()=>{
                                Linking.openURL('mailto:support@spendwise.com')
                            }}>
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