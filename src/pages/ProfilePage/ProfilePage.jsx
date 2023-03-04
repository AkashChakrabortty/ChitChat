import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import NavBar from '../../components/NavBar/NavBar';

const ProfilePage = () => {
    return (
        <div className='bg-base-200'>
            <NavBar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default ProfilePage;