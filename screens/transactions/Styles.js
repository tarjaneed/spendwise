import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
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
    dateContainer: {
        flex: 2,
        backgroundColor: '#fff',
        marginVertical: 10,
        marginHorizontal: 15,
        borderRadius: 10,
        paddingHorizontal: 10,
        justifyContent: 'center',
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
});

export { styles };