import {FC, PropsWithChildren} from 'react';
import {useNavigate} from "react-router";

import {ICar} from "../../interfaces";
import {useAppDispatch} from "../../hooks";
import {carActions} from "../../redux";

interface IProps extends PropsWithChildren {
    car: ICar,
}

const Car: FC<IProps> = ({car}) => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const {id, brand} = car;

    const deleteCar = async () => {
        await dispatch(carActions.deleteCar({id}))
    };

    const getDetails = () => {
        navigate(`cars/${id}`, { state: car });
    }

    return (
        <div>
            <div>id: {id}</div>
            <div>brand: {brand}</div>
            <button onClick={()=>dispatch(carActions.setCarForUpdate({car}))}>update</button>
            <button onClick={deleteCar}>delete</button>
            <button onClick={getDetails}>details</button>
        </div>
    );
};

export {Car};