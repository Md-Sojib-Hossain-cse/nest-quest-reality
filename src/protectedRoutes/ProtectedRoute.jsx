import PropTypes from "prop-types"
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider/AuthProvider";

const ProtectedRoute = ({children}) => {
    const {user} = useContext(AuthContext);
    const locaiton = useLocation();
    const path = locaiton.pathname;

    if(user){
        return children
    }
    
    return <Navigate to="/login" state={path}></Navigate>
};

ProtectedRoute.propTypes = {
    children : PropTypes.node,
}

export default ProtectedRoute;