import { createContext } from "react";
import PropTypes from "prop-types";

export const MyContext = createContext();

const DataContext = ({children}) => {

    const contextData = {

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