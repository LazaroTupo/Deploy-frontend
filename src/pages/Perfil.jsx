import React from "react";

import "../css/perfil.css";
import CardPerfil from "../components/CardPerfil";
import grafico_tratamiento from "../img/grafico_tratamientos.gif";

export default function Perfil() {
    return (
        
        <div className="contenedor_perfil">
            <div className="info-text">
                <CardPerfil />    
            </div>
            <div className="grafico-container">
                <img className="grafico" src={grafico_tratamiento}  alt="grafico_paciente" sizes="" />
            </div>
        </div>
    );
}
