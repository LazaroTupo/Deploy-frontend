import InputField from "./InputField"
import { useState } from "react";
import { useForm } from "react-hook-form";

import { updatePaciente } from "../data/apiPacientes";

import "../css/modal.css"

export default function Modal({paciente, setterPaciente, setterClose}) {

    const {handleSubmit, register} = useForm(paciente!==undefined && {
        defaultValues: paciente,
      });
    const onSubmit = (data) => {
        data.dni = paciente.dni;
        const f = async () => {
            await updatePaciente(data);
        }
        f();
        setterPaciente(data);
        setterClose(false);
    }

    return (
        <div className="modal-overlay">
            <button className="btn-close"
            onClick={() => setterClose(false)}>X</button>
            <div className="modal">
                <h2>Formulario de Datos</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="w-full">
                        <label htmlFor="dni">DNI:</label>
                        <input type="text" className="" value={paciente!==undefined && paciente.dni} onChange={()=>{}}/>
                    </div>
                    <div className="w-full">
                        <label htmlFor="nombre">Nombre:</label>
                        <input type="text" className="" {...register('nombre')} />
                    </div>
                    <div className="w-full">
                        <label htmlFor="apellido">Apellido:</label>
                        <input type="text" className="" {...register('apellido')}/>
                    </div>
                    <div className="w-full">
                        <label htmlFor="fecha_de_nacimiento">Fecha de Nacimiento:</label>
                        <input type="date" className="" {...register('fecha_de_nacimiento')}/>
                    </div>
                    <div className="w-full">
                        <label htmlFor="direccion">Dirección:</label>
                        <input type="text" className="" {...register('direccion')}/>
                    </div>
                    <div className="w-full">
                        <label htmlFor="telefono">Teléfono:</label>
                        <input type="number" className="" {...register('telefono')}/>
                    </div>
                    <div className="w-full">
                        <label htmlFor="genero">Género:</label>
                        <input type="text" className="" {...register('genero')}/>
                    </div>
                    <div className="w-full">
                        <label htmlFor="ocupacion">Ocupación:</label>
                        <input type="text" className="" {...register('ocupacion')}/>
                    </div>
                    <button type="submit">Guardar</button>
                </form>
            </div>
        </div>
    )
}