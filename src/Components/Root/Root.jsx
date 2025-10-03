import React from 'react';
import Header from '../Header/Header';

import { Outlet } from 'react-router';
import Banner from '../Banner/Banner';

const Root = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>           
            <Outlet></Outlet>
        </div>
    );
};

export default Root;