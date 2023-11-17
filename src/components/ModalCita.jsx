import { useEffect, useState } from "react";

import { getPacientes } from "../data/apiPacientes";
import { postCita } from "../data/apiCitas";
import { getCitas } from "../data/apiCitas";
import Card from "../components/Card";

import "../css/modal.css";
import { getEvaluaciones } from "../data/apiEvaluaciones";
import { formatDate, getFechaBakcend, hasEvaluation, getEvaluacionID } from "../helpers/helpers";
import {validateAppointment} from "../helpers/helpers";

export default function ModalCita({setterClose}) {
    
    const [search, setSearch] = useState('');
    const [pacientes, setPacientes] = useState([]);
    const [evaluaciones, setEvaluaciones] = useState([]);
    const [pacientesSearch, setPacientesSearch] = useState([]);
    const [pacienteShow, setPacienteShow] = useState({});
    const [fechaHora, setFechaHora] = useState(""); 
    const [arrayCitas, setArrayCitas] = useState([]);

    useEffect(()=>{
        const loader = async () => {
            const data = (await getPacientes()).data;
            const ev = (await getEvaluaciones()).data;
            setEvaluaciones(ev);
            setPacientes(data);
            setPacientesSearch(data.filter((paciente)=>{
                return (paciente.nombre.includes(search) || paciente.apellido.includes(search) || paciente.dni.includes(search)) && hasEvaluation(paciente, ev);
            }))
            setPacienteShow(pacientesSearch.length!==0?pacientesSearch[0] : {})  
        }
        loader();
    }, [])
    useEffect(()=>{        
        setPacientesSearch(pacientes.filter((paciente)=>{
            return (paciente.nombre.includes(search) || paciente.apellido.includes(search) || paciente.dni.includes(search)) && hasEvaluation(paciente, evaluaciones);
        }));     
        setPacienteShow(pacientesSearch.length!==0?pacientesSearch[0] : {})   
    }, [search]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await getCitas();
            setArrayCitas(result.data);
        };
        fetchData();
    }, []);

   
    const handleSubmit = () => {
        const fechaInicio = new Date(fechaHora);
        const fechaFinal = new Date(fechaHora);
        fechaFinal.setMinutes(fechaFinal.getMinutes() + 60);

        const data = {
            inicio: getFechaBakcend(fechaInicio),
            fin: getFechaBakcend(fechaFinal),
            reporte: '',
            precio: 100,
            asistido: false,
            terapista: '72682166',
            paciente: pacienteShow.dni,
            evaluacion: getEvaluacionID(pacienteShow, evaluaciones)
        }

        const registro = async () => {
            console.log(data)
            const hayCita = validateAppointment(arrayCitas, fechaInicio);

            if (hayCita) {
                await postCita(data);
            }   
        }
            registro();
            setterClose(false);
    }
     
    return (
        <div className="modal-overlay">
            <button className="btn-close"
            onClick={() => setterClose(false)}>X</button>
            <form action="" className="modal flex flex-col text-white" onSubmit={handleSubmit}>
                <h2>FORMULARIO DE DATOS</h2>
                <div className="flex-1 flex gap-2">
                    <div className="flex-1 flex flex-col h-full">
                        <input
                            type="text"
                            value={search}
                            onChange={(e) => {
                                setSearch(e.target.value);
                            }}
                            placeholder="Nombre o DNI del paciente"
                        />
                        <div className="flex-1 overflow-scroll">
                            <div className="container-radios">
                            {pacientesSearch.map((paciente)=>{
                                return <div className="radio-modal" key={paciente.dni}>
                                    <input type="radio" name="pacientes" id={`paciente${paciente.dni}`} value={paciente.apellido} onClick={()=>setPacienteShow(paciente)} checked={pacienteShow.dni === paciente.dni}/>
                                    <label className="label-name" htmlFor={`paciente${paciente.dni}`}> {paciente.dni} - {paciente.apellido}, {paciente.nombre}</label>
                                </div>
                            })}
                            </div>
                        </div>
                    </div>
                    <div className="flex-1 h-fulL">                         
                            <div>                                                                
                                <input type="datetime-local" name="" id="" value={fechaHora} onChange={(e) => {
                                    const newDateTime = e.target.value;
                                    setFechaHora(newDateTime);
                                }}/>
                                <div className="w-full center my-1">
                                {Object.keys(pacienteShow).length !== 0 &&
                                    <table><tbody>
                                        <tr>
                                            <td>DNI:</td><td> {pacienteShow.dni}</td>
                                        </tr>
                                        <tr><td>Nombre:</td><td>{pacienteShow.nombre}</td></tr>
                                        <tr><td>Apellido:</td><td>{pacienteShow.apellido}</td></tr>
                                        <tr><td>Gener:</td><td>{pacienteShow.genero}</td></tr>
                                        <tr><td>Ocupacion:</td><td>{pacienteShow.ocupacion}</td></tr>
                                        
                                    </tbody></table>
                                }
                                </div>
                            </div>                        
                    </div>
                </div>
                <button type="submit" className="btn btn-green">Guardar</button>
            </form>
        </div>
    )
}