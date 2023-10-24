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
    },
    dataContainer: {
      height: deviceHeight * 0.5,
      margin: 10,
    },
    cardContent: {
      borderRadius: 10,
      margin: 8,
      justifyContent: 'center',
      marginTop: 10,
      backgroundColor: '#e0e0e0',
      height: deviceHeight * 0.055,
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
chartImage : {
  justifyContent: 'center',
  alignItems: 'center',
}
});

export { styles };