import React, { useState, useContext, useEffect } from 'react';
import { Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import { styles } from '../forgot-password2/Styles';

import AuthContext from '../../context/AuthContext';

const ForgotPasswordScreen2 = ({ navigation }) => { 

    const { password, setPassword, error, setError, reset } = useContext(AuthContext);

    const [verifyPassword, setVerifyPassword] = useState('');

    const handleVerifyPassword = (verifyPassword) => {
        if(verifyPassword !== password) {
          setError('Password not matching.')
        } else setError('')
        setVerifyPassword(verifyPassword)
      }
    
      useEffect(() => {
        reset()
      }, [])

    return (
        <View style={styles.container}>
            <View style={styles.headingContainer}>
                <Text style={styles.headerText}>
                    Create New Password
                </Text>
            </View>
            <View style={styles.descriptionContainer}>
                <Text style={styles.descriptionText}>
                    For your security please change your password to something you haven't used before.
                </Text>
            </View>
            <View style={styles.passwordResetContainer}>
                <View style={styles.item}>
                    <View style={styles.inputIcon}>
                        <Image
							source={{uri: 'https://logowik.com/content/uploads/images/803_lock.jpg'}}
							style={styles.icon}
						/>
                    </View>
                    <View style={styles.textInputUserBox}>
                        <TextInput
                            style={styles.textInput}
                            placeholder='Enter New Password'
                            onChangeText={(password) => setPassword(password)}
                            value={password}
                            secureTextEntry={true}
                        />
                    </View>
                </View>
                <View style={styles.item}>
                    <View style={styles.inputIcon}>
                        <Image
						    source={{uri: 'https://cdn3.iconfinder.com/data/icons/google-material-design-icons/48/ic_verified_user_48px-512.png'}}
						    style={styles.icon}
					    />
                    </View>
                    <View style={styles.textInputUserBox}>
                        <TextInput
                            placeholder='Confirm New Password'
                            style={styles.textInput}
                            onChangeText={handleVerifyPassword}
                            value={verifyPassword}
                            secureTextEntry={true}
                        />
                    </View>
                </View>
            </View>

            {error && <Text style={{color: 'red', textAlign: 'center'}}>{error}</Text>}
            
            <TouchableOpacity
                    onPress={() => {
                        alert("Your password has been reset")
                    }}
                    style={styles.touchableResetButton}
            >
                    <Text style={styles.textResetButton}>
                        Reset Password
                    </Text>
            </TouchableOpacity>

        </View>

    );
};

export default ForgotPasswordScreen2;

