import React, { useState } from 'react';
import { Text, View, TouchableHighlight, Image, TextInput } from 'react-native';
import CheckBox from 'expo-checkbox';
import { styles } from './Styles'; 

const RegisterScreen = ({ navigation }) => {

	const [isSelected, setSelection] = useState(false);
	const [name, setName] = useState('');
	const [username, setUsername] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [verifyPassword, setVerifyPassword] = useState('');
	
	return (
		<View style={styles.container}>
			<View style={styles.infoContainer}>
				<View>
					<Text>
						Full Name
					</Text>

					<View style={styles.infoTextContainer}>
						<View style={styles.nameIcon}>
							<Image
								source={{uri: 'https://static.thenounproject.com/png/1946983-200.png'}}
								style={{height: 40, width: 40 }}
							/>
						</View>
						<View style={styles.textInputBox}>
							<TextInput 
								style={styles.textInput}
								onChangeText={(name)=> setName({name})}
								value={name}
							/>
						</View>
					</View>
						
					<Text>
						Username
					</Text>
					<View style={styles.infoTextContainer}>
						<View style={styles.userIcon}>
							<Image
								source={{uri: 'https://static.vecteezy.com/system/resources/thumbnails/005/544/718/small/profile-icon-design-free-vector.jpg'}}
								style={{height: 40, width: 40 }}
							/>
						</View>
						<View style={styles.textInputBox}>
							<TextInput 
								style={styles.textInput}
								onChangeText={(username)=> setUsername({username})}
								value={username}
							/>
						</View>
					</View>

					<Text>
						Email Address
					</Text>
					<View style={styles.infoTextContainer}>
						<View style={styles.emailIcon}>
							<Image
								source={{uri: 'https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-email-512.png'}}
								style={{height: 40, width: 40 }}
							/>
						</View>
						<View style={styles.textInputBox}>
							<TextInput 
								style={styles.textInput}
								onChangeText={(email)=> setEmail({email})}
								value={email}
							/>
						</View>
					</View>

					<Text>
						Password
					</Text>
					<View style={styles.infoTextContainer}>
						<View style={styles.passwordIcon}>
							<Image
								source={{uri: 'https://logowik.com/content/uploads/images/803_lock.jpg'}}
								style={{height: 40, width: 40 }}
							/>
						</View>
						<View style={styles.textInputBox}>
							<TextInput 
								style={styles.textInput}
								onChangeText={(password)=> setPassword({password})}
								value={password}
								secureTextEntry={true}
							/>
						</View>
					</View>
						
					<Text>
						Confirm Password
					</Text>
					<View style={styles.infoTextContainer}>
						<View style={styles.verifyIcon}>
							<Image
								source={{uri: 'https://cdn3.iconfinder.com/data/icons/google-material-design-icons/48/ic_verified_user_48px-512.png'}}
								style={{height: 40, width: 40 }}
							/>
						</View>
						<View style={styles.textInputBox}>
							<TextInput 
								style={styles.textInput}
								onChangeText={(verifyPassword)=> setVerifyPassword({verifyPassword})}
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
						<Text style={styles.agreeText}>
							Agree with 
						</Text>
						<TouchableHighlight
						onPress={() => {
							alert('You have pressed the Terms and Conditions Text')
						}}
						>
						<Text style={styles.clickableTermText}>
							Term & Conditions
						</Text>
						</TouchableHighlight>
					</View>
			</View>

			<View style={styles.touchableCreateAccountContainer}>
				<TouchableHighlight
				onPress={() => {
					alert('You have pressed the Create Account Button')
				}}
				>
					<View style={styles.touchableCreateAccountButton}>
						<Text style={styles.createAccountText}>
							Create Account
						</Text>
					</View>
				</TouchableHighlight>
			</View>	

			<View style={styles.existingAccountContainer}>
				<Text style={styles.accountQuestionText}>
					Already have an account?
				</Text>
				<TouchableHighlight
				onPress={() => {
					navigation.navigate('SignIn')
				}}
				>
					<Text style={styles.loginText}>
						Login
					</Text>
				</TouchableHighlight>
			</View>	

		</View>
	);
};

export default RegisterScreen;