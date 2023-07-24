import axios from "axios";


const UploadBooking = async (data) => {
    const url = `${import.meta.env.VITE_BASE_URL}/upload-booking`;
    const res = await axios.post(url, {...data});
    return res.data;
};

export default UploadBooking;