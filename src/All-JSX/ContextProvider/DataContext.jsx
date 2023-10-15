import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import app from "../firebase/firebase.config";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, deleteUser } from "firebase/auth";

export const MyContext = createContext();

const DataContext = ({children}) => {

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
        deleteUserAccount
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