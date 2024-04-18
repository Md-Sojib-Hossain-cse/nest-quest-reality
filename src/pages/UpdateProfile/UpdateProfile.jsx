import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form"
import { AuthContext } from "../../providers/AuthProvider/AuthProvider";
import Swal from "sweetalert2";


const UpdateProfile = () => {
    const {user , updateUserProfile} = useContext(AuthContext)
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        const {displayName , photoURL } = data;
        updateUserProfile(user , {
            displayName : displayName , photoURL : photoURL
        })
            .then(() => {
                Swal.fire({
                    title: "Wow!",
                    text: "Successfully Updated!",
                    icon: "success"
                });
            })
    }

    return (
        <div className="card shrink-0 w-full md:w-2/3 lg:w-1/2 mx-auto shadow-2xl bg-base-100 mt-8">
            <Helmet>
                <title> NestQuest Reality | Update Profile</title>
            </Helmet>
            <h4 className="text-2xl font-semibold text-black drop-shadow-lg mt-8 text-center">Update User Information!</h4>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2 p-6 rounded-lg shadow-lg">
                <label htmlFor="name">Name</label>
                <input
                defaultValue={user.displayName ? user.displayName : ""}
                type="text" name="name" id="name" className="border border-gray-300 rounded-lg px-3 py-2" 
                {...register("displayName", { required: true })}
                />
                <label htmlFor="email">Email</label>
                <input 
                defaultValue={user.email ? user.email : "example@domain.com"}
                type="email" name="email" id="email" className="border border-gray-300 rounded-lg px-3 py-2" disabled
                />
                <label htmlFor="photoURL">Photo URL</label>
                <input
                defaultValue={user.photoURL ? user.photoURL : ""}
                type="text" name="photoURL" id="photoURL" className="border border-gray-300 rounded-lg px-3 py-2" 
                {...register("photoURL" , { required: true })}
                />
                {errors.exampleRequired && <span>This field is required</span>}
                <input type="submit" value="Update" className="btn bg-blue-700 text-lg font-medium text-white"/>
            </form>
        </div>
    );
};

export default UpdateProfile;