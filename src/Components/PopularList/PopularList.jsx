import React from 'react';

const PopularList = ({ popula }) => {
    return (
        <div className='max-w-6xl mx-auto'>
            <div>
                {/* <p>{popula.original_title}</p> */}
                {/* <img src={`https://image.tmdb.org/t/p/w500${popula.backdrop_path}`} alt="" /> */}
                <img className='w-full h-40 object-cover' src={`https://images.tmdb.org/t/p/w500${popula.poster_path}`} alt="" />
            </div>
        </div>
    );
};

export default PopularList;