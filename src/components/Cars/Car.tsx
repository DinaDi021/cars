import {FC, PropsWithChildren, useRef, useState} from 'react';
import {useNavigate} from "react-router";

import {ICar} from "../../interfaces";
import {useAppDispatch} from "../../hooks";
import {carActions} from "../../redux";
import empty from "../../assets/image/empty.jpg"
import {carService} from "../../services";

interface IProps extends PropsWithChildren {
    car: ICar,
}

const Car: FC<IProps> = ({car}) => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const fileInput = useRef<HTMLInputElement>();
    const [image, setImage] = useState<string>(null)

    const {id, brand, photo} = car;

    const deleteCar = async () => {
        await dispatch(carActions.deleteCar({id}))
    };

    const getDetails = () => {
        navigate(`${id}`, { state: car });
    }

    const addPhoto = async () => {
        const formData = new FormData();
        const file: Blob = fileInput.current.files[0];
        formData.append('photo', file)
        await carService.addPhoto(id, formData)
        setImage(URL.createObjectURL(file))
    };

    return (
        <div>
            <div>id: {id}</div>
            <div>brand: {brand}</div>
            <img src={photo || image || empty}
                 alt={brand}
                 style={{cursor:  'pointer', width: '250px'}}
                 onClick={() => fileInput.current.click()}/>
            <button onClick={()=>dispatch(carActions.setCarForUpdate({car}))}>update</button>
            <button onClick={deleteCar}>delete</button>
            <button onClick={getDetails}>details</button>
            <input type={"file"}
                   accept={'image/jpeg, image/png'}
                   style={{display: 'none'}}
                   onChange={addPhoto}
                   ref={fileInput}/>
        </div>
    );
};

export {Car};