import { View , Text} from 'react-native';
import PieChart from 'react-native-expo-pie-chart';
import { styles } from './Styles';

const App = ({ categories , total}) => {

  const chartData = categories.map((item) => ({
    key: item.name,
    count: item.total,
    color: item.color,
  }));

  return (
    <View style={styles.container}>
      <PieChart
        data={chartData}
        length={220}
      />
        <View style={styles.gauge}>
        <Text style ={styles.gaugeText}>${total}</Text>
      </View>
    </View>
  );
};

export default App;