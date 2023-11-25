import React, { createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../firebase";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [signedIn, setSignedIn] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [userID, setUserID] = useState();
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");

    const reset = () => {
        setName("");
        setUsername("");
        setEmail("");
        setPassword("");
    };

    useEffect(() => {
        isLoggedIn();
    }, []);

    const signIn = async (username, password) => {
        // Firebase call and actual token setting here
        signInWithEmailAndPassword(auth, username, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                AsyncStorage.setItem("token", user?.stsTokenManager?.accessToken);
                AsyncStorage.setItem("userID", user?.uid);
                setSignedIn(true);
            })
            .catch((error) => {
                setError(`Email/Password is incorrect`);
                setTimeout(() => setError(""), 5000);
            });
    };

    const register = (username, password, navigation) => {
        // Firebase call and actual token setting here
        createUserWithEmailAndPassword(auth, username, password)
            .then(async (userCredential) => {
                // Register
                const user = userCredential.user;
                setSignedIn(true);
                try {
                    const userToken = await AsyncStorage.getItem("token");
                    if (userToken) {
                        let userID = await AsyncStorage.getItem("userID");
                        setUserID(userID);
                        setSignedIn(true);
                    }
                    setLoading(false);
                } catch (e) {
                    setLoading(false);
                }
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setError(`${errorMessage}`);
                setTimeout(() => setError(""), 5000);
            });
    };

    const signOut = async () => {
        AsyncStorage.removeItem("token");
        AsyncStorage.removeItem("userID");
        setSignedIn(null);
        setLoading(false);
    };

    const isLoggedIn = async () => {
        setLoading(true);
        try {
            const userToken = await AsyncStorage.getItem("token");
            if (userToken) {
                let userID = await AsyncStorage.getItem("userID");
                setUserID(userID);
                setSignedIn(true);
            }
            setLoading(false);
        } catch (e) {
            setLoading(false);
        }
    };

    return (
        <AuthContext.Provider
            value={{
                error,
                setError,
                userID,
                setUserID,
                name,
                setName,
                username,
                setUsername,
                email,
                setEmail,
                password,
                setPassword,
                signedIn,
                loading,
                signIn,
                signOut,
                register,
                reset,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;