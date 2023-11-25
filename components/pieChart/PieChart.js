import React, { useEffect } from 'react';
import { View } from 'react-native';
import PieChart from 'react-native-expo-pie-chart';
import { styles } from './Styles';

const App = ({ categories }) => {

  useEffect(() => {
    console.log('categories:', categories);
  }, [categories]);

  return (
    <View style={styles.container}>
      <PieChart
        data={[
          {
            key: 'Travel',
            count: 20,
            color: '#1f43e2',
          },
          {
            key: 'Second Data',
            count: 25,
            color: '#cb64e0',
          },
          {
            key: 'Third Data',
            count: 40,
            color: '#fc20a4',
          },
          {
            key: 'Fourth Data',
            count: 35,
            color: '#55c111',
          },
        ]}
        length={200}
      />
    </View>
  );
};

export default App;