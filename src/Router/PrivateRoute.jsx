import { useContext } from "react";
import { ImSpinner9 } from "react-icons/im";
import { Navigate, useLocation } from "react-router-dom";
import { authContext } from "../Provider/Provider";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(authContext);
    const location = useLocation();
    if (loading) {
        return (
            <div className='h-[calc(100vh-64px)] flex justify-center items-center'>
                <ImSpinner9 className='animate-spin text-primary' size={30} />
            </div>
        )
    }
    if(!user){
        return <Navigate to={'/signup'} state={{from: location}} replace/>
    }
    return children
};

export default PrivateRoute;