import { Outlet, Link, useLocation } from "react-router-dom";

import LinkButton from "../components/LinkButton";

import HomeIcon from "../img/svg/home-4-svgrepo-com.svg"
import CalendarIcon from "../img/svg/calendar-days-svgrepo-com.svg"
import ProfileIcon from "../img/svg/profile-round-1342-svgrepo-com.svg"
import PatientsIcon from "../img/svg/users-people-svgrepo-com.svg"
import HistorialIcon from "../img/svg/document-svgrepo-com.svg"

export default function Layout() {
    const location = useLocation();
    return (
        <div className="main">
            <aside className="side-bar bg-blue">
                <nav>
                    <ul>
                        <li>
                            <Link to={'/sgp'}><LinkButton active={location.pathname==='/'}
                            img={HomeIcon}>
                                Home
                            </LinkButton></Link>
                        </li>
                        <li>
                            <Link to={'/sgp/profile'}><LinkButton active={location.pathname==='/profile'}
                            img={ProfileIcon}>
                                Perfil
                            </LinkButton></Link>
                        </li>
                        <li>
                            <Link to={'/sgp/calendar'}><LinkButton active={location.pathname==='/calendar'}
                            img={CalendarIcon}>
                                Calendario
                            </LinkButton></Link>
                        </li>
                        <li>
                            <Link to={'/sgp/patients'}><LinkButton active={location.pathname==='/patients'}
                            img={PatientsIcon}>
                                Pacientes
                            </LinkButton></Link>
                        </li>
                        <li>
                            <Link to={'/sgp/historial'}><LinkButton active={location.pathname==='/historial'}
                            img={HistorialIcon}>
                                Historiales Médicos
                            </LinkButton></Link>
                        </li>
                    </ul>
                </nav>
            </aside>
            <section className="section">                
                <Outlet/>
            </section>
        </div>
    );
}