import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Swal from "sweetalert2";


const Register = () => {

    const { createUser, passwordError, setPasswordError  , updateUserProfile} = useContext(AuthContext);
    const [registerError, setRegisterError] = useState(null);
    const nameValidationToast = () => toast.warn("Name Not Found!", {
        position: "top-center",
    });
    const emailValidationToast = () => toast.warn("Email Not Found!", {
        position: "top-center",
    });
    const photoURLValidationToast = () => toast.warn("Photo URL Not Found!", {
        position: "top-center",
    });
    const passwordValidationToast = () => toast.warn("Password Not Found!", {
        position: "top-center",
    });

    const handleRegister = e => {
        e.preventDefault();
        setPasswordError(null);
        setRegisterError(null);
        const name = e.target.name.value;
        const email = e.target.email.value;
        const photoURL = e.target.photoURL.value;
        const password = e.target.password.value;
        const form = e.target;
        const userInfo = {displayName : name , photoURL : photoURL};

        if (!name) {
            nameValidationToast();
            return;
        }
        else if (!email) {
            emailValidationToast();
            return;
        }
        else if (!photoURL) {
            photoURLValidationToast();
            return;
        }
        else if (!password) {
            passwordValidationToast();
            return;
        }

        //password validation 
        if (password.length < 6) {
            setPasswordError("Password length must be at least 6 character");
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            setPasswordError("Password must contain an Uppercase letter");
            return;
        }
        else if (!/[a-z]/.test(password)) {
            setPasswordError("Password must contain an Lowercase letter");
            return;
        }


        //register new user
        createUser(email, password)
            .then(result => {
                const user = result.user;
                Swal.fire({
                    title: "Wow!",
                    text: "Successfully Registered!",
                    icon: "success"
                });
                form.reset();
                updateUserProfile(user , userInfo)
            })
            .catch(error => {
                const errorMessage = error?.message;
                setRegisterError(errorMessage.split(":")[1]);
            })
    }

    return (
        <div className="card shrink-0 w-full md:w-2/3 lg:w-1/2 mx-auto shadow-2xl bg-base-100 mt-24">
            <div className="bg-blue-700 rounded-t-xl">
                <h3 className="text-2xl font-bold text-center mt-8 drop-shadow-lg text-white">NestQuest Register!</h3>
                <div className="pt-6">
                    <img src="https://i.ibb.co/61dPY8g/Humaaans-Wireframe.png" alt="" className="w-32 mx-auto" />
                </div>
            </div>
            <form onSubmit={handleRegister} className="card-body bg-base-200">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-lg font-medium drop-shadow-lg">Name</span>
                    </label>
                    <input type="text" name="name" placeholder="Your Name" className="input input-bordered drop-shadow-lg" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-lg font-medium drop-shadow-lg">Email</span>
                    </label>
                    <input type="email" name="email" placeholder="Your Email" className="input input-bordered drop-shadow-lg" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-lg font-medium drop-shadow-lg">Photo URL</span>
                    </label>
                    <input type="text" name="photoURL" placeholder="Photo URL" className="input input-bordered drop-shadow-lg" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-lg font-medium drop-shadow-lg">Password</span>
                    </label>
                    <input type="password" name="password" placeholder="password" className="input input-bordered drop-shadow-lg" />
                    <span className="text-red-600">{passwordError}</span>
                    {registerError && <p className="text-red-600">{registerError}</p>}
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover text-sm font-medium">Forgot password?</a>
                    </label>
                    <label className="label">
                        <p className="label-text-alt text-sm font-medium">Already Registered Please ? <Link to="/login" className="text-blue-600">Login</Link></p>
                    </label>
                </div>
                <div className="form-control mt-2">
                    <button className="btn bg-blue-700 text-lg font-medium text-white">Register</button>
                </div>
            </form>
            <ToastContainer />
        </div>
    );
};

export default Register;