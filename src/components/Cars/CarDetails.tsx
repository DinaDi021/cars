import {FC, PropsWithChildren} from 'react';

import {ICar} from "../../interfaces";
interface IProps extends PropsWithChildren {
    car: ICar
}

const CarDetails: FC<IProps> = ({car: {id, brand, price, year}}) => {
    return (
        <div>
            <div>id: {id}</div>
            <div>brand: {brand}</div>
            <div>price: {price}</div>
            <div>year: {year}</div>
        </div>
    );
};

export {CarDetails};