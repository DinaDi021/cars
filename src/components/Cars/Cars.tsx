import {FC, PropsWithChildren, useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../hooks";
import {carActions} from "../../redux";
import {Car} from "./Car";

interface IProps extends PropsWithChildren {

}

const Cars: FC<IProps> = () => {
    const dispatch = useAppDispatch();
    const {cars} = useAppSelector(state => state.cars);


    useEffect(() => {
        dispatch(carActions.getAll())
    }, [])


    return (
        <div>
            {cars.map(car => <Car key={car.id} car={car} />)}
        </div>
    );
};

export {Cars};