import React, { useContext } from 'react';
import { Dimensions } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Ionicons from '@expo/vector-icons/Ionicons';

import LoginScreen from '../screens/login/LoginScreen';
import RegisterScreen from '../screens/register/RegisterScreen';
import DashboardScreen from '../screens/dashboard/DashboardScreen';
import AddTransactionScreen from '../screens/add-transaction/AddTransactionScreen';
import AddCategoryScreen from '../screens/add-category/AddCategoryScreen';
import TransactionsScreen from '../screens/transactions/TransactionsScreen';

import CustomDrawerComponent from '../components/customDrawer/CustomDrawer';

import AuthContext from '../context/AuthContext';

const RootStack = createStackNavigator();

const AuthStack = createStackNavigator();
const Drawer = createDrawerNavigator();

let deviceWidth = Dimensions.get('window').width;

const AuthStackScreen = () => (
    <AuthStack.Navigator>
        <AuthStack.Screen
            name="SignIn"
            component={LoginScreen}
            options={{ title: "Sign In", headerShown: false }}
        />
        <AuthStack.Screen
            options={{
                title: "Create Account",
                headerStyle: {
                    backgroundColor: '#005A9C',
                },
                headerTintColor: '#ffffff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
            }}
            name="CreateAccount"
            component={RegisterScreen}
        />
    </AuthStack.Navigator>
);

const DrawerScreen = () => (
    <Drawer.Navigator
        drawerContent={props => <CustomDrawerComponent {...props} />}
        screenOptions={{
            headerStyle: {
                backgroundColor: '#005A9C',
            },
            headerTintColor: '#ffffff',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
            drawerActiveBackgroundColor: '#005A9C',
            drawerActiveTintColor: '#fff',
            drawerInactiveTintColor: '#333',
            drawerLabelStyle: {
                marginLeft: -25,
                fontWeight: 'bold',
                fontSize: deviceWidth / 24,
            }
        }}
        initialRouteName="Dashboard"
    >
        <Drawer.Screen
            name="Dashboard" 
            component={DashboardScreen} 
            options={{
                drawerIcon: ({ focused }) => <Ionicons name="home" size={27} color={focused ? 'white' : '#333'} />
            }}
        />
        <Drawer.Screen 
            name="Transactions" 
            component={TransactionsScreen} 
            options={{
                drawerIcon: ({ focused }) => <Ionicons name="swap-horizontal" size={27} color={focused ? 'white' : '#333'} />
            }}
        />
        <Drawer.Screen 
            name="Add Transaction" 
            component={AddTransactionScreen} 
            options={{
                drawerIcon: ({ focused }) => <Ionicons name="add-circle-sharp" size={27} color={focused ? 'white' : '#333'} />
            }}
        />
        <Drawer.Screen 
            name="Categories" 
            component={AddCategoryScreen} 
            options={{
                drawerIcon: ({ focused }) => <Ionicons name="grid-outline" size={27} color={focused ? 'white' : '#333'} />
            }}
        />
    </Drawer.Navigator>
);

export const RootStackScreen = () => {

    const { signedIn } = useContext(AuthContext);

    return (
        <RootStack.Navigator screenOptions={{
            headerShown: false
        }}>
            {signedIn !== null ? (
                <RootStack.Screen
                    name="App"
                    component={DrawerScreen}
                    options={{
                        animationEnabled: false,
                    }}
                />
            ) : (
                <RootStack.Screen
                    name="Auth"
                    component={AuthStackScreen}
                    options={{
                        animationEnabled: false,
                    }}
                />
            )}
        </RootStack.Navigator>
    );
}

const RootNavigator = (props) => {
    return (
        <NavigationContainer>
            <RootStackScreen login={props.login} />
        </NavigationContainer>
    );
};

export default RootNavigator;