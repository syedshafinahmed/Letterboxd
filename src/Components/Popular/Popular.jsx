import React from 'react';
import { useLoaderData } from 'react-router';

const Popular = () => {
    const popular = useLoaderData();
    console.log(popular);
    return (
        <div className='max-w-6xl mx-auto'>
            <p>Popular</p>
        </div>
    );
};

export default Popular;