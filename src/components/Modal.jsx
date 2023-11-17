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
            <form action="" className="modal" onSubmit={handleSubmit(onSubmit)}>
                <h2>Formulario de Datos</h2>
                <div className="flex-1 flex gap-2">
                    <div className="flex-1 flex flex-col h-full">
                        <table><tbody>                        
                            <tr>
                                <td><label htmlFor="dni">DNI:</label></td>
                                <td><input type="text" className="w-full" value={paciente!==undefined && paciente.dni} onChange={()=>{}}/></td>
                            </tr>
                            <tr>
                                <td><label htmlFor="nombre">Nombre:</label></td>
                                <td><input type="text" className="w-full" {...register('nombre')} /></td>
                            </tr>
                            <tr>
                                <td><label htmlFor="apellido">Apellido:</label></td>
                                <td><input type="text" className="w-full" {...register('apellido')}/></td>
                            </tr>
                            <tr>
                                <td><label htmlFor="fecha_de_nacimiento">Fecha de Nacimiento:</label></td>
                                <td><input type="date" className="w-full" {...register('fecha_de_nacimiento')}/></td>
                            </tr>
                        </tbody></table>
                    </div>
                    <div className="flex-1 flex flex-col h-full">
                        <table><tbody>                        
                            <tr>
                                <td><label htmlFor="direccion">Dirección:</label></td>
                                <td><input type="text" className="w-full" {...register('direccion')}/></td>
                            </tr>
                            <tr>
                                <td><label htmlFor="telefono">Teléfono:</label></td>
                                <td><input type="number" className="w-full" {...register('telefono')}/></td>
                            </tr>
                            <tr>
                                <td><label htmlFor="genero">Género:</label></td>
                                <td><input type="text" className="w-full" {...register('genero')}/></td>
                            </tr>
                            <tr>
                                <td><label htmlFor="ocupacion">Ocupación:</label></td>
                                <td><input type="text" className="w-full" {...register('ocupacion')}/></td>
                            </tr>
                            <tr>
                                <td><label htmlFor="estado_civil">Estado Civil:</label></td>
                                <td><input type="text" className="w-full"  {...register('estado_civil')}/></td>
                            </tr>
                        </tbody></table>
                    </div>
                </div>
                <button className="btn btn-green" type="submit">Guardar</button>
            </form>
        </div>
    )
}