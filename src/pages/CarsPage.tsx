import React from 'react';
import {Outlet} from "react-router";

import {CarForm, Cars, Pagination} from "../components";


const CarsPage = () => {
    return (
        <div>
            <Outlet/>
            <CarForm/>
            <Cars/>
            <Pagination/>
        </div>
    );
};

export {CarsPage};