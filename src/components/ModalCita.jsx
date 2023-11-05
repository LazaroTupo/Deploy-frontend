import { useEffect, useState } from "react";

import { getPacientes } from "../data/apiPacientes";
import { postCita } from "../data/apiCitas";

import "../css/modal.css";
import { getEvaluaciones } from "../data/apiEvaluaciones";
import { formatDate, getFechaBakcend, hasEvaluation } from "../helpers/helpers";

export default function ModalCita({setterClose}) {
    
    const [search, setSearch] = useState('');
    const [pacientes, setPacientes] = useState([]);
    const [evaluaciones, setEvaluaciones] = useState([]);
    const [pacientesSearch, setPacientesSearch] = useState([]);
    const [pacienteShow, setPacienteShow] = useState({});
    const [fecha, setFecha] = useState(new Date());

    useEffect(()=>{
        const loader = async () => {
            const data = (await getPacientes()).data;
            const ev = (await getEvaluaciones()).data;
            setEvaluaciones(ev);
            setPacientes(data);
            setPacientesSearch(data.filter((paciente)=>{
                return (paciente.nombre.includes(search) || paciente.apellido.includes(search) || paciente.dni.includes(search)) && hasEvaluation(paciente, ev);
            }))
            setPacienteShow(data[0])
        }
        loader();
    }, [])
    useEffect(()=>{        
        setPacientesSearch(pacientes.filter((paciente)=>{
            return (paciente.nombre.includes(search) || paciente.apellido.includes(search) || paciente.dni.includes(search)) && hasEvaluation(paciente, evaluaciones);
        }));     
        setPacienteShow(pacientesSearch.length!==0?pacientesSearch[0] : {})   
    }, [search]);

    const handleSubmit = () => {
        const fin = new Date(fecha);
        fin.setHours(fin.getHours() + 1);
        const data = {
            asistido: false,
            precio: 100,
            reporte: '',
            terapista: '72682166',
            inicio: getFechaBakcend(fecha),
            fin: getFechaBakcend(fin),
            evaluacion: 1
        }
        const api = async () => {
            await postCita(data);
        }
        api();
        setterClose(false);
    }
    
    return (
        <div className="modal-overlay">
            <button className="btn-close"
            onClick={() => setterClose(false)}>X</button>
            <div className="modal text-white">
                <h2>Formulario de Datos</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <input type="text" value={search} onChange={(e) => {                            
                            setSearch(e.target.value);                            
                        }} placeholder="Nombre o DNI del paciente" />
                        <div className="overflow-scroll">                            
                            {pacientesSearch.map((paciente)=>{
                                return <div key={paciente.dni}>
                                    <label htmlFor={`paciente${paciente.dni}`}>{paciente.apellido}</label>
                                    <input type="radio" name="pacientes" id={`paciente${paciente.dni}`} value={paciente.apellido} onClick={()=>setPacienteShow(paciente)} />
                                </div>
                            })}
                        </div>
                    </div>
                    <div>
                        {Object.keys(pacienteShow).length !== 0 && 
                        <div>
                            <p>
                                {pacienteShow.dni}
                            </p>
                            <input type="date" name="" id="" value={fecha.toISOString().split('T')[0]} onChange={(e)=>setFecha(new Date(e.target.value))} />
                            <input type="time" name="" id="" value={fecha.toLocaleTimeString('en-US', { hour12: false })} onChange={(e) => {
                                const x = new Date();
                                const partesTiempo = e.target.value.split(":");
                                const horas = parseInt(partesTiempo[0], 10);
                                const minutos = parseInt(partesTiempo[1], 10);
                                const seg = parseInt(partesTiempo[2], 10);
                                x.setHours(horas);
                                x.setMinutes(minutos);
                                x.setSeconds(seg);
                                setFecha(x);
                            }}/>
                        </div>}
                    </div>
                    <button className="btn btn-green" type="submit">Guardar</button>
                </form>
            </div>
        </div>
    )
}