import React from 'react';
import Letterboxd from '../../assets/letterboxd.png'
import Me from '../../assets/orangme.jpg'
const Header = () => {
    return (
        <div className='bg-[#13171b]'>
            <div className='montserrat max-w-6xl mx-auto flex justify-between'>
                <div className='flex items-center gap-x-2'>
                    <img src={Letterboxd} alt="letterboxd-logo" />
                    <p className='text-4xl font-bold text-white'>Letterboxd</p>
                </div>
                <div className='flex items-center gap-x-5'>
                    <div className='flex items-center gap-x-3'>
                        <img className='w-6 rounded-full border-1' src={Me} alt="" />
                        <p className='font-bold'>Shafin Ahmed</p>
                    </div>
                    <i class="fa-solid fa-bolt"></i>
                    <i class="fa-solid fa-magnifying-glass"></i>
                    <button className='bg-green-600 text-white text-sm rounded-sm border-none font-bold px-5 py-1'><i class="fa-solid fa-plus"></i> LOG</button>
                </div>
            </div>
        </div>
    );
};

export default Header;