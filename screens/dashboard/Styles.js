import { StyleSheet, Dimensions } from 'react-native';

let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container: {
        height: deviceHeight,
        width: deviceWidth,
        backgroundColor: '#f0ffff',
    },
    chartAndButton: {
        height: deviceHeight * 0.3,
        justifyContent: 'space-evenly',
        borderRadius: 15,
        margin: 15,
        backgroundColor: 'white',
    },
    dataContainer: {
        height: deviceHeight * 0.5,
        margin: 10,
    },
    addTransactionBox: {
        borderRadius: 10,
        margin: 8,
        justifyContent: 'center',
        marginTop: 12,
        backgroundColor: '#23c0f2',
    },
    transactionText: {
        color: '#000000',
        textAlign: 'center',
        paddingVertical: 5,
    },
    cardText: {
        color: '#000000',
        paddingVertical: 5,
        fontSize: 16,
        paddingLeft: 10,
        fontWeight: 'bold'
    },
    chartImage: {
        justifyContent: 'center',
        alignItems: 'center',

    }
});

export { styles };