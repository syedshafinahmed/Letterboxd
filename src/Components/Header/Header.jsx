import React from 'react';
import Letterboxd from '../../assets/letterboxd.png'
const Header = () => {
    return (
        <div className='montserrat text-white'>
            <div className='flex items-center gap-x-2'>
                <img src={Letterboxd} alt="letterboxd-logo" />
                <p className='text-4xl font-bold'>Letterboxd</p>
            </div>
        </div>
    );
};

export default Header;