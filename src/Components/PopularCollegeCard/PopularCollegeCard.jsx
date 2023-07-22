import ReactStarsRating from 'react-awesome-stars-rating';
import { BsArrowRightCircleFill, BsFillCalendarCheckFill } from "react-icons/bs";
import { Link } from 'react-router-dom';
import ImageSlider from '../ImageSlider/ImageSlider';

const PopularCollegeCard = ({ college, isShadow }) => {
    const { name, image, description, photos, location, establishedDate, admissionDates, events, researchHistory, sports, ratings, _id } = college;

    return (
        <article className={`
        ${isShadow ? 'shadow-[2px_0px_10px] shadow-blue-100' : ''} rounded-md bg-secondary`}>
            <div className="w-full overflow-hidden rounded-t-md h-1/2">
                <ImageSlider photos={photos} />
            </div>
            <div className=" w-full pl-5 py-2 md:py-5 h-1/2 text-gray-500 text-base relative group overflow-hidden rounded-b-md">
                <h2 className="text-3xl font-semibold text-gray-700">{name}</h2>
                <div className='my-3'>
                    <h2 className="">Admission</h2>
                    <h2 className=" flex gap-2 items-center"><BsFillCalendarCheckFill size={15} className="text-blue-400" /> {admissionDates}</h2>
                </div>
                <h2 className="">{researchHistory}</h2>
                <div className='flex items-center gap-2'>
                    <p>Ratings: </p>
                    <ReactStarsRating isEdit={false} className="flex " primaryColor="#60a5fa"
                        value={parseInt(ratings)} size={15} />
                </div>
                {/* Details button */}
                <Link to={`/college-details/${_id}`} className='absolute rounded-b-md h-full w-full bg-blue-500 flex justify-center items-center gap-2 top-0 right-full cursor-pointer opacity-0 duration-700 group-hover:right-0 group-hover:opacity-90'>
                    <button className='text-white text-xl'>Details</button>
                    <BsArrowRightCircleFill size={20} className='text-white mt-1' />
                </Link>
            </div>
        </article>
    );
};

export default PopularCollegeCard;