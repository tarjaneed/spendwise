import { StyleSheet, Dimensions } from 'react-native';

let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;

const dynamicStyles = StyleSheet.create({
    addButton: {
        borderRadius: 10,
        marginHorizontal: 8,
        marginVertical: 12,
        justifyContent: 'center',
        padding: 5,
        backgroundColor: '#23c0f2',
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
});

export { dynamicStyles };