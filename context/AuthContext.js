import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [signedIn, setSignedIn] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [username, setUsername] = useState('');

  const [name, setName] = useState('');

  useEffect(() => {
    isLoggedIn();
  }, [])

  const signIn = async (username, password) => {
    // Firebase call and actual token setting here
    signInWithEmailAndPassword(auth, username, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        setSignedIn(true);
        AsyncStorage.setItem('token', user?.stsTokenManager?.accessToken);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(`Email/Password is incorrect`);
        setTimeout(() => setError(''), 5000);
      });

    // setSignedIn(true);
    // await AsyncStorage.setItem('token', 'userToken');
  }

  const register = async (username, password, navigation) => {
    // Firebase call and actual token setting here
    createUserWithEmailAndPassword(auth, username, password)
      .then((userCredential) => {
        // Register
        const user = userCredential.user;
        setSignedIn(true);
        AsyncStorage.setItem('token', user?.stsTokenManager?.accessToken);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(`${errorMessage}`)
        setTimeout(() => setError(''), 5000)
      });
  }

  const signOut = async () => {
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
    <AuthContext.Provider value={{ signedIn, loading, signIn, signOut, error, setError, name, setName, register, username, setUsername }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext;