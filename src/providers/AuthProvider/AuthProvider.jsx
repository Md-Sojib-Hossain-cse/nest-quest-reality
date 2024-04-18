import { FacebookAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { getAuth } from "firebase/auth";
import app from "../../firebase/firebase.config";
import PropTypes from "prop-types";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();
    const facebookProvider = new FacebookAuthProvider();

    const [user, setUser] = useState(false);
    const [passwordError, setPasswordError] = useState(null);
    const [loading , setLoading] = useState(true);

    //Register an user
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    //Login an user
    const signInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }

    //Logout current User
    const LogOut = () => {
        return signOut(auth)
    }

    //google Sign In
    const googleSignIn = () => {
        setLoading(true)
        return signInWithPopup(auth , googleProvider);
    }

    //facebook Sign In
    const facebookSignIn = () => {
        setLoading(true)
        return signInWithPopup(auth , facebookProvider);
    }

    //Observe CurrentUser
    useEffect(() => {
        onAuthStateChanged(auth , (currentUser) => {
            if(currentUser){
                setUser(currentUser);
                setLoading(false);
            }
            else{
                setUser(null);
            }
        })
    } , [])


    //update Profile
    const updateUserProfile = (user , userInfo) => {
        return updateProfile(user , userInfo);
    }


    const authInfo = {
        user,
        createUser,
        passwordError,
        setPasswordError,
        signInUser,
        LogOut,
        updateUserProfile,
        googleSignIn,
        facebookSignIn,
        loading,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node,
}

export default AuthProvider;