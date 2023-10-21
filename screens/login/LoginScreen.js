import React, {Component, useState } from 'react';
import { AppRegistry, Text, View, TouchableHighlight, Image, TextInput } from 'react-native';
import Constants from 'expo-constants';
import { styles } from './Styles';


const LoginScreen = ({ navigation }) => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');


        return (
            <View style={styles.container}>
                <View style={styles.topContainer}>
                    <Image
                        source={{uri: 'https://cdn-icons-png.flaticon.com/512/6915/6915987.png'}}
                        style={{height: 85, width: 85 }}
                    />
                </View>
                <View style={styles.midContainer}>
                    <View style={styles.infoContainer}>
                        <View style={styles.userIcon}>
                            <Image
                                source={{uri: 'https://static.vecteezy.com/system/resources/thumbnails/005/544/718/small/profile-icon-design-free-vector.jpg'}}
                                style={{height: 40, width: 40 }}
                            />
                        </View>
                        <View style={styles.textInputUserBox}>
                            <TextInput 
                            style={styles.textInput}
                            placeholder='username'
                            onChangeText={(username)=> setUsername({username})}
                            value={username}
                            />
                        </View>

                    </View>

                    <View style={styles.infoContainer}>
                        <View style={styles.lockIcon}> 
                            <Image
                                source={{uri: 'https://logowik.com/content/uploads/images/803_lock.jpg'}}
                                style={{height: 40, width: 40 }}
                            />
                        </View>
                        <View style={styles.textInputUserBox}>
                            <TextInput 
                            style={styles.textInput}
                            placeholder='Enter Password'
                            onChangeText={(password)=> setPassword({password})}
                            value={password}
                            secureTextEntry={true}
                            />
                        </View>

                    </View>

                    <TouchableHighlight 
                        onPress={() => {
                            alert('You have pressed the Log In Button')
                        }}
                    >
                    <View style={styles.touchableSignInButton}>
                        <Text style={styles.textSignInButton}>
                            Sign In
                        </Text>
                    </View>
                    </TouchableHighlight>
                    <View style={styles.touchableForgotUserPassText}>
                        <TouchableHighlight
                            onPress={() => {
                                alert('You have pressed the Forgot User/Pass text')
                            }}
                        >
                        <Text style ={styles.forgotUserPassText}>
                            Forgot username or password?
                        </Text>

                        </TouchableHighlight>
                    </View>

                </View>
                <View style={styles.bottomContainer}>
                    <Text style ={styles.signUpText}>
                        Not a member?
                    </Text>
                    <TouchableHighlight
                        onPress={() => {
							navigation.navigate('CreateAccount')
                        }}
                    >
                    <View style ={styles.signUpButton}>
                        <Text style ={styles.signUpText}>
                            Create account
                        </Text>
                    </View>
                    </TouchableHighlight>

                </View>

            </View>
        );
};

export default LoginScreen;