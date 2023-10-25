import { StyleSheet, Dimensions } from 'react-native';

let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container: {
        height: deviceHeight,
        backgroundColor: '#F0FFFF',
    },
    drawerContainer: {
        backgroundColor: '#005A9C',
    },
    imageBgContainer: {
        padding: 20,
    },
    userImage: {
        alignSelf: 'center',
        height: deviceHeight / 7,
        width: deviceHeight / 7,
        borderRadius: 40,
        marginBottom: 10,
    },
    userName: {
        textAlign: 'center',
        color: '#fff',
        fontSize: deviceWidth / 21,
        marginBottom: 5,
    },
    drawerContent: {
        flex: 1, 
        backgroundColor: '#F0FFFF', 
        paddingTop: 10,
    },
    footerContainer: {
        padding: 20,
        borderTopWidth: 1,
        borderTopColor: '#ccc',
        backgroundColor: '#F0FFFF'
    },
    footerItemContainer: {
        paddingVertical: 15,
    },
    footerItemContent: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    footerItemText: {
        fontSize: deviceWidth / 26,
        marginLeft: 5,
    },
});

export { styles };