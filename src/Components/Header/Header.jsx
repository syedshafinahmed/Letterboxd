import React from 'react';
import Letterboxd from '../../assets/letterboxd.png'
import Me from '../../assets/orangme.jpg'
const Header = () => {
    return (
        <div className='bg-gray-800'>
            <div className='montserrat text-white max-w-7xl mx-auto flex justify-between'>
                <div className='flex items-center gap-x-2'>
                    <img src={Letterboxd} alt="letterboxd-logo" />
                    <p className='text-4xl font-bold'>Letterboxd</p>
                </div>
                <div className='flex items-center gap-x-5'>
                    <div className='flex items-center gap-x-3'>
                        <img className='w-6 rounded-full' src={Me} alt="" />
                        <p>Shafin Ahmed</p>
                    </div>
                    <i class="fa-solid fa-bolt"></i>
                    <i class="fa-solid fa-magnifying-glass"></i>
                    <button className='btn bg-green-600 border-none font-bold px-4 py-1'><i class="fa-solid fa-plus"></i> LOG</button>
                </div>
            </div>
        </div>
    );
};

export default Header;