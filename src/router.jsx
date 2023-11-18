import { createBrowserRouter } from "react-router-dom";
import Index from "./pages/Index";
import Layout from "./pages/Layout";
import Login from "./pages/Login";
import Perfil from "./pages/Perfil";
import Pacientes from "./pages/Pacientes";
import Calendario from "./pages/Calendario";
import Historial from "./pages/Historial";
import FichaForm from "./pages/FichaForm";

/**
 * this file contains the 'router'
 * it means, every route our app will have in front-end side
 */
export const router = createBrowserRouter([
    {
        element: <Layout/>,
        path: '/sgp',
        children: [
            {
                index: true,
                element: <Index/>
            },
            {
                path: '/sgp/profile',
                element: <Perfil/>,
            },
            {
                path: '/sgp/calendar',
                element: <Calendario/>,
            },
            {
                path: '/sgp/patients',
                element: <Pacientes/>,
            },
            {
                path: '/sgp/historial',
                element: <Historial/>,
            },
            {
                path: '/sgp/ficha/:dni',
                element: <FichaForm/>
            },
        ],
    },
    {
        path: '/',
        element: <Login/>
    },
    
])
