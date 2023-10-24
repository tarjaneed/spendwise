import { StyleSheet, Dimensions } from 'react-native';

let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container: {
      height: deviceHeight,
      width: deviceWidth,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#f0ffff',
    },
});

export { styles };