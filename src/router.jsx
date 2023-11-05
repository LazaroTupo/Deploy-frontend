import { createBrowserRouter } from "react-router-dom";
import Index from "./pages/Index";
import Layout from "./pages/Layout";
import Login from "./pages/Login";
import Perfil from "./pages/Perfil";
import Pacientes from "./pages/Pacientes";
import Calendario from "./pages/Calendario";
import Historial from "./pages/Historial";

/**
 * this file contains the 'router'
 * it means, every route our app will have in front-end side
 */
export const router = createBrowserRouter([
    {
        element: <Layout/>,
        path: '/',
        children: [
            {
                index: true,
                element: <Index/>
            },
            {
                path: '/profile',
                element: <Perfil/>,
            },
            {
                path: '/calendar',
                element: <Calendario/>,
            },
            {
                path: '/patients',
                element: <Pacientes/>,
            },
            {
                path: '/historial',
                element: <Historial/>,
            },
            
        ],
    },
    {
        path: 'login/',
        element: <Login/>
    },
])