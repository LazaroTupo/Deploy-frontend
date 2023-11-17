import InputField from "./InputField";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

import { postPaciente } from "../data/apiPacientes";

import "../css/modal.css";

export default function ModalRegistro({ setterClose}) {
    const history = useNavigate();
    const { handleSubmit, register, reset } = useForm();
    const onRegister = async (data) => {
        const f = async () => {
            const x = await postPaciente(data);
            console.log(x.data);
        }
        f();
        reset();
        setterClose(false);
        history(`/sgp/ficha/${data.dni}`);
  };

    return (
        <div className="modal-overlay">
            <button className="btn-close"
            onClick={(e) => setterClose(false)}>X</button>
            <form className="modal" onSubmit={handleSubmit(onRegister)}>
                <h2 className="text-center">Formulario de  Registro</h2>
                <div className="flex-1 flex gap-2">
                    <div className="flex-1 flex flex-col h-full">
                        <table><tbody>
                            <tr>
                                <td><label htmlFor="dni">DNI:</label></td>
                                <td><input type="text" className="w-full"  {...register("dni",{required:true})}/></td>
                            </tr>
                            <tr>
                                <td><label htmlFor="nombre">Nombre:</label></td>
                                <td><input type="text" className="w-full"  {...register('nombre',{required:true})} /></td>
                            </tr>
                            <tr>
                                <td><label htmlFor="apellido">Apellido:</label></td>
                                <td><input type="text" className="w-full"  {...register('apellido',{required:true})}/></td>
                            </tr>
                            <tr>
                                <td><label htmlFor="fecha_de_nacimiento">Fecha de Nacimiento:</label></td>
                                <td><input type="date" className="w-full"  {...register('fecha_de_nacimiento',{required:true})}/></td>
                            </tr>
                            <tr>
                                <td><label htmlFor="direccion">Dirección:</label></td>
                                <td><input type="text" className="w-full"  {...register('direccion',{required:true})}/></td>
                            </tr>
                        </tbody></table>
                    </div>
                    <div className="flex-1 flex flex-col h-full">
                        <table><tbody>
                            <tr>
                                <td><label htmlFor="telefono">Teléfono:</label></td>
                                <td><input type="number"  {...register('telefono',{required:true})}/></td>
                            </tr>
                            <tr>
                                <td><label htmlFor="genero">Género:</label></td>
                                <td><input type="text"  {...register('genero',{required:true})}/></td>
                            </tr>
                            <tr>
                                <td><label htmlFor="ocupacion">Ocupación:</label></td>
                                <td><input type="text"  {...register('ocupacion',{required:true})}/></td>
                            </tr>
                            <tr>
                                <td><label htmlFor="estado_civil">Estado Civil:</label></td>
                                <td><input type="text"  {...register('estado_civil',{required:true})}/></td>
                            </tr>
                        </tbody></table>
                    </div>
                </div>
                <button className="btn btn-green" type="submit">Registrar</button>
            </form>
        </div>
    )
}