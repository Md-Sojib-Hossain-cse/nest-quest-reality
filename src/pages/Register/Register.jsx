import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Swal from "sweetalert2";


const Register = () => {

    const { createUser, passwordError, setPasswordError } = useContext(AuthContext);
    setPasswordError(null)
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
        const name = e.target.name.value;
        const email = e.target.email.value;
        const photoURL = e.target.photoURL.value;
        const password = e.target.password.value;
        const form = e.target;

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
                console.log(user);
                Swal.fire({
                    title: "Good job!",
                    text: "You clicked the button!",
                    icon: "success"
                });
                form.reset();
            })
            .catch(error => {
                console.error(error);
            })
    }

    return (
        <div>
            <div className="card shrink-0 w-full md:w-2/3 lg:w-1/2 mx-auto shadow-2xl bg-base-100">
                <form onSubmit={handleRegister} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name="name" placeholder="Your Name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="Your Email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="text" name="photoURL" placeholder="Photo URL" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="password" className="input input-bordered" />
                        <span className="text-red-600">*{passwordError}</span>
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                        <label className="label">
                            <p className="label-text-alt link link-hover">Already Registered Please ? <Link to="/login" className="text-blue-600">Login</Link></p>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Register</button>
                    </div>
                </form>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Register;