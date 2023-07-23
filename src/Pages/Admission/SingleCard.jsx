import { useState } from "react";
import { toast } from "react-hot-toast";
import { BsArrowRightCircleFill, BsFillCalendarCheckFill } from "react-icons/bs";
import { SiHashnode } from 'react-icons/si';
import BookingForm from "../../Components/BookingForm/BookingForm";


const SingleCard = ({ college }) => {
    const { name, admissionDates, location, _id } = college;
    const [modal, setModal] = useState(false);

    const approveModalHandler = (id, feedback) => {
        toast.success(id);
    }

    const CloseBookingModal = () => {
        setModal(false);
    }
    return (
        <div className="shadow-[2px_0px_10px] shadow-blue-100 text-gray-500 p-4 text-base relative group overflow-hidden rounded-md">
            <h2 className="text-3xl font-semibold text-gray-700">{name}</h2>
            <p className='text-gray-400'>{location}</p>
            {/* Admission Date section */}
            <div className='my-3'>
                <h2 className="flex gap-1 items-center"><SiHashnode size={15} className='text-primary' /> Admission</h2>
                <h2 className="flex gap-2 items-center"><BsFillCalendarCheckFill size={15} className="text-primary" /> {admissionDates}</h2>
            </div>
            {/* Details button */}
            <div
                onClick={() => {setModal(true)}}
                className='absolute h-full w-full bg-gradient-to-r from-indigo-500 to-indigo-800 flex justify-center items-center gap-2 top-0 right-full cursor-pointer opacity-0 duration-700 group-hover:right-0 group-hover:opacity-90'>
                <button className='text-white text-xl'>Book</button>
                <BsArrowRightCircleFill size={20} className='text-white mt-1' />
            </div>
            <BookingForm BookingModal={modal} modalHandler={approveModalHandler} CloseBookingModal={CloseBookingModal} id={_id} name={name} admissionDates={admissionDates}/>
        </div>
    );
};

export default SingleCard;