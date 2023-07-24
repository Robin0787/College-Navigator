import { useState } from "react";
import { BsArrowRightCircleFill, BsFillCalendarCheckFill } from "react-icons/bs";
import { SiHashnode } from 'react-icons/si';
import BookingForm from "../../Components/BookingForm/BookingForm";


const SingleCard = ({ college }) => {
    const { name, admissionDates, location, _id, image } = college;
    const [modal, setModal] = useState(false);

    const CloseBookingModal = () => {
        setModal(false);
    }

    return (
        <div className="shadow-[2px_0px_10px] shadow-blue-100 text-gray-200 text-base relative group overflow-hidden rounded-md bg-cover "
            style={{ backgroundImage: `url(${image})` }}>
            <div className="bg-gray-800 bg-opacity-50 h-full p-4">
                <h2 className="text-3xl font-semibold text-gray-100">{name}</h2>
                <p className='text-gray-300'>{location}</p>
                {/* Admission Date section */}
                <div className='my-3'>
                    <h2 className="flex gap-1 items-center"><SiHashnode size={15} className='' /> Admission</h2>
                    <h2 className="flex gap-2 items-center"><BsFillCalendarCheckFill size={15} className="" /> {admissionDates}</h2>
                </div>
                {/* Details button */}
                <div
                    onClick={() => { setModal(true) }}
                    className='absolute h-full w-full bg-gradient-to-r from-indigo-500 to-indigo-800 flex justify-center items-center gap-2 top-0 right-full cursor-pointer opacity-0 duration-700 group-hover:right-0 group-hover:opacity-100'>
                    <button className='text-white text-xl'>Book</button>
                    <BsArrowRightCircleFill size={20} className='text-white mt-1' />
                </div>
                <BookingForm BookingModal={modal} CloseBookingModal={CloseBookingModal} id={_id} name={name} admissionDates={admissionDates} image={image} />
            </div>
        </div>
    );
};

export default SingleCard;