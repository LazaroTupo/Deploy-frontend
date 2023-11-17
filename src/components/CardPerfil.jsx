import { useEffect } from "react";

import logo_p from "../img/logo paciente.png";
import  "../css/cardperfil.css";

export default function CardPerfil({paciente}) {

    return (        
        <div className="cardPerfil">
            <div className="imagen">
                <img className="foto_paciente" src={logo_p}  alt="FotoPaciente" sizes="" />
            </div>
            <div className="datos_perfil">
                <table>
                    <tbody>
                        <tr><td>DNI:</td></tr>
                        <tr><td>Nombre</td></tr>
                        <tr><td>Apellido:</td></tr>
                        <tr><td>Edad:</td></tr>
                        <tr><td>Dirección:</td></tr>
                        <tr><td>Teléfono:</td></tr>
                        <tr><td>Género:</td></tr>
                        <tr><td>Ocupación:</td></tr>
                        <tr><td>Estado Civil:</td></tr>
                    </tbody>
                </table>
            </div> 
        </div>
    );
}