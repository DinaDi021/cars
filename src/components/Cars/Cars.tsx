import {FC, PropsWithChildren, useEffect} from 'react';
import {useSearchParams} from "react-router-dom";

import {useAppDispatch, useAppSelector} from "../../hooks";
import {carActions} from "../../redux";
import {Car} from "./Car";

interface IProps extends PropsWithChildren {

}

const Cars: FC<IProps> = () => {
    const dispatch = useAppDispatch();
    const {cars} = useAppSelector(state => state.cars);
    const [query, setQuery] = useSearchParams({page: '1', size: '10'});


    useEffect(() => {
        dispatch(carActions.getAll({page: +query.get('page'), size: +query.get('size')}))
    }, [query.get('page'), query.get('size')])


    return (
        <div>
            {cars.map(car => <Car key={car.id} car={car} />)}
        </div>
    );
}

export {Cars};