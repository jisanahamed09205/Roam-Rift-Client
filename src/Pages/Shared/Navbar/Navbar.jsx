import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";

const Navbar = () => {

    const {logOut,user} = useContext(AuthContext)

    const handleLogOut = () =>{
        logOut()
            .then()
            .catch()
    }

    const navLinks = <>
        <NavLink to='/' className={({ isActive })=>isActive ? 'btn bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-gray-900 via-gray-100 to-gray-900 btn-sm normal-case' : 'btn btn-ghost btn-sm normal-case'}>Home</NavLink>
        <NavLink to='/community' className={({ isActive })=>isActive ? 'btn bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-gray-900 via-gray-100 to-gray-900 btn-sm normal-case' : 'btn btn-ghost btn-sm normal-case'}>Community</NavLink>
        <NavLink to='/blogs' className={({ isActive })=>isActive ? 'btn bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-gray-900 via-gray-100 to-gray-900 btn-sm normal-case' : 'btn btn-ghost btn-sm normal-case'}>Blogs</NavLink>
        <NavLink to='/aboutUs' className={({ isActive })=>isActive ? 'btn bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-gray-900 via-gray-100 to-gray-900 btn-sm normal-case' : 'btn btn-ghost btn-sm normal-case'}>About Us</NavLink>
        <NavLink to='/contactUs' className={({ isActive })=>isActive ? 'btn bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-gray-900 via-gray-100 to-gray-900 btn-sm normal-case' : 'btn btn-ghost btn-sm normal-case'}>Contact Us</NavLink>
        
    </>

    const profileNav = <>
        <NavLink to='/dashboard' className={({ isActive })=>isActive ? 'btn bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-gray-900 via-gray-100 to-gray-900 btn-sm normal-case' : 'btn btn-ghost btn-sm normal-case'}>Dashboard</NavLink>
        <NavLink to='/offer' className={({ isActive })=>isActive ? 'btn bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-gray-900 via-gray-100 to-gray-900 btn-sm normal-case' : 'btn btn-ghost btn-sm normal-case'}>Offer Announcements</NavLink>
        <NavLink onClick={handleLogOut} className="btn btn-ghost btn-sm normal-case">LogOut</NavLink>
    </>

    return (
        <div className="">
            <div className="navbar backdrop-blur-3xl fixed w-full z-10">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-blue-100 rounded-box w-52">
                            {navLinks}
                        </ul>
                    </div>
                    <a href="/" className=" normal-case text-xl">
                        <img src="/logo2.3.png" alt="" />
                    </a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLinks}
                    </ul>
                </div>
                {
                    user ? <div className="navbar-end">
                        <div className="flex-none">
                            <div className="dropdown dropdown-end">
                                <button className="btn btn-ghost btn-circle">
                                    <div className="indicator">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
                                        <span className="badge badge-xs badge-primary indicator-item"></span>
                                    </div>
                                </button>
                            </div>
                            <div className="dropdown dropdown-end">
                                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                        <img alt="" src={user?.photoURL} />
                                    </div>
                                </label>
                                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-blue-100 rounded-box w-52 justify-start">
                                    <div className="text-center my-5">
                                        <p>{user?.displayName}</p>
                                        <p><small>{user?.email}</small></p>
                                    </div>
                                    {profileNav}
                                </ul>
                            </div>
                        </div>
                    </div> :
                    <div className="navbar-end">
                        <NavLink to='/login' className={({ isActive })=>isActive ? 'btn bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-gray-900 via-gray-100 to-gray-900 btn-sm normal-case' : 'btn btn-ghost btn-sm normal-case'}>Login</NavLink>
                    </div>
                }
            </div>
        </div>
    );
};

export default Navbar;