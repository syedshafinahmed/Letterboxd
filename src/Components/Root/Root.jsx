import React from 'react';
import Header from '../Header/Header';

import { Outlet } from 'react-router';
import Banner from '../Banner/Banner';
import Bar from '../Bar/Bar';

const Root = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner> 
            <Bar></Bar>          
            <Outlet></Outlet>
        </div>
    );
};

export default Root;