import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

import LoginScreen from '../screens/login/LoginScreen';
import RegisterScreen from '../screens/register/RegisterScreen';
import Dashboardcreen from "../screens/dashboard/DashboardScreen";
import TransactionsScreen from "../screens/transactions/TransactionsScreen";

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
            name="CreateAccount"
            component={RegisterScreen}
            options={{ title: "Create Account" }}
        />
    </AuthStack.Navigator>
);

const DrawerScreen = () => (
    <Drawer.Navigator initialRouteName="Dashboard">
        <Drawer.Screen name="Dashboard" component={Dashboardcreen} />
        <Drawer.Screen name="Transactions" component={TransactionsScreen} />
    </Drawer.Navigator>
);

export const RootStackScreen = ({ login }) => (
    <RootStack.Navigator headerMode="none">
        {login ? (
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

const RootNavigator = (props) => {
    return (
        <NavigationContainer>
            <RootStackScreen login={props.login} />
        </NavigationContainer>
    );
};

export default RootNavigator;