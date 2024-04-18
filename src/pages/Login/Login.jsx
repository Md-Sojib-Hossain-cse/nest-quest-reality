import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import { IoLogoGoogle, IoLogoFacebook } from "react-icons/io5";
import Swal from "sweetalert2";

const Login = () => {
    const { signInUser, user, LogOut, googleSignIn, facebookSignIn } = useContext(AuthContext);
    const credentialError = () => toast.error("Email or Password Not matched!", {
        position: "top-center",
    });
    const location = useLocation();
    const navigate = useNavigate();

    //sign in user with email password
    const handleSignIn = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const form = e.target;
        signInUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                Swal.fire({
                    title: "Wow!",
                    text: "Successfully Signed In!",
                    icon: "success"
                });
                navigate(location.state)
                form.reset();
            })
            .catch(error => {
                const errorMessage = error.message;
                if (errorMessage.split("(")[1].split(")")[0] === "auth/invalid-credential") {
                    credentialError()
                }
            })
    }

    //Google sign in
    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(() => {
                Swal.fire({
                    title: "Wow!",
                    text: "Successfully Signed In!",
                    icon: "success"
                });
            })
    }

    //Facebook sign in
    const handleFacebookSignIn = () => {
        facebookSignIn()
            .then(() => {
                Swal.fire({
                    title: "Wow!",
                    text: "Successfully Signed In!",
                    icon: "success"
                });
            })
    }

    //LogOut User 
    const handleLogOut = () => {
        LogOut()
    }


    return (
        <div className="card shrink-0 w-full md:w-2/3 lg:w-1/2 mx-auto shadow-2xl bg-base-100 mt-8">
            <div className="bg-blue-700 rounded-t-xl">
                <h3 className="text-2xl font-bold text-center mt-8 drop-shadow-lg text-white">NestQuest Login!</h3>
                <div className="pt-6">
                    <img src="https://i.ibb.co/61dPY8g/Humaaans-Wireframe.png" alt="" className="w-32 mx-auto" />
                </div>
            </div>
            <form onSubmit={handleSignIn} className="card-body bg-base-200">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-lg font-medium drop-shadow-lg">Email</span>
                    </label>
                    <input type="email" name="email" placeholder="Your Email" className="input input-bordered drop-shadow-lg" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-lg font-medium drop-shadow-lg">Password</span>
                    </label>
                    <input type="password" name="password" placeholder="password" className="input input-bordered drop-shadow-lg" />
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover text-sm font-medium">Forgot password?</a>
                    </label>
                    <label className="label">
                        <p className="label-text-alt text-sm font-medium">Do not have an account ? Please  <Link to="/register" className="text-blue-600">Register</Link></p>
                    </label>
                </div>
                <div className="form-control mt-2">
                    {
                        user ?
                            <div className="w-full">
                                <button className="btn bg-blue-700 text-lg w-1/2 font-medium text-white" disabled>Login</button>
                                <button onClick={handleLogOut} className="btn bg-blue-700 text-lg w-1/2 font-medium text-white">LogOut</button>
                            </div> :
                            <button className="btn bg-blue-700 text-lg font-medium text-white">Login</button>
                    }
                </div>
            </form>
            <div className="bg-blue-700 rounded-b-xl pb-8">
                <div className="divider p-4 text-white text-lg font-medium">Social Login</div>

                {
                    user ?
                        <div className="flex justify-center items-center gap-6">
                            <button onClick={handleGoogleSignIn} className="p-2 rounded-full border-2 border-gray-300" disabled><IoLogoGoogle className="text-gray-300 text-2xl" /></button>
                            <button onClick={handleFacebookSignIn} className="p-2 rounded-full border-2 border-gray-300 " disabled><IoLogoFacebook className="text-gray-300 text-2xl" /></button>
                        </div> :
                        <div className="flex justify-center items-center gap-6">
                            <button onClick={handleGoogleSignIn} className="p-2 rounded-full border-2 border-white"><IoLogoGoogle className="text-white text-2xl" /></button>
                            <button onClick={handleFacebookSignIn} className="p-2 rounded-full border-2 border-white"><IoLogoFacebook className="text-white text-2xl" /></button>
                        </div>
                }

            </div>
            <ToastContainer />
        </div>
    );
};

export default Login;