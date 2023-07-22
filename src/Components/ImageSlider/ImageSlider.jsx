
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Pagination } from 'swiper/modules';


const ImageSlider = ({ photos }) => {
    return (
        <section className="h-full w-full">
            <Swiper
                pagination={{
                    dynamicBullets: true,
                }}
                modules={[Pagination]}
                className="h-full w-full"
            >
                {
                    photos?.map((photo, index) => {
                        return (<SwiperSlide key={index} className='cursor-grab overflow-hidden'>
                            <img src={photo} alt="" className="h-full w-full object-cover hover:scale-110 duration-300" />
                        </SwiperSlide>)
                    })
                }
            </Swiper>
        </section>
    );
};

export default ImageSlider;