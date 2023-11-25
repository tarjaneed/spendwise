import { StyleSheet, Dimensions } from 'react-native';

let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    spinner: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        justifyContent: 'center',
        backgroundColor: '#f3f3f3',
        height: deviceHeight,
        zIndex: 1,
    },
    container: {
        height: deviceHeight,
        width: deviceWidth,
        backgroundColor: '#f0ffff',
    },
    topContainer: {
        marginVertical: deviceHeight * 0.014,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    heading: {
        fontSize: deviceHeight * 0.022,
        marginVertical: deviceHeight * 0.014,
        fontWeight: 'bold',
        marginLeft: 5,
    },
    amountField: {
        backgroundColor: '#fff',
        width: deviceWidth * 0.25,
        borderBottomWidth: 2,
        fontSize: deviceHeight * 0.022,
        textAlign: 'center',
        padding: deviceHeight * 0.015,
    },
    categoryBox: {
        borderWidth: 1,
        borderRadius: 10,
        marginVertical: 5,
        marginHorizontal: 3,
        padding: 7,
        width: deviceWidth * 0.22,
        backgroundColor: '#fff',
    },
    textContainer: {
        alignItems: 'center',
        paddingVertical: 8,
        paddingHorizontal: 5,
    },
    calendarIcon: {
        paddingVertical: 12,
        marginRight: 3,
    },
    note: {
        borderWidth: 2,
        borderRadius: 5,
        borderColor: 'grey',
        backgroundColor: '#fff',
        paddingLeft: 10,
        paddingVertical: 16,
        fontSize: deviceHeight * 0.018,
    },
    categoryText: {
        textAlign: 'center',
        fontWeight: 'bold',
    },
    dateContainer: {
        marginTop: 5,
        marginHorizontal: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    dateBoxes: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginHorizontal: 5,
    },
    dateBox: {
        padding: 7,
        marginBottom: 10,
        borderRadius: 5,
        alignItems: 'center',
        backgroundColor: '#E6E6E6',
    },
    calendarIcon: {
        paddingVertical: 18,
        marginRight: 5,
    },
    addButton: {
        borderRadius: 10,
        marginHorizontal: 8,
        marginVertical: 12,
        justifyContent: 'center',
        padding: 5,
        backgroundColor: '#005A9C',
        fontWeight: 'bold'
    },
});

export { styles };