import { StyleSheet, Dimensions } from 'react-native';

let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    loader: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        height: deviceHeight,
        width: deviceWidth,
        backgroundColor: '#f0ffff',
    },
    chartAndButton: {
        height: deviceHeight * 0.35,
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
    cardContent: {
        borderRadius: 10,
        margin: 8,
        justifyContent: 'center',
        marginTop: 8,
        backgroundColor: '#e0e0e0',
        height: deviceHeight * 0.055,
    },
    addButton: {
        borderRadius: 10,
        marginHorizontal: 8,
        marginVertical: 10,
        justifyContent: 'center',
        padding: 6,
        backgroundColor: '#005A9C',
        fontWeight: 'bold'
    },
    card: {
        marginVertical: 5,
        borderRadius: 8,
        backgroundColor: '#fff',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        shadowColor: 'black',
    },
    content: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 12,
        paddingHorizontal: 15,
    },
    leftContent: {
        flex: 4,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    rightContent: {
        flex: 2,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    color: {
        marginRight: 10,
        width: 18,
        height: 18,
        borderRadius: 18 / 2,
    },
    text: {
        fontWeight: 'bold'
    }
});

export { styles };