import { StyleSheet, Dimensions } from 'react-native';

let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
	container: {
		height: deviceHeight,
        width: deviceWidth,
		backgroundColor: '#f0ffff',
	},
    infoContainer: {
        height: 7 * (deviceHeight / 21),
        alignItems: 'center',
        marginTop: 20,
    },
    infoTextContainer: {
        flexDirection: 'row',
    },
    inputIcon: {
        backgroundColor: 'white',
        width: 2 * (deviceHeight / 43), 
        height: 2 * (deviceHeight / 43), 
        justifyContent: 'center',
        alignItems: 'center',
    },
    icon: {
        height: 2 * (deviceHeight / 43),
        width: 2 * (deviceHeight / 43), 
    },
    textInputBox: {
        height: 2 * (deviceHeight / 40),
        width: 3 * (deviceWidth / 5),
        borderColor: 'white',
        backgroundColor: 'white',
        borderWidth: 1,
        justifyContent: 'center',
        marginBottom: 20,
    },
    textInput: {
        fontSize: deviceWidth / 25,
        margin: 5,
    },
    agreeTermContainer: {
        marginHorizontal: 60,
        marginVertical: 25,
        marginBottom: 30,
        flexDirection: 'row',
    },
    checkboxContainer: {
        flexDirection: 'row',
    },
    agreeText: {
        fontSize: deviceWidth / 25,
        marginLeft: 10,
    },
    clickableTermText: {
        fontSize: deviceWidth / 25,
        fontWeight: 'bold',
        alignItems: 'center',
    },
    touchableCreateAccountContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    touchableCreateAccountButton: {
        height: 50,
        width: 290,
        borderColor: 'white',
        backgroundColor: '#23c0f2',
        borderWidth: 2,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#23c0f2',
        marginBottom: 2,
        marginTop: 30
    },
    createAccountText: {
        color: 'white',
        fontSize: deviceWidth / 20,
        fontWeight: 'bold'
    },
    existingAccountContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    accountQuestionText: {
        fontSize: deviceWidth / 28,
        marginTop: 5,
    },
    loginText: {
        fontWeight: 'bold',
        fontSize: deviceWidth / 28,
        marginTop: 5,
    }
});

export { styles };