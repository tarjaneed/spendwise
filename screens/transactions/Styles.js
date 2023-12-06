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
        flex: 2,
        flexDirection: 'row',
    },
    divider: {
        borderRightWidth: 1,
        marginVertical: 3,
        marginHorizontal: 5,
        borderColor: '#D3D3D3',
    },
    cardText: {
        flex: 5,
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
    centeredView: {
        height: deviceHeight,
        width: deviceWidth,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        alignItems: 'center',
        justifyContent: 'center',
    },
    modalView: {
        margin: 20,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        padding: 15,
        width: 3 * (deviceHeight / 7),
        shadowColor: '#d3d3d3',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        backgroundColor: '#080516',
    },
    customOptions: {
        backgroundColor: "#080516",
        textHeaderColor: "#469ab6",
        textDefaultColor: "#FFFFFF",
        selectedTextColor: "#d3d3d3",
        mainColor: "#469ab6",
        textSecondaryColor: "#FFFFFF",
        borderColor: "rgba(122, 146, 165, 0.1)",
        textFontSize: deviceHeight / 50,
    },
    doneView: {
        marginTop: -15,
        backgroundColor: '#080516',
        width: 2 * (deviceHeight / 5.1),
        padding: 5,
        borderColor: "rgba(122, 146, 165, 0.1)",
    },
    doneText: {
        paddingEnd: 10,
        paddingBottom: 10,
        fontSize: deviceHeight / 50,
        textAlign: 'right',
        fontWeight: 'bold',
        color: '#469ab6'
    }
});

export { styles };