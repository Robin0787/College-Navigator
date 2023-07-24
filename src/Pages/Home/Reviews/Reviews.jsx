import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { ImSpinner9 } from "react-icons/im";
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import ReactStarsRating from 'react-awesome-stars-rating';
import 'swiper/css';
import 'swiper/css/navigation';
// import required modules
import { FaQuoteLeft } from "react-icons/fa";
import { Navigation } from 'swiper/modules';

const Reviews = () => {

    const { data: reviews = [], isLoading } = useQuery({
        queryKey: ['reviews'],
        queryFn: async () => {
            const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/reviews`);
            return res.data.reverse();
        }
    })
    console.log(reviews);

    return (
        <section className="pb-20 px-3 md:px-12 rounded-md">
            <article className='mb-6 md:mb-8 lg:mb-12 pb-4 md:pb-8 flex justify-center items-center'>
                <h2 className="text-3xl sm:text-4xl font-semibold text-center whitespace-pre p-5 
                shadow-[0px_3px_0px] rounded-md shadow-blue-300">Glowing College Reviews</h2>
            </article>
            {
                isLoading ? (
                    <div className='h-[400px] flex justify-center items-center'>
                        <ImSpinner9 className='animate-spin text-primary' size={30} />
                    </div>
                ) : (
                    <Swiper navigation={true} modules={[Navigation]} className="w-full">
                        {
                            reviews.map((item) => {
                                const { collegeImage, collegeName, review, rating, name, address } = item;
                                return <SwiperSlide key={review._id}
                                    className="">
                                    <article className="w-[90%] mx-auto flex flex-col md:flex-row items-center justify-center gap-3 md:gap-6 lg:gap-8">
                                        <div className="w-full md:w-1/2">
                                            <img src={collegeImage}
                                                className="h-[340px] w-full rounded-md" alt={collegeName} />
                                        </div>
                                        <div className="w-full md:w-1/2 space-y-3">
                                            <div className="text-center">
                                                <FaQuoteLeft size={40} className="text-gray-600 mx-auto mb-5" />
                                                <i className="text-lg block text-center my-5">{review}</i>
                                                <ReactStarsRating isEdit={false} className="flex justify-center items-center" primaryColor="#60a5fa"
                                                    value={rating} size={25} />
                                                <div>
                                                    <h2 className="text-lg ">{name}</h2>
                                                    <h2 className="text-base">{address}</h2>
                                                </div>
                                            </div>
                                        </div>
                                    </article>
                                </SwiperSlide>
                            })
                        }
                    </Swiper>
                )
            }
        </section>
    );
};

export default Reviews;