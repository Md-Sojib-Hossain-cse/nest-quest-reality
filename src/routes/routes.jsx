import {
    createBrowserRouter,
} from "react-router-dom";
import Root from "../Root/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import UpdateProfile from "../pages/UpdateProfile/UpdateProfile";
import EstateDetails from "../pages/EstateDetails/EstateDetails";
import ProtectedRoute from "../protectedRoutes/ProtectedRoute";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import ExclusiveProperties from "../pages/ExclusiveProperties/ExclusiveProperties";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch('/estateData.json'),
            },
            {
                path: "/updateProfile",
                element: <ProtectedRoute><UpdateProfile></UpdateProfile></ProtectedRoute>,
            },
            {
                path: "/login",
                element: <Login></Login>,
            },
            {
                path: "/register",
                element: <Register></Register>,
            },
            {
                path: "/estateDetails/:id",
                element: <ProtectedRoute><EstateDetails></EstateDetails></ProtectedRoute>,
                loader: () => fetch('/estateData.json'),
            },
            {
                path: "exclusiveProperties",
                element: <ProtectedRoute><ExclusiveProperties></ExclusiveProperties></ProtectedRoute>,
                loader: () => fetch("/exclusiveProperties.json"),
            }
        ]
    },
]);

export default router;