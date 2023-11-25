import React, { useState, useContext, useEffect } from 'react';
import { Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import CheckBox from 'expo-checkbox';
import { styles } from './Styles';

import AuthContext from '../../context/AuthContext';

const RegisterScreen = ({ navigation }) => {

	const { email, setEmail, password, setPassword, name, setName, register, username, setUsername, error, setError, reset } = useContext(AuthContext);

	const [isSelected, setSelection] = useState(false);
	const [verifyPassword, setVerifyPassword] = useState('');

	const handleVerifyPassword = (verifyPassword) => {
		if (verifyPassword !== password) {
			setError('Password not matching.')
		} else setError('')
		setVerifyPassword(verifyPassword)
	}

	useEffect(() => {
		reset()
	}, [])

	return (
		<View style={styles.container}>
			<View style={styles.infoContainer}>
				<View>
					<View style={styles.infoTextContainer}>
						<View style={styles.inputIcon}>
							<Image
								source={{ uri: 'https://static.thenounproject.com/png/1946983-200.png' }}
								style={styles.icon}
							/>
						</View>
						<View style={styles.textInputBox}>
							<TextInput
								placeholder='Enter Full Name'
								style={styles.textInput}
								onChangeText={(name) => setName(name)}
								value={name}
							/>
						</View>
					</View>

					<View style={styles.infoTextContainer}>
						<View style={styles.inputIcon}>
							<Image
								source={{ uri: 'https://static.vecteezy.com/system/resources/thumbnails/005/544/718/small/profile-icon-design-free-vector.jpg' }}
								style={styles.icon}
							/>
						</View>
						<View style={styles.textInputBox}>
							<TextInput
								placeholder='Enter Username'
								style={styles.textInput}
								onChangeText={(username) => setUsername(username)}
								value={username}
							/>
						</View>
					</View>

					<View style={styles.infoTextContainer}>
						<View style={styles.inputIcon}>
							<Image
								source={{ uri: 'https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-email-512.png' }}
								style={styles.icon}
							/>
						</View>
						<View style={styles.textInputBox}>
							<TextInput
								placeholder='Enter Email Address'
								style={styles.textInput}
								onChangeText={(email) => setEmail(email)}
								value={email}
							/>
						</View>
					</View>

					<View style={styles.infoTextContainer}>
						<View style={styles.inputIcon}>
							<Image
								source={{ uri: 'https://logowik.com/content/uploads/images/803_lock.jpg' }}
								style={styles.icon}
							/>
						</View>
						<View style={styles.textInputBox}>
							<TextInput
								placeholder='Enter Password'
								style={styles.textInput}
								onChangeText={(password) => setPassword(password)}
								value={password}
								secureTextEntry={true}
							/>
						</View>
					</View>

					<View style={styles.infoTextContainer}>
						<View style={styles.inputIcon}>
							<Image
								source={{ uri: 'https://cdn3.iconfinder.com/data/icons/google-material-design-icons/48/ic_verified_user_48px-512.png' }}
								style={styles.icon}
							/>
						</View>
						<View style={styles.textInputBox}>
							<TextInput
								placeholder='Confirm Password'
								style={styles.textInput}
								onChangeText={handleVerifyPassword}
								value={verifyPassword}
								secureTextEntry={true}
							/>
						</View>
					</View>
				</View>
			</View>

			<View style={styles.agreeTermContainer}>
				<View style={styles.checkboxContainer}>
					<CheckBox
						value={isSelected}
						onValueChange={setSelection}
						style={styles.checkbox}
					/>
					<TouchableOpacity
						onPress={() => {
							alert('You have pressed the Terms and Conditions Text')
						}}
					>
						<View style={{ flexDirection: 'row' }}>
							<Text style={styles.agreeText}>
								Agree with
							</Text>
							<Text style={styles.clickableTermText}>
								&nbsp;Term & Conditions
							</Text>
						</View>
					</TouchableOpacity>
				</View>
			</View>

			{error && <Text style={{ color: 'red', textAlign: 'center' }}>{error}</Text>}

			<TouchableOpacity
				onPress={() => {
					register(email, password, navigation)
				}}
				style={styles.touchableCreateAccountContainer}
			>
				<View style={styles.touchableCreateAccountButton}>
					<Text style={styles.createAccountText}>
						Create Account
					</Text>
				</View>
			</TouchableOpacity>

			<View style={styles.existingAccountContainer}>
				<Text style={styles.accountQuestionText}>
					Already have an account?
				</Text>
				<TouchableOpacity
					onPress={() => {
						navigation.navigate('SignIn')
					}}
				>
					<Text style={styles.loginText}>
						&nbsp;Login
					</Text>
				</TouchableOpacity>
			</View>

		</View>
	);
};

export default RegisterScreen;