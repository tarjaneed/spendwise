import { StyleSheet, Dimensions } from 'react-native';

let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create ({ 
    container: { 
        height: deviceHeight,
        width: deviceWidth,
        backgroundColor: '#f0ffff',
        alignItems: 'center'
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
    passwordResetContainer: {
        height: deviceHeight/4,
        width: deviceWidth,
        padding: 7,
        justifyContent: 'center',
        alignItems: 'center'
    },
    item: {
        flexDirection: 'row',
        margin: 10,
        marginBottom: 10,
    },
    inputIcon: {
        height: 2 * (deviceHeight / 34),
        backgroundColor: 'white',
    },
    icon: {
        height: 2 * (deviceHeight / 34),
        width: 2 * (deviceHeight / 34), 
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
    touchableResetButton: {
        height: 50,
        width: 290,
        borderColor: 'white',
        backgroundColor: '#23c0f2',
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
    },
    textResetButton: {
        color: 'white',
        fontSize: deviceWidth / 20,
        fontWeight: 'bold'
    },

});

export { styles };