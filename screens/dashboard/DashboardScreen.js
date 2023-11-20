import { Text, View, Image, Button } from 'react-native';

import { styles } from './Styles';

const DashboardScreen = ({ navigation }) => {

    return (
        <View style={styles.container}>
            <View style={styles.chartAndButton}>

                <View style={styles.chartImage}>
                    <Image
                        source={require('../../assets/chart1.png')}
                        style={{ height: 180, width: 210 }}
                    />
                </View>

                <View style={styles.addButton}>
                    <Button
                        mode="contained"
                        title="+ ADD TRANSACTION"
                        color={'white'}
                        onPress={() => { navigation.navigate('Add Transaction') }}
                    >
                    </Button>
                </View>
            </View>

            <View style={styles.dataContainer}>
                <View style={styles.cardContent}>
                    <Text style={{ ...styles.cardText, color: '#5F9EA0' }}>
                        Gift
                    </Text>
                </View>
                <View style={styles.cardContent}>
                    <Text style={{ ...styles.cardText, color: '#6495ED' }}>
                        Education
                    </Text>
                </View>
                <View style={styles.cardContent}>
                    <Text style={{ ...styles.cardText, color: '#FF7F50' }}>
                        Food
                    </Text>
                </View>
                <View style={styles.cardContent}>
                    <Text style={{ ...styles.cardText, color: '#BDB76B' }}>
                        Travel
                    </Text>
                </View>
                <View style={styles.cardContent}>
                    <Text style={{ ...styles.cardText, color: '#9932CC' }}>
                        Fitness
                    </Text>
                </View>
                <View style={styles.cardContent}>
                    <Text style={{ ...styles.cardText, color: '#CD5C5C' }}>
                        Health
                    </Text>
                </View>
                <View style={styles.cardContent}>
                    <Text style={{ ...styles.cardText, color: '#20B2AA' }}>
                        Loan
                    </Text>
                </View>
            </View>
        </View>
    );
};


export default DashboardScreen;