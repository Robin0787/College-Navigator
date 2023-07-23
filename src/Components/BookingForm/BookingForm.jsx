import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { toast } from 'react-hot-toast';
import { BsFillCalendarCheckFill } from "react-icons/bs";

const BookingForm = ({ modalHandler, BookingModal, CloseBookingModal, id, name, admissionDates }) => {

    function handleBooking(e) {
        e.preventDefault();
        const form = e.target;
        toast('Ok');
    }
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
                    <div className='fixed inset-0 bg-black bg-opacity-25' />
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
                            <Dialog.Panel className='w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all'>
                                <Dialog.Title
                                    as='h3'
                                    className='text-3xl font-medium leading-6 text-gray-900'
                                >
                                    {name}
                                </Dialog.Title>
                                <h2
                                    className="flex gap-2 items-center text-sm pt-2">
                                    <BsFillCalendarCheckFill size={10} className="text-blue-400" /> {admissionDates}
                                </h2>
                                <form onSubmit={handleBooking}>
                                    <div>
                                            <h2 className="text-3xl">Booking Form</h2>
                                    </div>
                                    <div className='flex mt-2 justify-around'>
                                        <button
                                            type='submit'
                                            className='inline-flex justify-center rounded-md border border-transparent bg-red-100 px-4 py-2 text-sm font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 duration-200'
                                        >
                                            Book
                                        </button>
                                        <button
                                            type='button'
                                            className='inline-flex justify-center rounded-md border border-transparent bg-green-100 px-4 py-2 text-sm font-medium text-green-900 hover:bg-green-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2 duration-200'
                                            onClick={CloseBookingModal}
                                        >
                                            Cancel
                                        </button>
                                    </div>
                                </form>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    )
}

export default BookingForm;