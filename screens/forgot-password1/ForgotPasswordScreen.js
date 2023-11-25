import React, { useState, useContext, useEffect } from 'react';
import { Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import { styles } from './Styles';

import AuthContext from '../../context/AuthContext';

const ForgotPasswordScreen = ({ navigation }) => {

    //const { confirmEmail, error } = useContext(AuthContext);

        const [username, setUsername] = useState('');
        const [email, setEmail] = useState('');

    return (
        <View style={styles.container}>
            <View style={styles.headingContainer}>
            <Text style={styles.headerText}>
                    Confirm E-mail
                </Text>
            </View>
            <View style={styles.descriptionContainer}>
                <Text style={styles.descriptionText}>
                    Enter the username or e-mail address used to create the account to reset your password.
                </Text>
            </View>
            <View style={styles.userinfoContainer}>
                <View style={styles.inputIcon}>
                    <Image
                        source={{ uri: 'https://static.vecteezy.com/system/resources/thumbnails/005/544/718/small/profile-icon-design-free-vector.jpg' }}
                        style={styles.icon}
                    />
                </View>
                <View style={styles.textInputUserBox}>
                    <TextInput
                        style={styles.textInput}
                        placeholder='Enter Username'
                        onChangeText={(username) => setUsername(username)}
                        value={username}
                    />
                </View>
            </View>
            <View style={styles.userinfoContainer}>
                <Text style={styles.text}>
                    Or
                </Text>
            </View>
            <View style={styles.userinfoContainer}>
                <View style={styles.inputIcon}>
                    <Image
                        source={{uri: 'https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-email-512.png'}}
                        style={styles.icon}
                    />
                </View>
                <View style={styles.textInputUserBox}>
					<TextInput
						placeholder='Enter Email Address'
						style={styles.textInput}
						onChangeText={(email)=> setEmail(email)}
						value={email}
					/>
				</View>
            </View>
        
            <TouchableOpacity
                    onPress={() => {
                        //confirmEmail(email); 
                        navigation.navigate('ForgotPassword2')
                    }}
                    style={styles.touchableCheckButton}
            >
                    <Text style={styles.textCheckButton}>
                        Continue
                    </Text>
            </TouchableOpacity>
            

            
        </View>

    );
};


export default ForgotPasswordScreen;