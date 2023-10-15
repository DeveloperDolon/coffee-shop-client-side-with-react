import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import app from "../firebase/firebase.config";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";

export const MyContext = createContext();

const DataContext = ({children}) => {

    const auth = getAuth(app);
    const [user, setUser] = useState(null);
    const [loading , setLoading] = useState(true);

    const createUserWithEmailPassword = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
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
        loading
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