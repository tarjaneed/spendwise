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
    userinfoContainer: {
        flexDirection: 'row',
        padding: 7,
        justifyContent: 'center',
    },
    icon: {
        height: 2 * (deviceHeight / 34),
        width: 2 * (deviceHeight / 34), 
    },
    inputIcon: {
        height: 2 * (deviceHeight / 34),
        backgroundColor: 'white',
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
    text: {
        fontWeight: 'bold',
        fontSize: deviceHeight/45,

    },
    touchableCheckButton: {
        height: 50,
        width: 290,
        borderColor: 'white',
        backgroundColor: '#23c0f2',
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
    },
    textCheckButton: {
        color: 'white',
        fontSize: deviceWidth / 20,
        fontWeight: 'bold'
    },
    
});

export { styles };