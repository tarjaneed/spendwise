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
        height: 7*(deviceHeight/12),
        alignItems: 'center',
        marginTop: 15,
        //backgroundColor: 'pink'
    },
    infoTextContainer: {
        flexDirection: 'row',
    },
    nameIcon: {
        backgroundColor: 'white',
        height: 40, 
        width: 40,
    },
    userIcon: {
        backgroundColor: 'white',
        height: 40, 
        width: 40,
    },
    emailIcon: {
        backgroundColor: 'white',
        height: 40, 
        width: 40,
    },
    passwordIcon: {
        backgroundColor: 'white',
        height: 40, 
        width: 40,
    },
    verifyIcon: {
        backgroundColor: 'white',
        height: 40, 
        width: 40,
    },
    textInputBox: {
        height: 40,
        width: 250,
        borderColor: 'white',
        backgroundColor: 'white',
        borderWidth: 1,
        justifyContent: 'center',
        marginBottom: 20,
    },
    agreeTermContainer: {
        height: deviceHeight/12,
        flexDirection: 'row',
    },
    checkboxContainer: {
        flexDirection: 'row',
        margin: 20,
    },
    agreeText: {
        fontSize: 13,
        fontFamily: 'sans-serif',
        marginLeft: 10,
        alignItems: 'center',
    },
    clickableTermText: {
        fontSize: 13,
        fontFamily: 'sans-serif',
        fontWeight: 'bold',
        marginLeft: 4,
        alignItems: 'center',
    },
    touchableCreateAccountContainer: {
        height: 2*(deviceHeight/14),
        alignItems: 'center',
        justifyContent: 'center',
    },
    touchableCreateAccountButton: {
        height: 40,
        width: 290,
        borderColor: 'white',
        backgroundColor: '#23c0f2',
        borderWidth: 2,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        borderColor: '#23c0f2',
        marginBottom: 40,
    },
    createAccountText: {
        color: 'white',
        fontFamily: 'sans-serif',
        fontSize: 20,
    },
    existingAccountContainer: {
        height: 2*(deviceHeight/12),
        //backgroundColor: 'blue',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    accountQuestionText: {
        fontSize: 13,
        marginTop: 10,
    },
    loginText: {
        fontWeight: 'bold',
        fontFamily: 'sans-serif',
        fontSize: 13,
        marginTop: 10,
        marginLeft: 6,

    }
});

export { styles };