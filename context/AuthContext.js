import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [signedIn, setSignedIn] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        isLoggedIn();
    }, [])

    const signIn = async () => {
        // Firebase call and actual token setting here
        setSignedIn(true);
        await AsyncStorage.setItem('token', 'userToken');
    }

    const signOut = async() => {
        AsyncStorage.removeItem('token');
        setSignedIn(null);
        setLoading(false);
    }

    const isLoggedIn = async () => {
        setLoading(true);
        const userToken = await AsyncStorage.getItem('token');
        if (userToken) {
            setSignedIn(true);
        }
        setLoading(false);
    }

    return (
        <AuthContext.Provider value={{ signedIn, loading, signIn, signOut }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;