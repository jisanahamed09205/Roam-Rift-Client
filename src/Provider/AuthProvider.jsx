import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';
import { removeToken } from "../api/auth";

export const AuthContext = createContext(null)

const googleProvider = new GoogleAuthProvider();

const auth = getAuth(app);

const AuthProvider = ({children}) => {

    const [user,setUser] = useState(null);

    const [loading, setLoading] = useState(true);

    const createUser = (email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const update = (name,photo)=>{
        setLoading(true)
        return updateProfile(auth.currentUser,{
            displayName:name, 
            photoURL:photo
        })
    }

    const login = (email,password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    const signInWithGoogle = () =>{
        setLoading(true)
        return signInWithPopup(auth,googleProvider)
    }

    const logOut = async() =>{
        setLoading(true)
        await removeToken()
        return signOut(auth)
    }

    const resetPassword = email => {
        setLoading(true)
        return sendPasswordResetEmail(auth, email)
      }

    useEffect(()=>{
        const unSubscribe =  onAuthStateChanged(auth,currentUser =>{
            setUser(currentUser);
            console.log('CurrentUser-->', currentUser)
            setLoading(false)
        })
        return () =>{
            unSubscribe();
        }
    },[])

    const authInfo ={
        user,createUser,logOut,login,loading,signInWithGoogle,update,resetPassword
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;