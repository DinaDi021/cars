import React from 'react';
import {Outlet} from "react-router";

import {CarForm, Cars} from "../components";

const CarsPage = () => {
    return (
        <div>
            <Outlet/>
            <CarForm/>
            <Cars/>
        </div>
    );
};

export {CarsPage};