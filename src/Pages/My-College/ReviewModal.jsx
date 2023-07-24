import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import ReactStarsRating from 'react-awesome-stars-rating';
import { toast } from 'react-hot-toast';


const ReviewModal = ({ modalHandler, reviewModal, closeReviewModal }) => {
    const [feedback, setFeedback] = useState('');
    const [rating, setRating] = useState(0);
    function sendFeedback() {
        if (feedback.length < 1) {
            toast.error('Write Feedback! please');
        }
        else if (rating === 0) {
            toast.error('Please Give Rating!');
        }
        else {
            modalHandler(feedback, rating);

        }
    }
    return (
        <Transition appear show={reviewModal} as={Fragment}>
            <Dialog as='div' className='relative z-10' onClose={closeReviewModal}>
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
                                    className='text-xl font-medium leading-6 text-gray-900'
                                >
                                    Give Your Review Here!
                                </Dialog.Title>
                                <div>
                                    <div className='space-y-1 relative mt-3'>
                                        <textarea rows={4} type="text" onChange={(e) => { setFeedback(e.target.value) }}
                                            value={feedback}
                                            className='p-2 text-sm focus:px-3  bg-white focus:outline-0 border w-full focus:ring-1 ring-blue-200 rounded-md duration-300 placeholder:text-xs placeholder:tracking-[2px] placeholder:font-thin' placeholder='Write Review...'
                                            autoComplete="off"
                                        />
                                    </div>
                                    <div className='flex items-center gap-3 mt-1 mb-4'>
                                        <label htmlFor="feedback">Rating : </label>
                                        <ReactStarsRating onChange={(value) => { setRating(value) }}
                                            value={rating} className='flex' primaryColor="#3b82f6" size={20} />
                                    </div>
                                </div>
                                <div className='flex mt-2 justify-around'>
                                    <button
                                        type='button'
                                        className='inline-flex justify-center rounded-md border border-transparent bg-green-100 px-4 py-2 text-sm font-medium text-green-900 hover:bg-green-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2 duration-300'
                                        onClick={closeReviewModal}
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        type='button'
                                        className='inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 duration-300'
                                        onClick={sendFeedback}
                                    >
                                        Send
                                    </button>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    )
}

export default ReviewModal;