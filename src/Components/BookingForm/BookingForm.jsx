import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import { toast } from 'react-hot-toast';
import { BsFillCalendarCheckFill } from "react-icons/bs";
import SubjectList from './SubjectList';
const people = [
    { name: 'Computer Science' },
    { name: 'Economics' },
    { name: 'Government' },
    { name: 'Medicine' },
    { name: 'Business ' }
]

const BookingForm = ({ modalHandler, BookingModal, CloseBookingModal, image, id, name, admissionDates }) => {
    const [selected, setSelected] = useState(people[0]);
    const [uploadButtonText, setUploadButtonText] = useState('SVG, PNG, JPG or GIF (MAX. 800x400px)');
    // const [imageUploading, setImageUploading] = useState(false);
    // const [imageURL, setImageURL] = useState('');

    function handleBooking(e) {
        e.preventDefault();
        const form = e.target;
        toast('Ok');
    }

    // Changing the name of image input field based on image name;
    const handleImageChange = image => {
        // setImageUploading(true);
        setUploadButtonText(image.name);
        // UploadImage(image)
        //     .then(data => {
        //         setImageURL(data.display_url);
        //         setImageUploading(false);
        //         setClassUploading(false);
        //     }).catch(err => { console.log(err.message); setImageUploading(false) });
    };


    return (
        <Transition appear show={BookingModal} as={Fragment}>
            <Dialog as='div' className='relative z-10' onClose={CloseBookingModal}>
                <Transition.Child
                    as={Fragment}
                    enter='ease-out duration-300'
                    enterFrom='opacity-0'
                    enterTo='opacity-100'
                    leave='ease-in duration-200'
                    leaveFrom='opacity-100'
                    leaveTo='opacity-0'
                >
                    <div className='fixed inset-0 bg-black bg-opacity-50' />
                </Transition.Child>

                <div className='fixed inset-0 overflow-y-auto'>
                    <div className='flex min-h-full items-center justify-center p-4 text-center'>
                        <Transition.Child
                            as={Fragment}
                            enter='ease-out duration-300'
                            enterFrom='opacity-0 scale-95'
                            enterTo='opacity-100 scale-100'
                            leave='ease-in duration-200'
                            leaveFrom='opacity-100 scale-100'
                            leaveTo='opacity-0 scale-95'
                        >
                            <Dialog.Panel className='w-[90%] md:w-[80%] lg:w-[60%]  mx-auto transform overflow-hidden text-secondary rounded-md text-left align-middle shadow-xl transition-all bg-cover' style={{ backgroundImage: `url(${image})` }}>
                                <section className='bg-gray-800 bg-opacity-50 h-full p-3 md:p-6 rounded-md'>
                                    <Dialog.Title as='h3' className='text-3xl font-medium leading-6 text-gray-200'> {name}
                                    </Dialog.Title>
                                    <h2 className="flex gap-2 items-center text-sm pt-2">
                                        <BsFillCalendarCheckFill size={10} className="text-blue-400" /> {admissionDates}
                                    </h2>
                                    <form onSubmit={handleBooking} className='py-3 md:py-6 space-y-3'>
                                        {/* Div for name and subject */}
                                        <div className='sm:flex justify-between items-center gap-2 sm:gap-5'>
                                            <div className='w-full sm:w-1/2 space-y-1'>
                                                <label htmlFor="name" className='text-lg'>Candidate Name</label><br />
                                                <input type="text"
                                                    autoComplete='off'
                                                    className='focus:text-gray-600 p-2 rounded-md bg-blue-200 bg-opacity-40 focus:bg-gray-200 w-full
                                                     focus:outline-0 focus:pl-4 duration-300 hover:cursor-pointer focus:cursor-text' />
                                            </div>
                                            <div className='w-full sm:w-1/2'>
                                                <label htmlFor="subject" className='text-lg'>Subject</label><br />
                                                <SubjectList selected={selected} setSelected={setSelected} people={people} />
                                            </div>
                                        </div>
                                        {/*Div for email and mobile */}
                                        <div className='sm:flex justify-between items-center gap-2 sm:gap-5'>
                                            <div className='w-full sm:w-1/2 space-y-1'>
                                                <label htmlFor="name" className='text-lg'>Email</label><br />
                                                <input type="text"
                                                    autoComplete='off'
                                                    className='focus:text-gray-600 p-2 rounded-md bg-blue-200 bg-opacity-40 focus:bg-gray-200 w-full
                                                     focus:outline-0 focus:pl-4 duration-300
                                                     hover:cursor-pointer focus:cursor-text' />
                                            </div>
                                            <div className='w-full sm:w-1/2'>
                                                <label htmlFor="subject" className='text-lg'>Mobile</label><br />
                                                <input type="number"
                                                    autoComplete='off'
                                                    className='focus:text-gray-600 p-2 rounded-md bg-blue-200 bg-opacity-40 focus:bg-gray-200 w-full
                                                     focus:outline-0 focus:pl-4 duration-300
                                                     hover:cursor-pointer focus:cursor-text' />
                                            </div>
                                        </div>
                                        {/* Div for address and date of birth  */}
                                        <div className='sm:flex justify-between items-center gap-2 sm:gap-5'>
                                            <div className='w-full sm:w-1/2 space-y-1'>
                                                <label htmlFor="name" className='text-lg'>Address</label><br />
                                                <input type="text"
                                                    autoComplete='off'
                                                    className='focus:text-gray-600 p-2 rounded-md bg-blue-200 bg-opacity-40 focus:bg-gray-200 w-full
                                                    focus:outline-0 focus:pl-4 duration-300
                                                    hover:cursor-pointer focus:cursor-text' />
                                            </div>
                                            <div className='w-full sm:w-1/2'>
                                                <label htmlFor="subject" className='text-lg whitespace-pre'>Date of Birth</label><br />
                                                <input type="date"
                                                    autoComplete='off'
                                                    className='focus:text-gray-600 p-2 rounded-md bg-blue-200 bg-opacity-40 focus:bg-gray-200 w-full
                                                     focus:outline-0 focus:pl-4 duration-300
                                                     hover:cursor-pointer focus:cursor-default' />
                                            </div>
                                        </div>
                                        {/* Div for candidate image */}
                                        <div className=''>
                                            <label htmlFor="image" className='text-lg'>Image</label><br />
                                            <div className="flex items-center justify-center w-full">
                                                <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-24 border-0 rounded-lg cursor-pointer bg-blue-200 bg-opacity-40">
                                                    <div className="flex flex-col items-center justify-center ">
                                                        <svg aria-hidden="true" className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                                                        <p className="text-sm text-gray-100"><span className="font-semibold text-white">Click to upload</span> or drag and drop</p>
                                                        <p className="text-xs text-gray-100">{uploadButtonText}</p>
                                                    </div>
                                                    <input
                                                        onChange={(e) => handleImageChange(e.target.files[0])} id="dropzone-file" type="file" className="hidden" />
                                                </label>
                                            </div>
                                        </div>
                                        {/* Div for buttons */}
                                        <div className='flex justify-around gap-5 pt-2'>
                                            <button
                                                type='button'
                                                className='inline-flex justify-center rounded-md border-0 bg-blue-200 bg-opacity-40 w-1/2 py-2 text-base font-medium text-gray-100 hover:bg-opacity-0 hover:ring-2 ring-blue-200 duration-300 ring-opacity-60'
                                                onClick={CloseBookingModal}
                                            >
                                                Cancel
                                            </button>
                                            <button
                                                type='submit'
                                                className='inline-flex justify-center rounded-md border-0 bg-blue-200 bg-opacity-40 w-1/2 py-2 text-base font-medium text-gray-100 hover:bg-opacity-0 hover:ring-2 ring-blue-200 duration-300 ring-opacity-60'
                                            >
                                                Book
                                            </button>
                                        </div>
                                    </form>
                                </section>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    )
}

export default BookingForm;