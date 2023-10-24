import React, { useState, useContext } from 'react';
import { Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import { styles } from './Styles';

import AuthContext from '../../context/AuthContext';

const LoginScreen = ({ navigation }) => {

    const { signIn } = useContext(AuthContext);

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return (
        <View style={styles.container}>
            <View style={styles.topContainer}>
                <Image
                    source={{ uri: 'https://cdn-icons-png.flaticon.com/512/6915/6915987.png' }}
                    style={styles.userLoginIcon}
                />
            </View>
            <View style={styles.midContainer}>
                <View style={styles.infoContainer}>
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
                            onChangeText={(username) => setUsername({ username })}
                            value={username}
                        />
                    </View>

                </View>

                <View style={styles.infoContainer}>
                    <View style={styles.inputIcon}>
                        <Image
                            source={{ uri: 'https://logowik.com/content/uploads/images/803_lock.jpg' }}
                            style={styles.icon}
                        />
                    </View>
                    <View style={styles.textInputUserBox}>
                        <TextInput
                            style={styles.textInput}
                            placeholder='Enter Password'
                            onChangeText={(password) => setPassword({ password })}
                            value={password}
                            secureTextEntry={true}
                        />
                    </View>

                </View>

                <TouchableOpacity
                    onPress={() => {
                        signIn(); // From Context
                    }}
                    style={styles.touchableSignInButton}
                >
                    <Text style={styles.textSignInButton}>
                        Sign In
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => {
                        alert('You have pressed the Forgot User/Pass text')
                    }}
                    style={styles.touchableForgotUserPassText}
                >
                    <Text style={styles.forgotUserPassText}>
                        Forgot username or password?
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={styles.bottomContainer}>
                <Text style={styles.signUpText}>
                    Not a member?
                </Text>
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate('CreateAccount')
                    }}
                >
                    <View style={styles.signUpButton}>
                        <Text style={styles.signUpText}>
                            Create account
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default LoginScreen;