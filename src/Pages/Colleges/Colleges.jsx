import {
    useQuery,
} from '@tanstack/react-query';
import axios from 'axios';
import { ImSpinner9 } from "react-icons/im";
import SingleCollege from '../../Components/SingleCollege/SingleCollege';

const Colleges = () => {
    const { data: colleges = [], isLoading } = useQuery({
        queryKey: ['colleges'],
        queryFn: async () => {
            const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/colleges`);
            return res.data;
        }
    })
    
    return (
        <>
            {
                isLoading ? (
                    <div className='h-[calc(100vh-64px)] flex justify-center items-center'>
                        <ImSpinner9 className='animate-spin text-primary' size={30} />
                    </div>
                ) : (
                    <section className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-8 p-4 md:p-8">
                        {
                            colleges.map((college, index) => {
                                return <SingleCollege college={college} key={index} isShadow={true}/>
                            })
                        }
                    </section>
                )
            }
        </>
    );
};

export default Colleges;