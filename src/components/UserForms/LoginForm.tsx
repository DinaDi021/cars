import {FC, PropsWithChildren} from 'react';
import {SubmitHandler, useForm} from "react-hook-form";
import {useNavigate} from "react-router";
import {IAuth} from "../../interfaces";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {authActions} from "../../redux";

interface IProps extends PropsWithChildren {

}

const LoginForm: FC<IProps> = () => {
    const {register, reset, handleSubmit} = useForm<IAuth>();
    const {errors} = useAppSelector(state => state.auth);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const login: SubmitHandler<IAuth> = async (user) => {
        const {meta:{requestStatus}} = await dispatch(authActions.login({user}));

        if (requestStatus === 'fulfilled'){
            reset()
            navigate('/cars')
        }
    };

    return (
        <form onSubmit={handleSubmit(login)}>
            <input type="text" placeholder={'username'} {...register('username')}/>
            <input type="text" placeholder={'password'} {...register('password')}/>
            <button>login</button>
            {errors && <span>{errors.detail}</span>}
        </form>
    );
};

export {LoginForm};