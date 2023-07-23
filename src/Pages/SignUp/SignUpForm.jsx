
import bcrypt from 'bcryptjs';
import { updateProfile } from "firebase/auth";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { FaStarOfLife } from "react-icons/fa";
import { ImSpinner9 } from "react-icons/im";
import { useLocation, useNavigate } from "react-router-dom";
import SaveUserToDatabase from "../../Hooks/SaveUserToDatabase";
import { authContext } from "../../Provider/Provider";

const SignUpForm = () => {
    const [passError, setPassError] = useState('');
    const [showPass, setShowPass] = useState(false);
    const [showEye, setShowEye] = useState(false);
    const [focused, setFocused] = useState(false);
    const [isPassOk, setIsPassOk] = useState(false);
    const [isPassMatched, setIsPassMatched] = useState(true);
    const { register, handleSubmit, formState: { errors }, reset, setFocus } = useForm();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from || '/';

    const { signUpUser, formLoading, setFormLoading } = useContext(authContext);

    function formSubmit(data) {
        setFormLoading(true);
        if (isPassOk) {
            if (data.password !== data.confirmPassword) {
                setFormLoading(false);
                setIsPassMatched(false);
                setFocus('confirmPassword');
            } else {
                setIsPassMatched(true);
                signUpUser(data.email, data.password)
                    .then(async res => {
                        setFormLoading(false);
                        const user = res.user;
                        updateProfile(user, { displayName: data.name });
                        const hashedPass = bcrypt.hashSync(data.password, 10);
                        const userInfo = {
                            name: data.name,
                            email: user.email,
                            password: hashedPass
                        }
                        SaveUserToDatabase(user.email, userInfo)
                            .then(data => {
                                if(data.upsertedCount > 0 || data.matchedCount > 0) {
                                    reset();
                                    navigate(from, {replace: true});
                                }
                            })
                    })
                    .catch(err => {
                        setFormLoading(false);
                        toast('Error');
                        console.log(err.message);
                    })
                // ------------------Next Code Will Start From Here------------------- //
                // ------------------Next Code Will Start From Here------------------- //
                // ------------------Next Code Will Start From Here------------------- //
            }
        } else {
            setFocus('password');
            setFormLoading(false);
        }
    }

    function handlePassChange(e) {
        const pass = e.target.value;

        if (!/(?=.*[A-Z])/.test(pass)) {
            setPassError('Must contain a uppercase letter.');
            setIsPassOk(false);
        }
        else if (!/(?=.*[0-9].*[0-9])/.test(pass)) {
            setPassError('Must contain two numbers');
            setIsPassOk(false);
        }
        else if (!/(?=.*[@#$%!*?><+-])/.test(pass)) {
            setPassError('Must contain a special character');
            setIsPassOk(false);
        }
        else if (pass.length < 6) {
            setPassError('Must contain minimum six characters');
            setIsPassOk(false);
        }
        else {
            setPassError('');
            setIsPassOk(true);
        }
        showEyeIconAndPassError(pass);
    }

    function showEyeIconAndPassError(pass) {
        if (pass.length > 0) {
            setShowEye(true);
        } else {
            setShowEye(false);
            setPassError('');
        }
    }

    return (
        <section className="flex justify-center items-center h-full w-full">
            <form className="text-white px-6 text-sm flex flex-col gap-3 w-full" onSubmit={handleSubmit(formSubmit)}>
                <div className="space-y-1 relative">
                    <label htmlFor="name">Name</label>
                    {errors.name && <FaStarOfLife size={8} className="absolute top-[2px] left-12 text-red-500" />}
                    <br />
                    <input type="text" name="name"
                        autoComplete="off"
                        {...register('name', { required: true })}
                        className="w-full px-2 py-2 rounded-md border outline-0 text-gray-100 focus:text-gray-600  border-gray-300 bg-gradient-to-l from-blue-500 to-blue-600  focus:from-gray-100 focus:to-gray-100 duration-300" />

                </div>
                <div className="space-y-1 relative">
                    <label htmlFor="email">Email</label>
                    {errors.email && <FaStarOfLife size={8} className="absolute top-[2px] left-12 text-red-500" />}
                    <br />
                    <input type="text" name="email"
                        autoComplete="off"
                        {...register('email', { required: true, pattern: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/ })}
                        className="w-full px-2 py-2 rounded-md border outline-0  border-gray-300 bg-gradient-to-l from-blue-500 to-blue-600 text-gray-100  focus:text-gray-600
                focus:from-gray-100 focus:to-gray-100 duration-300"/>
                </div>
                <div className="space-y-1 relative mb-2">
                    <label htmlFor="password">Password</label>
                    {errors.password && <FaStarOfLife size={8} className="absolute top-[2px] 
                    left-[68px] text-red-500" />}
                    <br />
                    <div className="relative">
                        <input type={showPass ? 'text' : 'password'} name="password"
                            autoComplete="off"
                            onFocus={() => { setFocused(true) }}
                            className="w-full px-2 py-2 rounded-md border outline-0  border-gray-300 bg-gradient-to-l from-blue-500 to-blue-600 text-gray-100  focus:text-gray-600  focus:from-gray-100 focus:to-gray-100 duration-300 group"
                            {...register('password',
                                {
                                    required: true,
                                    onChange: (e) => { handlePassChange(e) },
                                    onBlur: () => { setFocused(false) }
                                })
                            }
                        />
                        {
                            passError ?
                                <p className="absolute -bottom-4 left-0 text-xs text-green-300 whitespace-pre">{passError}</p> : ''
                        }
                        {
                            showEye &&
                            (
                                showPass ?
                                    <BsEye size={16} className={`absolute top-3 right-3 cursor-pointer ${focused ? 'text-blue-500' : 'text-gray-100'}`} onClick={() => { setShowPass(!showPass) }} />
                                    :
                                    <BsEyeSlash size={16} className={`absolute top-3 right-3 cursor-pointer ${focused ? 'text-blue-500' : 'text-gray-100'}`} onClick={() => { setShowPass(!showPass) }} />
                            )
                        }
                    </div>
                </div>
                <div className="space-y-1 relative mb-2">
                    <label htmlFor="password">Confirm Password</label>
                    {errors.confirmPassword && <FaStarOfLife size={8} className="absolute top-[2px] 
                    left-[122px] text-red-500" />}
                    <br />
                    <input type={showPass ? 'text' : 'password'} name="password"
                        autoComplete="off"
                        className="w-full px-2 py-2 rounded-md border outline-0  border-gray-300 bg-gradient-to-l from-blue-500 to-blue-600 text-gray-100  focus:text-gray-600  focus:from-gray-100 focus:to-gray-100 duration-300"
                        {...register('confirmPassword', { required: true })}
                    />
                    {
                        isPassMatched ? '' : <p className="absolute -bottom-4 left-0 text-xs text-green-300 whitespace-pre">Password didn't match</p>
                    }
                </div>
                <button
                    type="submit"
                    className=' w-full mt-2 py-2 flex justify-center items-center rounded-md border outline-0  border-gray-300 bg-gray-100 text-blue-600 hover:bg-transparent hover:text-gray-100 hover:bg-gray-100 duration-300  disabled:bg-transparent disabled:hover:bg-transparent disabled:text-blue-600 disabled:cursor-wait'
                    disabled={formLoading}
                >
                    {formLoading ? <ImSpinner9 size={20} className="text-white animate-spin duration-300 text-center" /> : 'Sign Up'}
                </button>
            </form>
        </section>

    );
};

export default SignUpForm;