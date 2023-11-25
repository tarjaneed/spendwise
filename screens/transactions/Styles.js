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
    footer: {
        flex: 2,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderTopWidth: 1,
        borderTopColor: '#D3D3D3',
        backgroundColor: '#fff',
    },
    sortButtons: {
        paddingVertical: 10,
        width: '50%',
    },
    buttonDivider: {
        borderRightWidth: 1,
        borderRightColor: '#D3D3D3',
    },
    footerText: {
        textAlign: 'center',
        color: 'black',
    },
    dataContainer: {
        flex: 12,
        marginHorizontal: 15,
        marginBottom: 10,
    },
    dataItems: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 5,
        marginHorizontal: 25,
    },
    card: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#fff',
        paddingVertical: 5,
        paddingHorizontal: 10,
        marginVertical: 5,
        borderRadius: 10,
    },
    text: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    cardDate: {
        flex: 1,
        flexDirection: 'row',
    },
    divider: {
        borderRightWidth: 1,
        marginVertical: 3,
        marginHorizontal: 5,
        borderColor: '#D3D3D3',
    },
    cardText: {
        flex: 6,
        marginLeft: 3,
    },
    cardAmount: {
        flex: 2,
        alignItems: 'flex-end',
    },
    color: {
        margin: 10,
        width: 15,
        height: 15,
        borderRadius: 18 / 2,
    },
});

export { styles };