import {configureStore} from "@reduxjs/toolkit";

import {authReducer, carReducer} from "./slice";

const store = configureStore({
    reducer: {
        cars: carReducer,
        auth: authReducer
    }
});

type RootState = ReturnType<typeof store.getState>
type AppDispatch = typeof store.dispatch

export type {
    RootState,
    AppDispatch
}

export {
    store
}