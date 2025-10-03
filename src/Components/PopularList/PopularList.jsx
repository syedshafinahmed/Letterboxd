import React from 'react';

const PopularList = ({ popula }) => {
    return (
        <div className='max-w-6xl mx-auto'>
            <div className='relative group'>
                {/* <p>{popula.original_title}</p> */}
                {/* <img src={`https://image.tmdb.org/t/p/w500${popula.backdrop_path}`} alt="" /> */}
                <img className='w-full h-40 object-cover' src={`https://images.tmdb.org/t/p/w500${popula.poster_path}`} alt="" />
                <div className='absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-0 group-hover:opacity-90 transition-opacity duration-300'></div>
                <div className='flex justify-between absolute px-1 bottom-2 left-0 right-0 z-10 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                    <i class="fa-solid fa-eye"></i>
                    <i class="fa-solid fa-heart"></i>
                    <i class="fa-solid fa-list"></i>
                    <i class="fa-solid fa-star"></i>
                </div>
            </div>
        </div>
    );
};

export default PopularList;