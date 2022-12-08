import React, { createContext, useContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile} from 'firebase/auth'
import app from '../firebase/firebase.config';

export const AuthContext = createContext()
const auth = getAuth(app)
const AuthProvider = ({children}) => {
  const [user, setUser]=useState('')

    const createUser =(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const userProfileName =(provider)=>{
        return updateProfile(auth.currentUser, provider)
    }

    const logInUser =(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }

    const logOutUser=()=>{
        return signOut(auth)
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth , (currentUser)=>{
            setUser(currentUser)
        })

        return ()=> unsubscribe()
    },[])

    const name = 'bappy'
    const authInfo = {name }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

export const useProvider = () =>{
  const content = useContext(AuthContext)
  return content
}