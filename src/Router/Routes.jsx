import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import NotFoundPage from "../NotFound/NotFoundPage";
import Admission from "../Pages/Admission/Admission";
import CollegeDetails from "../Pages/CollegeDetails/CollegeDetails";
import Colleges from "../Pages/Colleges/Colleges";
import Home from "../Pages/Home/Home";
import MyCollege from "../Pages/My-College/MyCollege";
import Profile from "../Pages/Profile/Profile";
import SignUp from "../Pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";

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
                path: '/my-colleges',
                element: <PrivateRoute><MyCollege /></PrivateRoute>
            },
            {
                path: '/profile',
                element: <PrivateRoute><Profile /></PrivateRoute>
            },
            {
                path: '/college-details/:id',
                element: <PrivateRoute><CollegeDetails /></PrivateRoute>,
                loader: ({ params }) => fetch(`${import.meta.env.VITE_BASE_URL}/college-details/${params.id}`)
            }
        ]
    },
    {
        path: '/signup',
        element: <SignUp />
    },
    {
        path: '*',
        element: <NotFoundPage />
    }
]);



export default routes;