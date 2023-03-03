import React from 'react';
import Footer from '../../components/Footer/Footer';
import MidHomeContainer from '../../components/MidHomeContainer/MidHomeContainer';
import NavBar from '../../components/NavBar/NavBar';

const HomePage = () => {
    return (
        <div className='bg-base-200'>
            <NavBar />
            <MidHomeContainer />
            <Footer />
        </div>
    );
};

export default HomePage;