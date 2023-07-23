import {
    useQuery,
} from '@tanstack/react-query';
import axios from 'axios';
import { ImSpinner9 } from "react-icons/im";
import SingleCard from './SingleCard';

const Admission = () => {

    const { data: colleges = [], isLoading } = useQuery({
        queryKey: ['colleges'],
        queryFn: async () => {
            const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/colleges`);
            return res.data;
        }
    });

    return (
        <section className='p-4 md:p-8'>
            {
                isLoading ? (
                    <div className='h-[calc(100vh-68px)] flex justify-center items-center'>
                        <ImSpinner9 className='animate-spin text-primary' size={30} />
                    </div>
                ) : (
                    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-8 ">
                        {
                            colleges.map((college, index) => {
                                return <SingleCard college={college} key={index} />
                            })
                        }
                    </section>
                )
            }
        </section>
    );
};

export default Admission;