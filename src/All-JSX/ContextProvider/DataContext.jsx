import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import app from "../firebase/firebase.config";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, deleteUser, signInWithEmailAndPassword, signOut, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

export const MyContext = createContext();

const DataContext = ({children}) => {
    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth(app);
    const [user, setUser] = useState(null);
    const [loading , setLoading] = useState(true);

    const createUserWithEmailPassword = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const deleteUserAccount = () => {
        return deleteUser(auth.currentUser);
    }

    const googleLogin = () => {
        return signInWithPopup(auth, googleProvider);
    }


    const loginWithEmailPassword = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = () => {
        return signOut(auth);
    }

    useEffect(() => {
        onAuthStateChanged(auth, (currentUser) => {
            if(currentUser) {
                setUser(currentUser);
            }
        })
    }, [])

    console.log(user);

    const contextData = {
        createUserWithEmailPassword,
        user,
        loading,
        deleteUserAccount,
        loginWithEmailPassword,
        logOut,
        setUser,
        googleLogin
    }

    return (
        <MyContext.Provider value={contextData}>
            {children}
        </MyContext.Provider>
    );
};

export default DataContext;

DataContext.propTypes = {
    children: PropTypes.node
}