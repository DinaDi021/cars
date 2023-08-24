import {useLocation, Location} from "react-router";

interface IState<STATE> extends Location {
    state: STATE
}

const useAppLocation = <T>(): IState<T> => useLocation()

export {
    useAppLocation
}