import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Admission from "../Pages/Admission/Admission";
import CollegeDetails from "../Pages/CollegeDetails/CollegeDetails";
import Colleges from "../Pages/Colleges/Colleges";
import Home from "../Pages/Home/Home";
import MyCollege from "../Pages/My-College/MyCollege";
import Profile from "../Pages/Profile/Profile";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/colleges',
                element: <Colleges />
            },
            {
                path: '/admission',
                element: <Admission />
            },
            {
                path: '/my-college',
                element: <MyCollege />
            },
            {
                path: '/profile',
                element: <Profile />
            },
            {
                path: '/college-details/:id',
                element: <CollegeDetails />,
                loader: ({params}) => fetch(`${import.meta.env.VITE_BASE_URL}/college-details/${params.id}`)
            }
        ]
    }
]);



export default routes;