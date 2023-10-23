import { StyleSheet, Dimensions } from 'react-native';

let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container: {
        height: deviceHeight,
        width: deviceWidth,
        backgroundColor: '#f0ffff',
    },
    topContainer: {
        marginVertical: 10,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    heading: {
        fontSize: 20,
        marginVertical: 10,
        fontWeight: 'bold',
        marginLeft: 5,
    },
    amountField: {
        backgroundColor: '#fff',
        width: 100,
        borderBottomWidth: 2,
        fontSize: 20,
        textAlign: 'center',
        padding: 12,
    },
    categoryBox: {
        borderWidth: 1,
        borderRadius: 10,
        marginVertical: 5,
        marginHorizontal: 3,
        padding: 7,
        width: 85,
        backgroundColor: '#fff',
    },
    addCategoryBox: {
        borderRadius: 10,
        margin: 8,
        justifyContent: 'center',
        marginTop: 12,
        backgroundColor: 'grey',
    },
    categoryText: {
        color: '#000000',
        textAlign: 'center',
        paddingVertical: 5,
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
        fontSize: 16
    },
    addButton: {
        borderRadius: 10,
        marginHorizontal: 8,
        marginVertical: 12,
        justifyContent: 'center',
        padding: 5,
        backgroundColor: '#23c0f2',
        fontWeight: 'bold'
    },
    categoryItems: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
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
        width: 90,
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
});

export { styles };