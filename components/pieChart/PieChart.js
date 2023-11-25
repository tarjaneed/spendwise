import React, { useEffect } from 'react';
import { View } from 'react-native';
import PieChart from 'react-native-expo-pie-chart';
import { styles } from './Styles';

const App = ({ categories }) => {

  const chartData = categories.map((item) => ({
    key: item.name,
    count: item.total,
    color: item.color,
  }));

  return (
    <View style={styles.container}>
      <PieChart
        data={chartData}
        length={200}
      />
    </View>
  );
};

export default App;
