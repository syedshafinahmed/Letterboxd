import React from 'react';
import { useLoaderData } from 'react-router';

const Films = () => {
    const films = useLoaderData();
    console.log(films);
    return (
        <div className='max-w-6xl mx-auto mt-15'>
            <div className='relative'>
                <img className='w-full' src={`https://image.tmdb.org/t/p/original${films.backdrop_path}`} alt="" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent  to-transparent"></div>

                <div className='absolute top-150 left-20 mb-30 flex gap-x-8'>
                    <img className='h-100 rounded-lg shadow-lg border-1 border-white' src={`https://image.tmdb.org/t/p/original${films.poster_path}`} alt="" />
                    <div className='text-white'>
                        <p className='font-bold  text-3xl mb-7'>{films.original_title}</p>
                        <p className='italic font-semibold'>{films.release_date}</p>
                        <p className='w-50 text-justify'>{films.overview}</p>
                    </div>
                    <div className='bg-gray-600 h-50 text-white p-5'>
                        <span className='flex gap-x-2 items-center'> <p>Watch</p><i class="fa-solid fa-eye"></i></span>
                        <span className='flex gap-x-2 items-center'> <p>Like</p><i class="fa-solid fa-heart"></i></span>
                        <span className='flex gap-x-2 items-center'> <p>Watchlist</p><i class="fa-solid fa-list"></i></span>
                        <span className='flex gap-x-2 items-center'> <p>Rate</p><i class="fa-solid fa-star"></i></span>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default Films;