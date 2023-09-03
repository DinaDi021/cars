import React, {useEffect} from 'react';
import {Outlet, useNavigate} from "react-router";

import {CarForm, Cars, Pagination} from "../components";
import {useAppSelector} from "../hooks";


const CarsPage = () => {
    const {errors} = useAppSelector(state => state.cars)
    const navigate = useNavigate();

    useEffect(() => {
        if (errors) {
            navigate("/login")
        }
    }, [errors])

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