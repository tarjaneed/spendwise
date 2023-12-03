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
        height: deviceHeight/6, 
        width: deviceWidth,
        justifyContent: 'center',
        padding: 25, 
    },
    descriptionText: {
        fontSize: 15,

    },
    infoContainer: {
        height: deviceHeight/3,
        width: deviceWidth,
        justifyContent: 'center',
        alignItems: 'center',
    },
    contactContainer: {
        flexDirection: 'row',
        justifyContent: 'center',

    },
    icon: {
        backgroundColor: 'white',
        width: 2 * (deviceHeight / 30), 
        height: 2 * (deviceHeight / 30), 
        justifyContent: 'center',
        alignItems: 'center', 
        marginTop: 30, 
    },
    textbox: {
        height: 2 * (deviceHeight / 30),
        width: 3 * (deviceWidth / 4.5),
        borderColor: 'white',
        backgroundColor: 'white',
        borderWidth: 1,
        justifyContent: 'center',
        marginBottom: 20,
        marginTop: 30,
    },
    textboxText: {
        fontWeight: 'bold',
        fontSize: deviceHeight/40,
        marginLeft: 30,
    },
    returntoLoginContainer: {
        jutifyContent: 'center',
        alignItems: 'center',
        padding: 5,
        marginTop: 30,
    },
    returntoLoginText: {
        fontSize: deviceWidth / 27,
        color: '#23c0f2',
    },

});

export { styles };