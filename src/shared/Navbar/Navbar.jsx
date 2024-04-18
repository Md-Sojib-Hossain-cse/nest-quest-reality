import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider/AuthProvider";

const Navbar = () => {
    const { user, LogOut , loading } = useContext(AuthContext);

    const handleLogOut = () => {
        LogOut()
    }


    const navLinks = <>
        <li className="text-lg font-medium hover:font-semibold hover:shadow-lg"><NavLink to="/">Home</NavLink></li>
        <li className="text-lg font-medium hover:font-semibold hover:shadow-lg"><NavLink to="/updateProfile">Update Profile</NavLink></li>
        <li className="text-lg font-medium hover:font-semibold hover:shadow-lg"><NavLink to="/login">Login</NavLink></li>
        <li className="text-lg font-medium hover:font-semibold hover:shadow-lg"><NavLink to="/register">Register</NavLink></li>
        {user && <li className="text-lg font-medium hover:font-semibold hover:shadow-lg"><NavLink to="/exclusiveProperties">Exclusive Properties</NavLink></li>}
    </>
    return (
        <div className="bg-[#FFFFFF33] border border-[#FFFFFF33] rounded-b-xl sticky top-0 z-10">
            <div className="navbar max-w-7xl mx-auto  backdrop-blur-sm ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navLinks}
                        </ul>
                    </div>
                    <a className="text-xl md:text-2xl lg:text-3xl font-bold drop-shadow-lg">NestQuest Realty</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        loading ? <span className="loading loading-spinner loading-sm mr-12"></span> :
                        user ?
                            <div className="flex gap-2 md:gap-4 justify-center items-center">
                                {user?.photoURL ?
                                    <div className="avatar online">
                                        <div className="w-10 rounded-full">
                                            <img title={`${user?.displayName}`} src={user?.photoURL} />
                                        </div>
                                    </div> :
                                    <div className="avatar online">
                                        <div className="w-10 rounded-full">
                                            <img src="https://i.ibb.co/sbkyhCp/blank-profile.png" />
                                        </div>
                                    </div>
                                }
                                <a onClick={handleLogOut} className="btn text-lg shadow-lg font-bold">LogOut</a>
                            </div> :
                            <Link to="/login" className="btn text-lg shadow-lg font-bold">Login</Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;