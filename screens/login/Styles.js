import { StyleSheet, Dimensions } from 'react-native';

let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create ({
    container: {
        height: deviceHeight,
        width: deviceWidth,
        backgroundColor: '#f0ffff',
    },
    topContainer: {
        height: deviceHeight/3,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 20,
    },
    midContainer: {
        height: deviceHeight/3,
        justifyContent: 'center',
        alignItems: 'center',
    },
    infoContainer: {
        flexDirection: 'row',
        padding: 10,
    },
    userIcon: {
        height: 40,
    },
    textInputUserBox: {
        height: 40,
        width: 250,
        borderColor: 'white',
        backgroundColor: 'white',
        borderWidth: 1,
        justifyContent: 'center',
    },
    lockIcon: {

    },
    textInput: {
        fontSize: 15,
        margin: 5,
    },
    touchableSignInButton: {
        height: 40,
        width: 290,
        borderColor: 'white',
        backgroundColor: '#23c0f2',
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 50,
    },
    textSignInButton: {
        color: 'white',
        // fontFamily: 'sans-serif',
        fontSize: 20,
    },
    touchableForgotUserPassText: {
        padding: 5,

    },
    forgotUserPassText: {
        fontSize: 13,
        color: '#23c0f2',
    },
    bottomContainer: {
        height: deviceHeight/3,
        justifyContent: 'center',
        alignItems: 'center',
    },
    signUpText: {
        fontSize: 13,
        color: '#23c0f2',
        // fontFamily: 'sans-serif',
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