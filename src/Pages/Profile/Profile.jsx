import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { authContext } from "../../Provider/Provider";

const Profile = () => {
    const { logOutUser, user } = useContext(authContext);
    const [isEditable, setIsEditable] = useState(false);

    const { register, handleSubmit, reset } = useForm();

    function handleUpdate(data) {
        data.email = user?.email;
        console.log(data);
    }

    const { data: profile = {} } = useQuery({
        queryKey: ['profile'],
        disabled: !user,
        queryFn: async () => {
            const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/user/${user?.email}`);
            return res.data;
        }
    })
    return (
        <div className=" h-[calc(100vh-64px)] 
        flex flex-col justify-center items-center bg-gradient-to-r from-indigo-600 to-indigo-900 text-secondary">
            <form onSubmit={handleSubmit(handleUpdate)} className='p-5 space-y-3 shadow-md shadow-indigo-600 border border-indigo-500 w-[80%] md:w-1/2'>
                {/*Div for email and mobile */}
                <div className='sm:flex justify-between items-center gap-2 sm:gap-5'>
                    <div className='w-full sm:w-1/2'>
                    <label htmlFor="name" className='text-lg'>Name :</label>
                        <input type="text"
                            autoComplete='off'
                            defaultValue={profile?.name}
                            disabled={!isEditable}
                            className={`focus:text-gray-600 p-2 rounded-md bg-indigo-700 bg-opacity-40 focus:bg-gray-200 w-full border border-indigo-500 focus:outline-0 focus:pl-4 duration-300 hover:cursor-pointer focus:cursor-text disabled:border-transparent disabled:cursor-not-allowed disabled:bg-indigo-800`}
                            {...register('name')}
                        />
                    </div>
                    <div className='w-full sm:w-1/2 space-y-1'>
                    <label htmlFor="college" className='text-lg'>Email :</label>
                        <input type="text"
                            autoComplete='off'
                            defaultValue={profile?.email}
                            disabled={true}
                            className={`focus:text-gray-600 p-2 rounded-md bg-indigo-700 bg-opacity-40 focus:bg-gray-200 w-full border border-indigo-500 focus:outline-0 focus:pl-4 duration-300 hover:cursor-pointer focus:cursor-text disabled:border-transparent disabled:cursor-not-allowed disabled:bg-indigo-800`}
                            {...register('email', { pattern: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/})} />
                    </div>
                </div>
                {/* Div for address and date of birth  */}
                <div className='sm:flex justify-between items-center gap-2 sm:gap-5'>
                    <div className='w-full sm:w-1/2 space-y-1'>
                    <label htmlFor="college" className='text-lg'>Address : </label>
                        <input type="text"
                            autoComplete='off'
                            defaultValue={profile?.address}
                            disabled={!isEditable}
                            className={`focus:text-gray-600 p-2 rounded-md bg-indigo-700 bg-opacity-40 focus:bg-gray-200 w-full border border-indigo-500 focus:outline-0 focus:pl-4 duration-300 hover:cursor-pointer focus:cursor-text disabled:border-transparent disabled:cursor-not-allowed disabled:bg-indigo-800`}
                            {...register('address')}
                        />
                    </div>
                    <div className='w-full sm:w-1/2'>
                        <label htmlFor="college" className='text-lg'>College : </label>
                        <input type="text"
                            autoComplete='off'
                            defaultValue={profile?.college}
                            disabled={!isEditable}
                            className={`focus:text-gray-600 p-2 rounded-md bg-indigo-700 bg-opacity-40 focus:bg-gray-200 w-full border border-indigo-500 focus:outline-0 focus:pl-4 duration-300 hover:cursor-pointer focus:cursor-text disabled:border-transparent disabled:cursor-not-allowed disabled:bg-indigo-800`}
                            {...register('college')} />
                    </div>
                </div>
                {/* Div for buttons */}
                <div className='flex justify-around gap-5 pt-2'>
                    <button
                        type='button'
                        className='inline-flex justify-center rounded-md border-0 bg-indigo-500  bg-opacity-40 w-1/2 py-2 text-base font-medium text-gray-100 hover:bg-opacity-100  duration-300'
                        onClick={logOutUser}
                    >
                        Log Out
                    </button>
                    {
                        isEditable ?
                            <button
                                type='submit'
                                className='inline-flex justify-center rounded-md border-0 bg-indigo-500  bg-opacity-40 w-1/2 py-2 text-base font-medium text-gray-100 hover:bg-opacity-100  duration-300'
                            >
                                Submit
                            </button>
                            :
                            <div
                                onClick={() => {setIsEditable(true)}}
                                className='inline-flex justify-center rounded-md border-0 bg-indigo-500  bg-opacity-40 w-1/2 py-2 text-base font-medium text-gray-100 hover:bg-opacity-100  duration-300 cursor-pointer'>
                                Edit
                            </div>
                    }
                </div>
            </form>
        </div>
    );
};

export default Profile;