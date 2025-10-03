import React from 'react';
import { useLoaderData } from 'react-router';
import PopularList from '../PopularList/PopularList';

const Popular = () => {
    const popular = useLoaderData();
    console.log(popular);
    return (
        <div className='max-w-6xl mx-auto'>
            <div className='grid grid-cols-10 gap-y-2 pt-10'>
                {
                    popular.results?.map(popula => <PopularList key={popula.id} popula={popula}></PopularList>)
                }
            </div>
            <div className='flex gap-x-8 justify-center py-10'>
                <b className='pageno w-6 h-6 text-center'>1</b>
                <b className='pageno w-6 h-6 text-center'>2</b>
                <b className='pageno w-6 h-6 text-center'>3</b>
                <b className='pageno w-6 h-6 text-center'>4</b>
                <b className='pageno w-6 h-6 text-center'>5</b>
            </div>
        </div>
    );
};

export default Popular;