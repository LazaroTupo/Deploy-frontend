import { useEffect } from "react";

import logo_p from "../img/logo paciente.png";
import Button from "./Button";

import { getAge } from "../helpers/helpers";

export default function Card({paciente, modalSetter}) {

    return (        
        <div className="card">
            <div className="imagen">
                <img className="foto_paciente" src={logo_p}  alt="FotoPaciente" sizes="" />
            </div>
            <div className="datos">
                <table>
                    <tbody>
                        <tr><td>DNI:</td><td> {paciente.dni} </td></tr>
                        <tr><td>Nombre</td><td> {paciente.nombre} </td></tr>
                        <tr><td>Apellido:</td><td> {paciente.apellido} </td></tr>
                        <tr><td>Edad:</td><td>  {getAge(paciente.fecha_de_nacimiento)}  </td></tr>
                        <tr><td>Dirección:</td><td> {paciente.direccion} </td></tr>
                        <tr><td>Teléfono:</td><td>{paciente.telefono}</td></tr>
                        <tr><td>Género:</td><td>{paciente.genero}</td></tr>
                        <tr><td>Ocupación:</td><td>{paciente.ocupacion}</td></tr>
                    </tbody>
                </table>
            </div> 
            <div className="card-buttons">
                <Button type={"button"} color={"blue"} >
                    Ver Historial
                </Button>
                <Button type={"button"} color={"green"} onClick={()=>{modalSetter(true)}}>
                    Actualizar
                </Button>
            </div> 
        </div>
    );
}