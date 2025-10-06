import React from 'react';
import { useLoaderData } from 'react-router';

const Films = () => {
    const films = useLoaderData();
    console.log(films);
    return (
        <div className='max-w-6xl mx-auto'>
            <div className='relative'>
                <img className='w-full' src={`https://image.tmdb.org/t/p/original${films.backdrop_path}`} alt="" />
                <div className='absolute top-11'>
                    <img className='h-100' src={`https://image.tmdb.org/t/p/original${films.poster_path}`} alt="" />
                    <p>{films.oroginal_title}</p>
                </div>
            </div>
        </div>
    );
};

export default Films;