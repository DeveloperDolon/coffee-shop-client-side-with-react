import { createContext, useState } from "react";
import PropTypes from "prop-types";
import app from "../firebase/firebase.config";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export const MyContext = createContext();

const DataContext = ({children}) => {

    const auth = getAuth(app);

    const [loading , setLoading] = useState(true);


    const createUserWithEmailPassword = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }


    const contextData = {
        createUserWithEmailPassword,
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