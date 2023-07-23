import React, { useContext } from "react";
import { toast } from "react-hot-toast";
import { BsGithub } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { useLocation, useNavigate } from "react-router-dom";
import SaveUserToDatabase from "../../Hooks/SaveUserToDatabase";
import { authContext } from "../../Provider/Provider";
const SocialLogin = () => {
    const { continueWithGoogle, continueWithGithub, formLoading, setFormLoading } = useContext(authContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from || '/';


    function signUpWithGoogle() {
        setFormLoading(true);
        continueWithGoogle()
            .then(res => {
                setFormLoading(false);
                const user = res.user;
                const uesrInfo = {
                    name: user.displayName,
                    email: user.email,
                    photoURL: user.photoURL
                }
                SaveUserToDatabase(user.email, uesrInfo)
                    .then(data => {
                        if (data.upsertedCount > 0 || data.matchedCount > 0) {
                            navigate(from, { replace: true });
                        }
                    });
            })
            .catch((err) => {
                setFormLoading(false);
                toast.error('Failed');
                console.log(err.message);
            })
    }

    function signUpWithGithub() {
        continueWithGithub()
            .then(res => {
                setFormLoading(false);
                const user = res.user;
                const uerInfo = {
                    name: user.displayName,
                    email: user.email,
                    photoURL: user.photoURL
                }
                SaveUserToDatabase(user.email, uerInfo)
                    .then(data => {
                        if (data.upsertedCount > 0 || data.matchedCount > 0) {
                            navigate(from, { replace: true });
                        }
                    })
            })
            .catch((err) => {
                toast.error('Failed');
                console.log(err.message);
            })
    }

    return (
        <div className="flex flex-col justify-center items-center gap-3 my-5">
            <button
                disabled={formLoading}
                className={`flex justify-center items-center gap-3 px-3 py-2 rounded-md border text-gray-100 hover:text-gray-800 text-sm bg-transparent hover:bg-white
                disabled:transparent disabled:hover:bg-transparent disabled:text-gray-100 disabled:cursor-wait duration-300 `} onClick={signUpWithGoogle}>
                {React.createElement(FcGoogle, { size: '20' })}
                <span className="whitespace-pre">Continue with Google</span>
            </button>
            <button
                disabled={formLoading}
                className="flex justify-center items-center gap-3 px-3 py-2 rounded-md border text-gray-100 hover:text-gray-800 text-sm bg-transparent hover:bg-white
                disabled:transparent disabled:hover:bg-transparent disabled:text-gray-100 disabled:cursor-wait duration-300"
                onClick={signUpWithGithub}>
                {React.createElement(BsGithub, { size: '20' })}
                <span className="whitespace-pre">Continue with GitHub</span>
            </button>
        </div>
    );
};

export default SocialLogin;