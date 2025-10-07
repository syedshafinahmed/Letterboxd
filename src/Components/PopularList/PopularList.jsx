import React from 'react';
import { useNavigate } from 'react-router';

const PopularList = ({ popula }) => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate(`/films/${popula.id}`);
    }
    return (
        <div className='max-w-6xl mx-auto'>
            <div onClick={handleClick} className='relative group cursor-pointer'>
                {/* <p>{popula.original_title}</p> */}
                {/* <img src={`https://image.tmdb.org/t/p/w500${popula.backdrop_path}`} alt="" /> */}
                <img className='w-full h-40 object-cover' src={`https://image.tmdb.org/t/p/original${popula.poster_path}`} alt="" />
                <div className='absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-0 group-hover:opacity-90 transition-opacity duration-300'></div>
                <div className='absolute px-1 bottom-2 left-0 right-0 z-10 text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                    <p className='font-bold text-sm'>{popula.original_title}</p>
                    <p className='text-xs'>{popula.vote_average ? popula.vote_average.toFixed(1) : 'N/A'}</p>
                </div>
            </div>
        </div>
    );
};

export default PopularList;


