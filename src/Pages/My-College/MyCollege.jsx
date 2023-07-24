import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useContext } from "react";
import { ImSpinner9 } from "react-icons/im";
import { authContext } from "../../Provider/Provider";
import MySingleCollege from "./MySingleCollege";

const MyCollege = () => {
    const { user } = useContext(authContext);
    const { data: bookings = [], isLoading } = useQuery(
        {
            queryKey: ['my-bookings'],
            disabled: !user,
            queryFn: async () => {
                const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/my-bookings/${user.email}`);
                return res.data.reverse();
            }
        })
    return (
        <>
            {
                isLoading ? (
                    <div className='h-[calc(100vh-68px)] flex justify-center items-center'>
                        <ImSpinner9 className='animate-spin text-primary' size={30} />
                    </div>
                ) : (
                    (bookings.length > 0 ?
                        <>
                            <section className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-8 p-4 md:p-8">
                                {
                                    bookings.map((booking, index) => {
                                        return <MySingleCollege key={index} booking={booking} />
                                    })
                                }
                            </section>
                        </>
                        :
                        <section className="h-[calc(100vh-64px)] flex justify-center items-center">
                            <h2 className="text-3xl font-semibold">No College has been booked!</h2>
                        </section>)
                )
            }
        </>
    );
};

export default MyCollege;