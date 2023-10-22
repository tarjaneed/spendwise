import React, { useState, useContext } from 'react';
import { AppRegistry, Text, View, TouchableHighlight, Image, TextInput, FlatList,TouchableOpacity, Button} from 'react-native';
import Constants from 'expo-constants';
import { styles } from './Styles';




const TransactionsScreen = () => {
	return (
		<View style={styles.container}>
		<View
                  style={styles.topContainer}>
                  <TextInput
                    style={styles.amountField}
                    autoFocus={true}
                    placeholder="INR"
                    keyboardType="numeric"
                  />
                </View>
                <Text style={[styles.heading, {marginTop: 10}]}>
                  Categories
                </Text>
				<View style= {styles.categoryItems}>
				<TouchableOpacity
                onPress={() => alert('Loan')}
                style={[
                  styles.categoryBox,
                ]}>

                  <Text style={styles.categoryText}>
                    Loan
                  </Text>
              </TouchableOpacity>
			  <TouchableOpacity
                onPress={() => alert('Transport')}
                style={[
                  styles.categoryBox,
                ]}>

                  <Text style={styles.categoryText}>
                    Transport
                  </Text>
              </TouchableOpacity>
			  <TouchableOpacity
                onPress={() => alert('Food')}
                style={[
                  styles.categoryBox,
                ]}>

                  <Text style={styles.categoryText}>
                    Food
                  </Text>
              </TouchableOpacity>
			  <TouchableOpacity
                onPress={() => alert('Education')}
                style={[
                  styles.categoryBox,
                ]}>

                  <Text style={styles.categoryText}>
				  Education
                  </Text>
              </TouchableOpacity>

				</View>


				<View style= {styles.categoryItems}>
				<TouchableOpacity
                onPress={() => alert('Household')}
                style={[
                  styles.categoryBox,
                ]}>

                  <Text style={styles.categoryText}>
				  Household
                  </Text>
              </TouchableOpacity>
			  <TouchableOpacity
                onPress={() => alert('Health')}
                style={[
                  styles.categoryBox,
                ]}>

                  <Text style={styles.categoryText}>
				  Health
                  </Text>
              </TouchableOpacity>
			  <TouchableOpacity
                onPress={() => alert('Gift')}
                style={[
                  styles.categoryBox,
                ]}>

                  <Text style={styles.categoryText}>
				  Gift
                  </Text>
              </TouchableOpacity>
			  <TouchableOpacity
                onPress={() => alert('Workout')}
                style={[
                  styles.categoryBox,
                ]}>

                  <Text style={styles.categoryText}>
				  Workout
                  </Text>
              </TouchableOpacity>
				</View>

				<View style= {styles.addCategoryBox}>
			  <TouchableOpacity
                    //onPress={() => navigation.navigate('CategoryScreen')}
                    style={
                      styles.addCategoryBox
                    }>
                    <Text style={[styles.categoryText, {color: '#fff'}]}>
                      + Create
                    </Text>
                  </TouchableOpacity>
				  </View>

				  <View style={{marginVertical: 10}}>
                  <Text style={styles.heading}>Note</Text>
                  <TextInput
                    style={styles.note}
                    placeholder="Comment"
                  />
                </View>





				  <View style= {styles.addButton}>
 				<Button
				mode="contained"
                  title="Save"
                  color={'white'}
                  style={styles.addButton}>
                  Save
                </Button>
				</View>
				</View>
	);
};
  
export default TransactionsScreen;