import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center">
            <img src="https://i.ibb.co/02XgyRF/errorpage.png" alt="ErrorPage"  className="w-48"/>
            <h4 className="text-3xl font-bold mt-4">Page Not Found!</h4>
            <p className="mt-2">Go back to Home Page</p>
            <Link to="/" className="btn bg-blue-700 text-lg font-medium text-white mt-6">Home</Link>
        </div>
    );
};

export default ErrorPage;