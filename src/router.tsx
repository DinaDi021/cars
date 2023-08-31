import {createBrowserRouter, Navigate} from "react-router-dom";

import {MainLayout} from "./layouts";
import {CarDetailsPage, CarsPage, LoginPage, RegisterPage} from "./pages";

const router = createBrowserRouter([
    {
        path: '',
        element: <MainLayout/>,
        children: [
            {
                index: true,
                element: <Navigate to={'register'}/>
            },
            {
                path: '/cars',
                element: <CarsPage/>,
                children: [
                    {
                        path: ':id',
                        element: <CarDetailsPage/>
                    }
                ]
            },
            {
                path:'login',
                element:<LoginPage/>
            },
            {
                path:'register',
                element:<RegisterPage/>
            }
        ]
    }
]);

export {
    router
}