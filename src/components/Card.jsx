import { useEffect } from "react";
import React, { useRef } from 'react';

import logo_p from "../img/logo paciente.png";
import BorrarIcono from "../img/icono_borrar.png";
import Cerrar from "../img/icono_cerrar.png";

import Button from "./Button";

import { getAge } from "../helpers/helpers";

import { deletePaciente } from "../data/apiPacientes.js";

export default function Card({paciente, modalSetter}) {
    const dialogRef=useRef();

    function abrirModal(){
        dialogRef.current.showModal();
    }
    function cerrarModal(){
        dialogRef.current.close();
    }

    return (        
        <div className="card">
            <img className="iconoBorrar" onClick={abrirModal} src={BorrarIcono}/>

            <dialog className="ventanaModal" ref={dialogRef}>
                <div className="modalContenedor">
                    <img className="modal-cerrar" onClick={cerrarModal} src={Cerrar}/>
                    <p>
                        ¿Está seguro que desea eliminar paciente?
                    </p>
                    <div className="contenedorBotones">
                        <div><button className="botonConfirmar">No</button></div>
                        <div><button className="botonConfirmar" onClick={()=>{
                        const del = async () => {
                            await deletePaciente(paciente);
                        }
                        del();
                        cerrarModal()
                        }}>Sí</button></div>
                        
                    </div>
                </div> 
            </dialog>

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
                        <tr><td>Estado Civil:</td><td>{paciente.estado_civil}</td></tr>
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