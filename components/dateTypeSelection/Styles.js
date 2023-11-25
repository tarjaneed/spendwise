import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flexGrow: 2,
      paddingHorizontal: 10,
      paddingTop: 10,
      justifyContent: 'space-between',
    },
    options: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 5,
    },
    optionText: {
      fontSize: 16,
    },
    active: {
     color: '#23c0f2',
      fontWeight: 'bold',
      borderBottomWidth: 2,
    },
    selected: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignContent: 'center',
      alignItems: 'center',
    },
    selectedText: {
    },
    navigationButtons: {
      paddingHorizontal: 10,
      fontSize: 18,
    },
  });

  export { styles };