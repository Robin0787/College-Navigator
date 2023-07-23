import {
    useQuery,
} from '@tanstack/react-query';
import axios from 'axios';
import { BsArrowRightCircleFill, BsFillCalendarCheckFill } from "react-icons/bs";
import { ImSpinner9 } from "react-icons/im";
import { SiHashnode } from 'react-icons/si';

const Admission = () => {

    const { data: colleges = [], isLoading } = useQuery({
        queryKey: ['colleges'],
        queryFn: async () => {
            const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/colleges`);
            return res.data;
        }
    })

    return (
        <section className='p-4 md:p-8'>
            {
                isLoading ? (
                    <div className='h-[calc(100vh-64px)] flex justify-center items-center'>
                        <ImSpinner9 className='animate-spin text-primary' size={30} />
                    </div>
                ) : (
                    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-8 ">
                        {
                            colleges.map((college, index) => {
                                const { name, admissionDates, location, _id } = college;
                                return (
                                    <div key={index}
                                        className="shadow-[2px_0px_10px] shadow-blue-100 text-gray-500 p-4 text-base relative group overflow-hidden rounded-md">
                                        <h2 className="text-3xl font-semibold text-gray-700">{name}</h2>
                                        <p className='text-gray-400'>{location}</p>
                                        {/* Admission Date section */}
                                        <div className='my-3'>
                                            <h2 className="flex gap-1 items-center"><SiHashnode size={15} className='text-primary' /> Admission</h2>
                                            <h2 className="flex gap-2 items-center"><BsFillCalendarCheckFill size={15} className="text-primary" /> {admissionDates}</h2>
                                        </div>
                                        {/* Details button */}
                                        <div
                                            className='absolute h-full w-full bg-gradient-to-r from-indigo-500 to-indigo-800 flex justify-center items-center gap-2 top-0 right-full cursor-pointer opacity-0 duration-700 group-hover:right-0 group-hover:opacity-90'>
                                            <button className='text-white text-xl'>Book</button>
                                            <BsArrowRightCircleFill size={20} className='text-white mt-1' />
                                        </div>
                                    </div>
                                )

                            })
                        }
                    </section>
                )
            }
        </section>
    );
};

export default Admission;