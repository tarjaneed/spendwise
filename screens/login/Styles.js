import { StyleSheet, Dimensions } from 'react-native';

let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create ({
    container: {
        height: deviceHeight,
        width: deviceWidth,
        backgroundColor: '#f0ffff',
    },
    userLoginIcon: {
        height: 2 * (deviceHeight / 14),
        width: 2 * (deviceHeight / 14),
    },
    topContainer: {
        height: deviceHeight / 3,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 20,
    },
    midContainer: {
        height: deviceHeight / 3,
        justifyContent: 'center',
        alignItems: 'center',
    },
    infoContainer: {
        flexDirection: 'row',
        padding: 10,
    },
    icon: {
        height: 2 * (deviceHeight / 43),
        width: 2 * (deviceHeight / 43), 
    },
    inputIcon: {
        height: 2 * (deviceHeight / 43),
    },
    textInputUserBox: {
        height: 40,
        width: 250,
        borderColor: 'white',
        backgroundColor: 'white',
        borderWidth: 1,
        justifyContent: 'center',
    },
    textInput: {
        fontSize: deviceWidth / 25,
        margin: 5,
    },
    touchableSignInButton: {
        height: 50,
        width: 290,
        borderColor: 'white',
        backgroundColor: '#23c0f2',
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 45,
    },
    textSignInButton: {
        color: 'white',
        fontSize: deviceWidth / 20,
        fontWeight: 'bold'
    },
    touchableForgotUserPassText: {
        padding: 5,
    },
    forgotUserPassText: {
        fontSize: deviceWidth / 27,
        color: '#23c0f2',
    },
    bottomContainer: {
        height: deviceHeight / 3,
        justifyContent: 'center',
        alignItems: 'center',
    },
    signUpText: {
        fontSize: deviceWidth / 28,
        color: '#23c0f2',
        marginBottom: 5,
    },
    signUpButton: {
        borderColor: '#23c0f2',
        borderRadius: 10,
        borderWidth: 2,
        padding: 5,
    },
});

export { styles };