import { Text, View, TextInput, Button, FlatList} from 'react-native';
import { styles } from './Styles';
import Ionicons from '@expo/vector-icons/Ionicons';

const CategoryScreen = ({ navigation }) => {

    const data = [
        {
          id: '1',
          title: 'Gift',
          color: '#5F9EA0',
        },
        {
          id: '2',
          title: 'Education',
          color: '#6495ED',
        },
        {
            id: '3',
            title: 'Food',
            color: '#FF7F50',
        },
        {
            id: '4',
            title: 'Travel',
            color: '#BDB76B',
        },
        {
            id: '5',
            title: 'Fitness',
            color: '#9932CC',
        },
        {
            id: '6',
            title: 'Health',
            color: '#CD5C5C',
        },
      ];

    const renderItem = ({item}) => (
        <View style={styles.card}>
          <View
            style={{
              flex: 3,
              padding: 10,
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <View style={[styles.color, {backgroundColor: item.color}]} />
            <Text style={{color: 'black', fontSize: 15}}>{item.title}</Text>
          </View>
          <View style={styles.iconsContainer}>
          <Ionicons
          size={25}
          color="#0096FF"
          name="create-outline"
        //  onPress={() => handleUpdate(item)}
        />
        <Ionicons
          size={25}
          color="#D11A2A"
          name="trash-outline"
          onPress={() => handleDelete(item.id)}
        />
          </View>
        </View>

      );

return (
    <View>
    <View style={styles.header}>
        <TextInput
                  style={styles.input}
                  placeholder="Search"
                  placeholderTextColor="grey"
                //  onChangeText={text => handleSearch(text)}
                />
             <View style={styles.addButton}>
                    <Button
                        mode="contained"
                        title="Add"
                        color={'white'}
                        style={{alignSelf: 'center'}}
                       // onPress={handleAdd}
                    >
                    </Button>
                    </View> 
                    </View>
                    <FlatList
                style={{marginTop: 10}}
                data={data}
                keyExtractor={item => item.id}
                renderItem={renderItem}
              />

  </View>
);
};

export default CategoryScreen;