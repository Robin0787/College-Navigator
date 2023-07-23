import AOS from 'aos';
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
        const name = inputRef.current.value;
        if (name.length < 1) {
            setDataLoading(false);
            toast.error('Please write something!')
            inputRef.current.focus();
            return;
        } else {
            setColleges(null);
            const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/college/${name}`);
            if (res.data.length > 0) {
                setDataLoading(false);
                setColleges(res.data);
                if (inputRef.current.value.length > 0) {
                    inputRef.current.value = '';
                }
            } else {
                setDataLoading(false);
                setColleges(null);
            }
        }
    }

    AOS.init({
        // Global settings:
        disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
        startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
        initClassName: 'aos-init', // class applied after initialization
        animatedClassName: 'aos-animate', // class applied on animation
        useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
        disableMutationObserver: false, // disables automatic mutations' detections (advanced)
        debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
        throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)


        // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
        offset: 120, // offset (in px) from the original trigger point
        delay: 0, // values from 0 to 3000, with step 50ms
        duration: 400, // values from 0 to 3000, with step 50ms
        easing: 'ease', // default easing for AOS animations
        once: false, // whether animation should happen only once - while scrolling down
        mirror: false, // whether elements should animate out while scrolling past them
        anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

    });

    return (
        <section className="min-h-[calc(100vh-64px)] bg-bgHome bg-cover overflow-hidden">
            <article className="min-h-[calc(100vh-64px)] w-full bg-gray-800 bg-opacity-50">
                {/*Search box */}
                <form onSubmit={handleSearch} data-aos="fade-down" data-aos-delay="400" 
                data-aos-duration="800" className="flex justify-center items-center relative pt-10">
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
                <section 
                data-aos="fade-down" data-aos-delay="800" 
                data-aos-duration="500"
                className="w-[100%] md:w-[70%] lg:w-[70%] mx-auto opacity-90 p-3 md:p-0 mt-5">
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
                                                return <SingleCollege college={college} key={index} isShadow={false} index={index} />
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