import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { app } from '../firebase/firebase.config';
const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider();

export const AuthContext = createContext(null)

const AuthProviders = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const updateUserData = (name, photoURL) => {
        setLoading(true)
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photoURL
        }).then(() => {
            // Profile updated!
            // ...
        }).catch((error) => {
            // console.log(error.message);
            // An error occurred
            // ...
        });
    }

    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleSignIn = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, loggedUser => {
            setUser(loggedUser)
            setLoading(false)
        })
        return () => {
            unsubscribe()
        }
    }, [])

    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    const authInfo = {
        user,
        loading,
        setLoading,
        createUser,
        updateUserData,
        signIn,
        googleSignIn,
        logOut
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;