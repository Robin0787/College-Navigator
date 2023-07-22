import axios from "axios";
import { useEffect, useRef, useState } from "react";
import toast from 'react-hot-toast';
import { ImSpinner9 } from "react-icons/im";
import SingleCollege from "../../../Components/SingleCollege/SingleCollege";
const SearchCollege = () => {
    const [colleges, setColleges] = useState(null);
    const inputRef = useRef();
    const [isFocused, setFocus] = useState(false);
    const [dataLoading, setDataLoading] = useState(true);
    useEffect(() => {
        async function fetchCollege() {
            const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/colleges`);
            setDataLoading(false);
            inputRef.current.value = '';
            const data = res.data.splice(0, 2);
            setColleges(data);
        }
        fetchCollege();
    }, []);

    async function handleSearch(e) {
        e.preventDefault();
        setDataLoading(true);
        setColleges(null);
        const name = inputRef.current.value;
        if (name.length < 1) {
            setDataLoading(false);
            toast.error('Please write something!')
            inputRef.current.focus();
        } else {
            const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/college/${name}`);
            if (res.data.length > 0) {
                setDataLoading(false);
                setColleges(res.data);
                inputRef.current.value = '';
            } else {
                setDataLoading(false);
                setColleges(null);
            }
        }
    }
    return (
        <section className="min-h-[calc(100vh-64px)] bg-bgHome bg-cover">
            <article className="min-h-[calc(100vh-64px)] w-full bg-gray-800 bg-opacity-50">
                {/*Search box */}
                <form onSubmit={handleSearch} className="flex justify-center items-center relative pt-10">
                    <input type="text"
                        ref={inputRef}
                        onFocus={() => { setFocus(!isFocused) }}
                        onBlur={() => { setFocus(!isFocused) }}
                        placeholder="College Name"
                        className={`py-3 px-5 w-[60%] md:w-[40%] lg:w-[25%] border-0 bg-secondary text-gray-600 focus:outline-0 rounded-l-md duration-300 text-xs sm:text-base
                        relative ${isFocused ? 'left-0' : 'left-8'} `}
                    />
                    <button
                        type="submit"
                        className={`rounded-r-md px-6 py-3 border-0 bg-primary text-secondary 
                        relative  ${isFocused ? 'left-0 ' : '-left-12  sm:-left-14'} duration-300 text-xs sm:text-base`}
                    >Search</button>
                </form>
                <section className="w-[100%] md:w-[70%] lg:w-[70%] mx-auto opacity-80 p-3 md:p-0 mt-5">
                    {
                        dataLoading ?
                            (
                                <div className='h-[50vh] flex justify-center items-center'>
                                    <ImSpinner9 className='animate-spin text-secondary' size={30} />
                                </div>
                            ) : (
                                <section className="grid grid-cols-1 gap-5 lg:gap-8 p-4 md:p-8">
                                    {
                                        colleges ? (
                                            colleges?.map((college, index) => {
                                                return <SingleCollege college={college} key={index} isShadow={false} />
                                            })
                                        ) : (
                                            <div className="text-center my-5 text-secondary text-3xl">
                                                <h1>No College Found!</h1>
                                            </div>
                                        )
                                    }
                                </section>
                            )
                    }
                </section>
            </article>
        </section>
    );
};

export default SearchCollege;