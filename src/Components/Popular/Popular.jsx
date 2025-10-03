import React from 'react';
import { useLoaderData } from 'react-router';
import PopularList from '../PopularList/PopularList';

const Popular = () => {
    const popular = useLoaderData();
    console.log(popular);
    return (
        <div className='max-w-6xl mx-auto'>
            <div className='grid grid-cols-10 gap-y-2 pt-5'>
                {
                    popular.results?.map(popula => <PopularList key={popula.id} popula={popula}></PopularList>)
                }
            </div>
        </div>
    );
};

export default Popular;