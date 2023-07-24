import axios from 'axios';
import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { BiUser } from 'react-icons/bi';
import { BsFillCalendarCheckFill, BsInfoCircleFill } from "react-icons/bs";
import { HiLocationMarker } from 'react-icons/hi';
import { MdRateReview, MdSubject } from 'react-icons/md';
import { SiHashnode } from 'react-icons/si';
import ReviewModal from './ReviewModal';


const MySingleCollege = ({ booking }) => {
    const { collegeImage, collegeName, admissionDate, candidateName, email, subject, address, _id } = booking;
    const [reviewModal, setReviewModal] = useState(false);

    const reviewModalHandler = async (review, rating) => {
        console.log(review);
        console.log(rating);
        const data = {review, rating, collegeName, collegeImage, collegeId: _id };
        const res = await axios.post(`${import.meta.env.VITE_BASE_URL}/add-review`, {...data});
        if(res.data.insertedId){
            toast.success('Review Added');
            closeReviewModal();
        }else {
            toast.error('Something wrong! Try again.');
        }
    }

    const closeReviewModal = () => {
        setReviewModal(false);
    }


    return (
        <div className="shadow-[2px_0px_10px] shadow-blue-100 text-gray-100 text-base relative group overflow-hidden rounded-md bg-cover "
            style={{ backgroundImage: `url(${collegeImage})` }}>
            <div className="bg-gray-800 bg-opacity-50 h-full p-4">
                <h2 className="text-3xl font-semibold text-gray-100">{collegeName}</h2>
                {/* Admission Date section */}
                <div className='mt-2'>
                    <h2 className="flex gap-1 items-center"><SiHashnode size={15} className='' /> Admission</h2>
                    <h2 className="flex gap-2 items-center"><BsFillCalendarCheckFill size={15} className="" /> {admissionDate}</h2>
                </div>
                {/* Person Info section */}
                <div className='mt-2'>
                    <h2 className="text-lg font-semibold flex gap-2 items-center"><BsInfoCircleFill size={15} className="" />Candidate Information</h2>
                    <h2 className="flex font-semibold gap-2 items-center"><BiUser size={15} className="" /> {candidateName}</h2>
                    <h2 className="flex gap-2 items-center"><MdSubject size={15} className="" /> {subject}</h2>
                    <h2 className="flex gap-2 items-center"><HiLocationMarker size={15} className="" /> {address}</h2>
                </div>
                {/* Review button */}
                <div
                    onClick={() => {setReviewModal(true)}}
                    className='absolute h-full w-full bg-gradient-to-r from-indigo-500 to-indigo-800 flex justify-center items-center gap-2 top-0 right-full cursor-pointer opacity-0 duration-700 group-hover:right-0 group-hover:opacity-100'>
                    <button className='text-white text-xl'>Review</button>
                    <MdRateReview size={20} className='text-white mt-1' />
                </div>
            </div>
            <ReviewModal modalHandler={reviewModalHandler} reviewModal={reviewModal} closeReviewModal={closeReviewModal} />
        </div>
    )
};

export default MySingleCollege;