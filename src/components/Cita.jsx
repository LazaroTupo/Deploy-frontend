import { useEffect, useState } from "react";
import { formatTime } from "../helpers/helpers";

import { getPaciente } from "../data/apiPacientes";
import { getEvaluacion, getEvaluaciones } from "../data/apiEvaluaciones";

export default function Cita({cita}) {

    const [paciente, setPaciente] = useState({});
    const [evaluacion, setEvaluacion] = useState({});

    useEffect(()=>{
        const getName = async () => {
            const paciente = (await getPaciente(cita.paciente)).data;
            const ev = cita.evaluacion!=null ? (await getEvaluacion(cita.evaluacion)).data : {};
            setPaciente(paciente);
            setEvaluacion(ev);
        }
        getName();
    }, [])

    return (
        <div className="cita">
            <p className="hora">{`${formatTime(new Date(cita.inicio))} - ${formatTime(new Date(cita.fin))}`}</p>
            <div className={`rounded cita-${!cita.asistido?'blue':'green'}`}>
                <div className="cita-data">
                    <p className="consulta-txt">Cita</p>
                    <p className="nombre-paciente">{`${paciente.dni !== undefined ? paciente.nombre + " " + paciente.apellido : ''}`}</p>
                    <p className="nombre-paciente">{`${evaluacion.id !== undefined ? evaluacion.diagnosticoTerapeutico : ''}`}</p>
                    <p className="asistencia">{cita.asistido?'Asistió':'No asistió'}</p>
                </div>
            </div>
        </div>
    );
}