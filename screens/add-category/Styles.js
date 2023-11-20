import { StyleSheet, Dimensions } from 'react-native';

let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
   header: {
      flexDirection: 'row',
      marginTop: 10,
      paddingHorizontal: 10,
     justifyContent: 'space-between',
    },
    input: {
      borderBottomWidth: 1,
      width: deviceWidth / 1.4,
      borderBottomColor: '#D3D3D3',
      fontSize: 17,
    },
    card: {
      flex: 1,
      flexDirection: 'row',
      backgroundColor: '#fff',
      borderRadius: 10,
      marginTop: 15,
      marginHorizontal: 10,
      height: deviceHeight/20,
    },
    color: {
      marginRight: 10,
      width: 15,
      height: 15,
      borderRadius: 15 / 2,
    },
    iconsContainer: {
      flex: 1,
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'space-around',
    },
    addButton: {
      borderRadius: 10,
      marginHorizontal: 4,
      marginVertical: 4,
      justifyContent: 'center',
      padding: 3,
      backgroundColor: '#23c0f2',
      fontWeight: 'bold'
  },
    
  });

export { styles };


