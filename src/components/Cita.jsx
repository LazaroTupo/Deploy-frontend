import { useEffect, useState } from "react";
import { formatTime } from "../helpers/helpers";

import { getPaciente } from "../data/apiPacientes";
import { getEvaluacion, getEvaluaciones } from "../data/apiEvaluaciones";

export default function Cita({cita}) {

    const [paciente, setPaciente] = useState({});
    const [evaluacion, setEvaluacion] = useState({});

    useEffect(()=>{
        const getName = async () => {
            const p = (await getPaciente(cita.paciente));
            const ev = cita.evaluacion!=null ? (await getEvaluacion(cita.evaluacion)).data : {};
            setPaciente(p.data);
            setEvaluacion(ev);
            console.log(cita)
        }
        getName();
    }, [])

    return (
        <li className="cita">
            <p className="hora">{`${formatTime(new Date(cita.inicio))} - ${formatTime(new Date(cita.fin))}`}</p>
            <div className={`rounded cita-${!cita.asistido?'blue':'green'} cita-data`}>
                <div className="border-cita rounded-left"></div>
                <div className="cita-body">
                    <p className="consulta-txt">Cita</p>
                    <p className="nombre-paciente">{`${paciente.dni !== undefined ? paciente.nombre + " " + paciente.apellido : ''}`}</p>
                    <p className="nombre-paciente">{`${evaluacion.id !== undefined ? evaluacion.enfermedad_actual : ''}`}</p>
                    <p className="asistencia">{cita.asistido?'Asistió':'No asistió'}</p>
                </div>
            </div>
        </li>
    );
}