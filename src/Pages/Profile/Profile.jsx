import { useContext } from "react";
import { authContext } from "../../Provider/Provider";

const Profile = () => {
    const { logOutUser } = useContext(authContext);
    return (
        <div className="text-5xl text-center font-thin bg-blue-500 text-white h-[calc(100vh-64px)] 
        flex flex-col justify-center items-center gap-3">
            <h2>Profile</h2>
            <button
                onClick={logOutUser}
                className='text-blue-500 bg-white hover:text-white text-base md:text-md px-3 py-2 md:px-6 md:py-2 rounded-md ring-2 ring-blue-500 hover:bg-blue-600  duration-300'>Log Out</button>
        </div>
    );
};

export default Profile;