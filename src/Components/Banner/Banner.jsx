import React from 'react';
import Me from '../../assets/orangme.jpg'
const Banner = () => {
    return (
        <div className='max-w-6xl mx-auto py-9 flex justify-between'>
            <div className='flex gap-x-3'>
                <img className='w-15 rounded-full border-1' src={Me} alt="" />
                <div>
                    <h1 className='text-2xl font-bold text-white mb-2'>Shafin Ahmed</h1>
                    <div className='opacity-60 flex items-center'>
                        <i class="fa-solid fa-map-pin"></i>
                        <p className='text-xs'>Bangladesh</p>
                    </div>
                </div>
                <button className='bg-gray-500 h-7 px-2 py-1 text-gray-300 montserrat font-bold text-xs rounded-sm'>EDIT PROFILE</button>
            </div>
            <div className='flex'>
                <span className='flex flex-col px-3 items-center'>
                    <h1 className='text-2xl text-white font-bold'>864</h1>
                    <p className='text-xs'>FILMS</p>
                </span>
                <span className='flex flex-col border-l border-gray-700 px-3 items-center'>
                    <h1 className='text-2xl text-white font-bold'>94</h1>
                    <p className='text-xs'>THIS YEAR</p>
                </span>
                <span className='flex flex-col border-l border-gray-700 px-3 items-center'>
                    <h1 className='text-2xl text-white font-bold'>4</h1>
                    <p className='text-xs'>FOLLOWING</p>
                </span>
                <span className='flex flex-col border-l border-gray-700 px-3 items-center'>
                    <h1 className='text-2xl text-white font-bold'>5</h1>
                    <p className='text-xs'>FOLLOWERS</p>
                </span>
            </div>
        </div>
    );
};

export default Banner;