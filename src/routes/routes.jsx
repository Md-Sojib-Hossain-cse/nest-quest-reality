import {
    createBrowserRouter,
} from "react-router-dom";
import Root from "../Root/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import UpdateProfile from "../pages/UpdateProfile/UpdateProfile";

const router = createBrowserRouter([
        {
            path: "/",
            element: <Root></Root>,
            children : [  
                {
                    path : "/",
                    element : <Home></Home>,
                    loader : () => fetch('./estateData.json'),
                },
                {
                    path : "/updateProfile",
                    element : <UpdateProfile></UpdateProfile>,
                },
                {
                    path : "/login",
                    element : <Login></Login>,
                },
                {
                    path : "/register",
                    element : <Register></Register>,
                },
            ]
        },
    ]);

export default router;