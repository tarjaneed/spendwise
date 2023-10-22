import { StyleSheet, Dimensions } from 'react-native';

let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create ({
    container: {
        height: deviceHeight,
        width: deviceWidth,
        backgroundColor: '#f0ffff',
    },
    topContainer : {
        marginVertical: 10,
        flexDirection: 'row',
        justifyContent: 'center',
      },
    heading: {
        fontSize: 20,
        marginBottom: 5,
        fontWeight: '500',
      },
      amountField: {
        backgroundColor: '#fff',
        width: 100,
        borderBottomWidth: 2,
        fontSize: 20,
        textAlign: 'center',
      },
      categoryBox: {
        borderWidth: 1,
        borderRadius: 10,
        marginVertical: 5,
        marginHorizontal: 8,
        width: 85,
        backgroundColor: '#fff',
      },
      addCategoryBox: {
        borderRadius: 10,
        margin: 5,
        justifyContent: 'center',
        padding: 2,
        backgroundColor: 'grey',
      },
      categoryText: {
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
        borderWidth: 1,
        borderRadius: 5,
        borderColor: 'grey',
        backgroundColor: '#fff',
        paddingLeft: 10,
        paddingVertical : 10,
      },
      addButton: {
        borderRadius: 10,
        margin: 5,
        justifyContent: 'center',
        padding: 2,
        backgroundColor: '#009999',
      },
      categoryItems : {
        flexDirection: 'row',
      }
});

export { styles };