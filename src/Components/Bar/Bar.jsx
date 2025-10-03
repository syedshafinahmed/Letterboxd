import React from 'react';
import { NavLink } from 'react-router';
import '../Root/Root.css'
const Bar = () => {
    return (
        <div className='border-1 border-gray-700 max-w-6xl rounded-sm mx-auto'>
            <nav className='flex gap-x-5 py-3 justify-center'>
                <NavLink to="profile">Profile</NavLink>
                <NavLink to="activity">Activity</NavLink>
                <NavLink to="Popular">Popular</NavLink>
                <NavLink to="films">Films</NavLink>
                <NavLink to="watchlist">Watchlist</NavLink>
                <NavLink to="likes">Likes</NavLink>
            </nav>
        </div>
    );
};

export default Bar;