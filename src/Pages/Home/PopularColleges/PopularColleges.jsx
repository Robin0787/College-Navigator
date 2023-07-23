import {
    useQuery,
} from '@tanstack/react-query';
import axios from 'axios';
import { ImSpinner9 } from "react-icons/im";
import PopularCollegeCard from '../../../Components/PopularCollegeCard/PopularCollegeCard';


const PopularColleges = () => {
    const { data: popularColleges = [], isLoading } = useQuery({
        queryKey: ['popularColleges'],
        queryFn: async () => {
            const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/colleges`);
            return res.data;
        }
    })

    return (
        <section className='pb-12 px-3 md:px-6'>
            <div className='my-6 md:my-8 lg:my-12 flex justify-center items-center'>
                <h2 className="text-3xl sm:text-4xl font-semibold text-center whitespace-pre p-5 
                shadow-[0px_3px_0px] rounded-md shadow-blue-300">Most Popular Colleges</h2>
            </div>
            {
                isLoading ? (
                    <div className='h-[calc(100vh-64px)] flex justify-center items-center'>
                        <ImSpinner9 className='animate-spin text-primary' size={30} />
                    </div>
                ) : (
                    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-8 p-4 md:p-8">
                        {
                            popularColleges?.slice(0, 3)?.map((college, index) => {
                                return <PopularCollegeCard college={college} key={index} isShadow={true} index={index}/>
                            })
                        }
                    </section>
                )
            }
        </section>

    );
};

export default PopularColleges;