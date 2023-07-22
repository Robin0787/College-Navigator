import ReactStarsRating from 'react-awesome-stars-rating';
import { BsFillCalendarCheckFill } from "react-icons/bs";
import { SiHashnode } from "react-icons/si";
import { useLoaderData } from "react-router-dom";
import ImageSlider from '../../Components/ImageSlider/ImageSlider';



const CollegeDetails = () => {
    const details = useLoaderData();
    const { name, image, description, photos, location, establishedDate, admissionDates, events, researchHistory, sports, ratings, _id } = details;

    return (
        <section
            className='w-full min-h-[calc(100vh-64px)] mx-auto p-3 sm:p-12 md:p-16 lg:px-20 lg:py-10'>
            <article
                className={`w-full md:w-[90%] lg:w-[80%] mx-auto shadow-[2px_0px_10px] shadow-blue-100 rounded-md bg-secondary`}>
                <div className="w-full h-[400px] overflow-hidden rounded-t-md">
                    <ImageSlider photos={photos} />
                </div>
                <div className="w-full px-3 py-2 md:p-5 text-gray-500 text-base relative group overflow-hidden rounded-b-md md:rounded-bl-none md:rounded-r-md">
                    <h2 className="text-4xl font-semibold text-gray-700">{name}</h2>
                    <p className="pt-1">{location}</p>
                    <p className="">{establishedDate}</p>
                    <p className="text-justify pr-4 py-3">{description}</p>
                    {/* Admission Date section */}
                    <div className='my-3'>
                        <h2 className="flex gap-1 items-center"><SiHashnode size={15} className='text-primary' /> Admission</h2>
                        <h2 className="flex gap-2 items-center"><BsFillCalendarCheckFill size={15} className="text-blue-400" /> {admissionDates}</h2>
                    </div>
                    {/* Events section */}
                    <div className='my-3'>
                        <h2 className="flex gap-1 items-center"><SiHashnode size={15} className='text-primary' /> Events</h2>
                        {
                            events?.map((event, index) => <p key={index}>{index + 1}. {event}</p>)
                        }
                    </div>
                     {/* Sports section */}
                     <div className='my-3'>
                        <h2 className="flex gap-1 items-center"><SiHashnode size={15} className='text-primary' /> Sports</h2>
                        {
                            sports?.map((event, index) => <p key={index}>{index + 1}. {event}</p>)
                        }
                    </div>
                    {/* Research History section */}
                    <div className='my-3'>
                        <h2 className="flex gap-1 items-center"><SiHashnode size={15} className='text-primary' /> Research</h2>
                        <h2 className="">{researchHistory}</h2>
                    </div>
                    <div className='flex items-center gap-2'>
                        <p>Ratings: </p>
                        <ReactStarsRating isEdit={false} className="flex " primaryColor="#60a5fa"
                            value={parseInt(ratings)} size={15} />
                    </div>
                </div>
            </article>
        </section>
    );
};

export default CollegeDetails;