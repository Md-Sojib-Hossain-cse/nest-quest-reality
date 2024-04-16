import { createUserWithEmailAndPassword } from "firebase/auth";
import { createContext, useState } from "react";
import { getAuth } from "firebase/auth";
import app from "../../firebase/firebase.config";
import PropTypes from "prop-types";

export const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const auth = getAuth(app);

    const [passwordError , setPasswordError] = useState(null);

    const createUser = ( name , email) => {
        return createUserWithEmailAndPassword(auth , name , email);
    }

    const authInfo = {
        createUser,
        passwordError,
        setPasswordError,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children : PropTypes.node,
}

export default AuthProvider;