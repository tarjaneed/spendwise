import React, { useState, useContext } from 'react';
import { Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import { styles } from './Styles';

import AuthContext from '../../context/AuthContext';

const ForgotUsernameScreen = ({ navigation }) => {

    const { signIn, error } = useContext(AuthContext);

    const { email, setEmail } = useContext(AuthContext);

    return (
        <View style={styles.container}>
            <View style={styles.headingContainer}>
                <Text style={styles.headerText}>
                    Enter e-mail
                </Text>
            </View>
            <View style={styles.descriptionContainer}>
                <Text style={styles.descriptionText}>
                    Enter the e-mail address used to create the account to recover your username
                </Text>
            </View>
            <View style={styles.infoContainer}>
                <View style={styles.inputIcon}>
                    <Image
                        source={{uri: 'https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-email-512.png'}}
                        style={styles.icon}
                    />
                </View>
                <View style={styles.textInputBox}>
					<TextInput
						placeholder='Enter Email Address'
						style={styles.textInput}
						onChangeText={(email)=> setEmail(email)}
						value={email}
					/>
				</View>
            </View>

            {error && <Text style={{color: 'red'}}>{error}</Text>}
            
            <View style={styles.forgotPassContainer}>
                <TouchableOpacity
                        onPress={() => {
                            navigation.navigate('ForgotPassword1')
                        }}
                    >
                        <Text style={styles.forgotPassText}>
                            Forgot password?
                        </Text>
                </TouchableOpacity>
            </View>

            <View style={styles.touchableRecoverUserContainer}>
                <TouchableOpacity
                    onPress={() => {
                        alert("Your username has been sent to your e-mail"); 
                    }}
                >
                    <View style={styles.touchableRecoverUserButton}>
                        <Text style={styles.recoverUserText}>
                            Recover username
                        </Text>
                    </View>
                </TouchableOpacity>

            </View>


        </View>

    ); 
};

export default ForgotUsernameScreen;
