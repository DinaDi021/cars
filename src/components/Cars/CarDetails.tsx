import {FC, PropsWithChildren} from 'react';
import {ICar} from "../../interfaces";
import {useAppLocation} from "../../hooks";

interface IProps extends PropsWithChildren {
}

const CarDetails: FC<IProps> = () => {

    const location = useAppLocation<{ car: ICar }>();
    const car = location.state.car;
    const {id, brand, price, year} = car;

    return (
        <div>
            <div>id: {id}) </div>
            <div>brand: {brand}</div>
            <div>price: {price}</div>
            <div>year: {year}</div>
        </div>
    );
};

export {CarDetails};