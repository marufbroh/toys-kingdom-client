import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../pages/Shared/Navbar';
import Footer from '../pages/Shared/Footer';
import { ScrollRestoration } from "react-router-dom";

const MainLayout = () => {
    return (
        <div>
            <Navbar />
            <div className='min-h-[calc(100vh-411px)]'>
                <Outlet />
            </div>
            <Footer />
            <ScrollRestoration />
        </div>
    );
};

export default MainLayout;