import React from 'react';
import { useLoaderData, useParams, useNavigate } from 'react-router';
import PopularList from '../PopularList/PopularList';

const Popular = () => {
    const popular = useLoaderData();
    const { page } = useParams();
    const navigate = useNavigate();
    const currentPage = Number(page) || 1;

    const handlePrev = () => {
        if (currentPage > 1) {
            navigate(`/popular/${currentPage - 1}`);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    const handleNext = () => {
        navigate(`/popular/${currentPage + 1}`);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className='max-w-6xl mx-auto'>
            <div className='grid grid-cols-10 gap-y-2 pt-10'>
                {popular.results?.map((popula) => (
                    <PopularList key={popula.id} popula={popula}></PopularList>
                ))}
            </div>

            {/* Pagination Buttons */}
            <div className='flex gap-x-20 justify-center py-10'>
                <b className={`pageno px-4 text-center cursor-pointer ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''}`} onClick={handlePrev}>Previous</b>
                <b className='pageno px-4 text-center cursor-pointer' onClick={handleNext}>Next</b>
            </div>
        </div>
    );
};

export default Popular;