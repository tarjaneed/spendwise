import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import LoginScreen from '../screens/login/LoginScreen';
import RegisterScreen from '../screens/register/RegisterScreen';
import Dashboardcreen from '../screens/dashboard/DashboardScreen';
import AddTransactionScreen from '../screens/add-transaction/AddTransactionScreen';
import TransactionsScreen from '../screens/transactions/TransactionsScreen';

import AuthContext from '../context/AuthContext';

const RootStack = createStackNavigator();

const AuthStack = createStackNavigator();
const Drawer = createDrawerNavigator();

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
        screenOptions={{
            headerStyle: {
                backgroundColor: '#005A9C',
            },
            headerTintColor: '#ffffff',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
        }}
        initialRouteName="Dashboard"
    >
        <Drawer.Screen name="Dashboard" component={Dashboardcreen} />
        <Drawer.Screen name="Transactions" component={TransactionsScreen} />
        <Drawer.Screen name="Add Transaction" component={AddTransactionScreen} />
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