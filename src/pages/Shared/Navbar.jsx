import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/logo.svg'
import { AuthContext } from '../../providers/AuthProviders';
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css'

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    // console.log(user?.photoURL);
    const handleLogOut = () => {
        logOut()
    }

    return (
        <div className='bg-color'>
            <div className="navbar container mx-auto px-4">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li>
                                <Link
                                    to='/all-toys'
                                >
                                    All Toys
                                </Link>
                            </li>
                            {user && <li tabIndex={0}>
                                <a className="justify-between">
                                    User's Toys
                                    <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                                </a>
                                <ul className="p-2">
                                    <li>
                                        <Link
                                            to='/my-toys'
                                        >
                                            My Toys
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to='/add-toy'
                                        >
                                            Add A Toy
                                        </Link>
                                    </li>
                                </ul>
                            </li>}
                            <li>
                                <Link
                                    to='/blog'
                                >
                                    Blogs
                                </Link>
                            </li>

                            {!user ? <li>
                                <Link
                                    to='/login'
                                >
                                    Login
                                </Link>
                            </li> :
                                <li onClick={handleLogOut}>
                                    <Link
                                    >
                                        Logout
                                    </Link>
                                </li>}
                        </ul>
                    </div>
                    <Link to='/' className='inline-flex items-center'>
                        <img src={logo} alt="" />
                        <h1 className='text-2xl lg:text-4xl font-bold tracking-wide text-white cursor-pointer'>
                            Toys KingDom
                        </h1>
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="flex gap-6">
                        <li>
                            <NavLink
                                to='/'
                                className={({ isActive }) => (isActive ? 'active' : 'default')}
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to='/all-toys'
                                className={({ isActive }) => (isActive ? 'active' : 'default')}
                            >
                                All Toys
                            </NavLink>
                        </li>
                        {user && <li>
                            <NavLink
                                to='/my-toys'
                                className={({ isActive }) => (isActive ? 'active' : 'default')}
                            >
                                My Toys
                            </NavLink>
                        </li>}
                        {user && <li>
                            <NavLink
                                to='/add-toy'
                                className={({ isActive }) => (isActive ? 'active' : 'default')}
                            >
                                Add A Toy
                            </NavLink>
                        </li>}

                        <li>
                            <NavLink
                                to='/blog'

                                className={({ isActive }) => (isActive ? 'active' : 'default')}
                            >
                                Blogs
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className="flex items-center lg:gap-5">
                        {user ?
                            <button onClick={handleLogOut} type='button' className='btn-outlined hidden lg:flex text-white'>
                                Logout
                            </button> :
                            <Link to={"/login"}><button type='button' className='btn-outlined hidden lg:flex'>
                                Login
                            </button></Link>
                        }
                        {
                            user?.photoURL &&
                            <img
                                src={user?.photoURL}
                                alt="User Profile"
                                className="w-10 h-10 rounded-full"
                                data-tooltip-id="my-tooltip" data-tooltip-content={user?.displayName} data-tooltip-place="right"
                            />
                        }
                        <Tooltip id="my-tooltip" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;