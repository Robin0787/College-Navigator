import { RiBookLine, RiSchoolLine, RiUserAddLine, RiUserLine } from 'react-icons/ri';
import { VscHome } from 'react-icons/vsc';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    const active = `flex justify-center items-center gap-1 bg-primary rounded-md text-secondary text-[16px] px-2 py-2 duration-100`;
    const notActive = `flex justify-center items-center gap-1 hover:text-blue-600 text-[16px] px-2 py-2 duration-100`;

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
        <section className='px-0 md:px-10 shadow-lg font-thin'>
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
                    <Link to={'/profile'}
                        className={`text-secondary flex justify-center items-center gap-1 text-sm md:text-md px-3 py-[10px] md:px-4  rounded-md  bg-primary hover:bg-blue-700 duration-200`} >
                        <RiUserLine size={18} /> <span className='text-md'> Profile</span>
                    </Link>
                    <Link className='text-blue-500 bg-white hover:text-white text-sm md:text-md px-3 py-2 md:px-6 md:py-2 rounded-md ring-2 ring-blue-500 hover:bg-blue-600 hover: duration-300'>Login</Link>
                </div>
            </div>
        </section >
    );
};

export default Navbar;