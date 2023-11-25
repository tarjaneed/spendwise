import { StyleSheet, Dimensions } from 'react-native';

let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create ({ 
    container: { 
        height: deviceHeight,
        width: deviceWidth,
        backgroundColor: '#f0ffff',
    },
    headingContainer: {
        height: deviceHeight/16,
        width: deviceWidth,
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerText: {
        fontSize: deviceHeight/30,
        color: '#005A9C',
        fontWeight: 'bold',
    },
    descriptionContainer: {
        height: deviceHeight/10, 
        width: deviceWidth,
        justifyContent: 'center',
        padding: 15, 
    },
    descriptionText: {
        height: deviceHeight/20,
    },
    infoContainer: {
        height: deviceHeight/4,
        width: deviceWidth,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    inputIcon: {
        backgroundColor: 'white',
        width: 2 * (deviceHeight / 30), 
        height: 2 * (deviceHeight / 30), 
        justifyContent: 'center',
        alignItems: 'center', 
        marginTop: 50, 
    },
    icon: {
        height: 2 * (deviceHeight / 43),
        width: 2 * (deviceHeight / 43),
         
    },
    textInputBox: {
        height: 2 * (deviceHeight / 30),
        width: 3 * (deviceWidth / 4.5),
        borderColor: 'white',
        backgroundColor: 'white',
        borderWidth: 1,
        justifyContent: 'center',
        marginBottom: 20,
        marginTop: 50,
    },
    forgotPassContainer: {
        jutifyContent: 'center',
        alignItems: 'center',
        padding: 5,
    },
    forgotPassText: {
        fontSize: deviceWidth / 27,
        color: '#23c0f2',
    },
    touchableRecoverUserContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    touchableRecoverUserButton: {
        height: 50,
        width: 290,
        borderColor: 'white',
        backgroundColor: '#23c0f2',
        borderWidth: 2,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#23c0f2',
        marginBottom: 2,
        marginTop: 5
    },
    recoverUserText: {
        color: 'white',
        fontSize: deviceWidth / 20,
        fontWeight: 'bold'
    },


});

export { styles };