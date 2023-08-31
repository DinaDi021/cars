import {FC, PropsWithChildren} from 'react';
import {useSearchParams} from "react-router-dom";
import {SubmitHandler, useForm} from "react-hook-form";

import {ICar} from "../../interfaces";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {carActions} from "../../redux";

interface IProps extends PropsWithChildren {

}

const CarForm: FC<IProps> = () => {
    const {reset, register, handleSubmit, setValue} = useForm<ICar>();
    const {carForUpdate, total_items, currentSize} = useAppSelector(state => state.cars);
    const dispatch = useAppDispatch();
    const [, setQuery] = useSearchParams();


    if (carForUpdate) {
        setValue('brand', carForUpdate.brand)
        setValue('price', carForUpdate.price)
        setValue('year', carForUpdate.year)
    }

    const save: SubmitHandler<ICar> = async (car) => {
        await dispatch(carActions.create({car}))
        reset()
        const lastPage = Math.ceil((total_items+1)/currentSize);
        setQuery(prev => {
            prev.set('page',lastPage.toString())
            return prev
        })
    };

    const update: SubmitHandler<ICar> = async (car) => {
        await dispatch(carActions.update({id:carForUpdate.id, car}))
        reset()
    };

    return (
        <form onSubmit={handleSubmit(carForUpdate ? update : save)}>
            <input type="text" placeholder={'brand'} {...register('brand')}/>
            <input type="text" placeholder={'price'} {...register('price')}/>
            <input type="text" placeholder={'year'} {...register('year')}/>
            <button>{carForUpdate ? 'update' : 'save'}</button>
        </form>
    );
};

export {CarForm};