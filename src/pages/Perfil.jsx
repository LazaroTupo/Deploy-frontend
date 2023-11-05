import React from "react";
// import LinesChart from "../components/LinesChart";
import "../css/perfil.css";
import logo_p from "../img/logo paciente.png";

export default function Perfil() {
    return (
        <div className="card">
            <div className="imagen">
                <img className="foto_paciente" src={logo_p} alt="FotoPaciente" sizes="" />
            </div>
            <div className="datos">
                <div className="info-text">
                    <table>
                        <tbody>
                            <tr><td>DNI:</td><td>12365180</td></tr>
                            <tr><td>Nombre:</td><td>Jhonatan</td></tr>
                            <tr><td>Apellido:</td><td>Jara Mayta</td></tr>
                            <tr><td>Edad:</td><td>20</td></tr>
                            <tr><td>Dirección:</td><td>mi casa</td></tr>
                            <tr><td>Teléfono:</td><td>123456789</td></tr>
                            <tr><td>Género:</td><td>Hombre</td></tr>
                            <tr><td className="activo-label">Estado:</td><td className="estado-activo">Activo</td></tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="grafico-container">
                {/* <LinesChart /> */}
            </div>
        </div>
    );
}
