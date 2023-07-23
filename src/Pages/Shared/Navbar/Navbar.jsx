import AOS from 'aos';
import { useContext } from 'react';
import { RiBookLine, RiSchoolLine, RiUserAddLine, RiUserLine } from 'react-icons/ri';
import { VscHome } from 'react-icons/vsc';
import { Link, NavLink } from 'react-router-dom';
import { authContext } from '../../../Provider/Provider';

const Navbar = () => {
    const { user } = useContext(authContext);

    const active = `flex justify-center items-center gap-1 bg-primary rounded-md text-secondary text-[16px] px-2 py-2 duration-100`;
    const notActive = `flex justify-center items-center gap-1 hover:text-blue-600 text-[16px] px-2 py-2 duration-100`;
    AOS.init({
        // Global settings:
        disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
        startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
        initClassName: 'aos-init', // class applied after initialization
        animatedClassName: 'aos-animate', // class applied on animation
        useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
        disableMutationObserver: false, // disables automatic mutations' detections (advanced)
        debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
        throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)


        // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
        offset: 120, // offset (in px) from the original trigger point
        delay: 0, // values from 0 to 3000, with step 50ms
        duration: 400, // values from 0 to 3000, with step 50ms
        easing: 'ease', // default easing for AOS animations
        once: false, // whether animation should happen only once - while scrolling down
        mirror: false, // whether elements should animate out while scrolling past them
        anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

    });
    const navItems = <>
        <NavLink to={'/'}
            className={({ isActive }) => isActive ? active : notActive} >
            <VscHome size={18} /> Home
        </NavLink>
        <NavLink to={'/colleges'}
            className={({ isActive }) => isActive ? active : notActive} >
            <RiSchoolLine size={18} /> Colleges
        </NavLink>
        <NavLink to={'/admission'}
            className={({ isActive }) => isActive ? active : notActive} >
            <RiUserAddLine size={18} /> <span className='text-md'> Admission </span>
        </NavLink>
        <NavLink to={'/my-college'}
            className={({ isActive }) => isActive ? active : notActive} >
            <RiBookLine size={18} /> <span className='text-md'> My College </span>
        </NavLink>
    </>

    return (
        <section data-aos="fade-down" className='px-0 md:px-10 shadow-lg font-thin'>
            <div className="navbar bg-white ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-5 shadow bg-white text-black items-start rounded-box w-48 z-10 gap-4">
                            {navItems}
                        </ul>
                    </div>
                    <Link className='sm:ml-4 md:ml-0 text-2xl text-blue-600'>
                        College Navigator
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-10">
                        {navItems}
                    </ul>
                </div>
                <div className="navbar-end gap-4">
                    {
                        user ?
                            (
                                <Link to={'/profile'}
                                    className={`text-secondary flex justify-center items-center gap-2 text-sm md:text-md px-3 py-2 md:px-4  rounded-md  bg-primary hover:bg-blue-700 duration-200`} >
                                    {
                                        user.photoURL ? 
                                        (
                                            <img src={user?.photoURL} alt="" className='h-6 w-6 ring ring-white rounded-full' />
                                        )
                                        : 
                                        (
                                            <RiUserLine size={18} />
                                        )
                                    }
                                    <span className='text-md font-semibold'> Profile</span>
                                </Link>
                            )
                            :
                            (
                                <Link to={'/signup'} className='text-blue-500 bg-white hover:text-white text-sm md:text-md px-4 py-[6px] md:px-4 md:py-2 rounded-md ring-2 ring-blue-500 hover:bg-blue-600 whitespace-pre duration-300'>Sign Up</Link>
                            )
                    }

                </div>
            </div>
        </section >
    );
};

export default Navbar;