import React, {useEffect, useState} from 'react';
import {useParams} from "react-router";

import {CarDetails} from "../components";
import {useAppLocation} from "../hooks";
import {ICar} from "../interfaces";
import {carService} from "../services";

const CarDetailsPage = () => {
    const {state} = useAppLocation<ICar>();
    const {id} = useParams<{ id: string }>();

    const [car, setCar] = useState<ICar>(null)


    useEffect(() => {
        if (state) {
            setCar(state)
        } else {
            carService.getById(+id).then(({data}) => setCar(data))
        }
    }, [id, state])

    return (
        <div>
            {car&&<CarDetails car={car}/>}
        </div>
    );
};

export {CarDetailsPage};