import { useEffect, useState } from "react";
import React, { useRef } from 'react';

import Filtros from "../img/icono_filtros.png";
import Paciente from "../img/icono_paciente.png";
import Enfermedad from "../img/icono_enfermedad.png";
import Antecedentes from "../img/icono_antecedentes.png";
import Examenfis from "../img/icono_examenfis.png";
import Informaciondol from "../img/icono_informaciondol.png";
import Evaluacioncorp from "../img/icono_evaluacioncorp.png";
import Trastornos from "../img/icono_trastornos.png";
import Observaciones from "../img/icono_observaciones.png";
import Cerrar from "../img/icono_cerrar.png";

import { getEvaluaciones } from "../data/apiEvaluaciones";
import { getAntecedente } from "../data/apiAntecedentes";
import { getDolorInfoId } from "../data/apiDolorInfo";
import { getEvaluacionCorporalId } from "../data/apiEvaluacionCorporal";
import { getExamenFisicoId } from "../data/apiExamenFisico";
import { getObservacion} from "../data/apiObservaciones";
import { getPaciente } from "../data/apiPacientes";
import { getTranstorno } from "../data/apiTranstornos";

import CategoriaHistorial from "../components/CategoriaHistorial";

import "../css/historial.css";

export default function Historial(){
    const dialogRef=useRef()


    const[historiales, setHistoriales]=useState([])
    
    const[indiceHistorial,setIndiceHistorial]=useState(0);
    const [historialShow,setHistorialShow]=useState({});

    const [paciente, setPaciente] = useState({});
    const [antecedentes, setAntecedentes] = useState({});
    const [dolorInfo, setDolorInfo] = useState({});
    const [evaluacionCorporal, setEvaluacionCorporal] = useState({});
    const [observacion, setObservacion] = useState({});
    const [examenFisico, setExamenFisico] = useState({});
    const [transtornos, setTranstornos] = useState({});

    function retrocederHistoriales(){
        setIndiceHistorial((indicePasado)=>{
            if(indicePasado==0){
                return(historiales.length-1)      
            }
            else{
                return(indicePasado-1)
            }
        })
        
        
    }
    function avanzarHistoriales(){
        setIndiceHistorial((indicePasado)=>{
            if(indicePasado==historiales.length-1){
                return(0)
            }
            else{
                return(indicePasado+1)
            }
        })

        
    }

    useEffect(() => {
        const getData = async () => {
            const evaluaciones = (await getEvaluaciones()).data;
            setHistoriales(evaluaciones);
            if (evaluaciones.length != 0) {
                setHistorialShow(evaluaciones[0])
            }
        }
        getData();
    }, [])    

    useEffect(() => {
        setHistorialShow(historiales[indiceHistorial]);
      }, [indiceHistorial, historiales]);

    useEffect(() => {
        const getData = async () => {
            console.log(historialShow)
            setAntecedentes((await getAntecedente(historialShow.antecedentes)).data);
            setExamenFisico((await getExamenFisicoId(historialShow.examen_fisico)).data);
            setDolorInfo((await getDolorInfoId(historialShow.dolor_info)).data);            
            setPaciente((await getPaciente(historialShow.paciente)).data);
            setEvaluacionCorporal((await getEvaluacionCorporalId(historialShow.evaluacion_corporal)).data);
            setObservacion((await getObservacion(historialShow.consideraciones)).data);
            setTranstornos((await getTranstorno(historialShow.trastornos)).data);
            console.log(paciente)
        }
        getData();
    }, [historialShow])


    function abrirModal(){
        dialogRef.current.showModal();
    }
    function cerrarModal(){
        dialogRef.current.close();
    }
    
    return(
        <div className="page overflow-scroll">
            <div className="contenedorFiltro">
                <img id="imgFiltros"onClick={abrirModal} src={Filtros}/>
            </div>
            <dialog className="ventanaModal" ref={dialogRef}>
                <div className="modalContenedor">
                    <img className="modal-cerrar" onClick={cerrarModal} src={Cerrar}/>
                    
                    <ul className="modalFiltros-filtros">
                        <select>
                            
                            <option disabled selected>Antecedentes</option>
                            <option>1</option>
                            <option>2</option>
                            
                        </select>
                       
                        
                        <select>
                            <option disabled selected>Trastorno</option>
                            <option>1</option>
                            <option>2</option>
                        </select>
                        

                        <select>
                            <option disabled selected>Fecha</option>
                            <option>1</option>
                            <option>2</option>
                        </select>
                        

                        <select>
                            <option disabled selected>Tratamiento</option>
                            <option>1</option>
                            <option>2</option>
                        </select>
                        <select>
                            <option disabled selected>Enfermedad</option>
                            <option>1</option>
                            <option>2</option>
                        </select>
                    </ul>
                    <button className="modalFiltros-aplicar">Aplicar</button>
                    
                </div>
                
            </dialog>        
            {historiales.length!=0 && 
                <div className="contenedorContenido">
                <div className="contenedorTrianguloIzq">
                    <div></div>
                    <div onClick={retrocederHistoriales} className="trianguloIzq"></div>
                </div>
                <div className="contenedorHistorial">
                    
                    <CategoriaHistorial img={Paciente} titulo={'Paciente'}>
                        DNI: {paciente.dni}<br/>
                        Nombre: {paciente.nombre}<br/>
                        Apellido: {paciente.apellido}<br/>
                        Fecha de nacimiento: {paciente.fecha_nacimiento}<br/>
                        Dirección: {paciente.direccion}<br/>
                        Teléfono: {paciente.telefono!=null?paciente.telefono:"-"}<br/>
                        Género: {paciente.genero}<br/>
                        Estado civil: {paciente.estado_civil}<br/>
                        Ocupación: {paciente.ocupacion}
                    </CategoriaHistorial>
                    
                    <CategoriaHistorial img={Enfermedad} titulo={'Enfermedad'}>
                        Enfermedad actual: {historialShow.enfermedad_actual!=null?historialShow.enfermedad_actual:"-"}<br/>
                        Tiempo de enfermedad: {historialShow.tiempo_enfermedad!=null?historialShow.tiempo_enfermedad:"-"}<br/>
                        Diagnóstico médico: {historialShow.diagnostico_medico!=null?historialShow.diagnostico_medico:"-"}<br/>
                        Diagnóstico terapeutico: {historialShow.diagnostico_terapeutico!=null?historialShow.diagnostico_terapeutico:"-"}<br/>
                        Medicamentos: {historialShow.medicamentos!=null?historialShow.medicamentos:"-"}<br/>
                        Plan de tratamiento: {historialShow.plan_de_tratamiento!=null?historialShow.plan_de_tratamiento:"-"}
                    </CategoriaHistorial>

                    <CategoriaHistorial img={Antecedentes} titulo={'Antecedentes'}>
                        Diabetes: {antecedentes.diabetes? "Si":"No"}<br/>
                        Tipo diabetes: {antecedentes.diabetes_tipo!=null? antecedentes.diabetes_tipo:"-"}<br/>
                        HTA: {antecedentes.hta? "Si":"No"}<br/>
                        Tipo HTA: {antecedentes.hta_tipo!=null? antecedentes.hta_tipo:"-"}<br/>
                        Cardiaco: {antecedentes.cardiaco? "Si":"No"}<br/>
                        Tipo cardiaco: {antecedentes.cardiaco_tipo!=null? antecedentes.cardiaco_tipo:"-"}<br/>
                        Respiratorio: {antecedentes.respiratorio? "Si":"No"}<br/>
                        Tipo respiratorio: {antecedentes.respiratorio_tipo!=null? antecedentes.respiratorio_tipo:"-"}<br/>
                        Operaciones: {antecedentes.operaciones? "Si":"No"}<br/>
                        Tipo operaciones: {antecedentes.operaciones_tipo!=null? antecedentes.operaciones_tipo: "-"}<br/>
                        Otros: {antecedentes.otros}<br/>
                        Alergias: {antecedentes.alergias!=null? antecedentes.alergias:"-"}
                    </CategoriaHistorial>

                    <CategoriaHistorial img={Examenfis} titulo={'Examen Fisico'}>
                        Grado funcional: {examenFisico.grado_funcional!=null? examenFisico.grado_funcional: "-"}<br/>
                        Actitud postural: {examenFisico.actitud_postural!=null? examenFisico.actitud_postural: "-"}<br/>
                        Reflejos: {examenFisico.reflejos!=null? examenFisico.reflejos: "-"}<br/>
                        Actividades motoras: {examenFisico.actividades_motoras!=null? examenFisico.actividades_motoras: "-"}<br/>
                        Equilibrio y coordinación: {examenFisico.coordinacion!=null? examenFisico.coordinacion: "-"}<br/>
                        Orientación: {examenFisico.orientacion!=null? examenFisico.orientacion: "-"}
                    </CategoriaHistorial>
                
                    <CategoriaHistorial img={Informaciondol} titulo={'Información del dolor'}>
                        Grado de enfermedad: {dolorInfo.grado_de_enfermedad!=null? dolorInfo.grado_de_enfermedad: "-"}<br/>
                        Nivel: {dolorInfo.nivel!=null? dolorInfo.nivel: "-"}<br/>
                        Área: {dolorInfo.area!=null? dolorInfo.area: "-"}<br/>
                        Dolor a la palpitación: {dolorInfo.palpacion? "Si":"No"}<br/>
                        Punto gatillo: {dolorInfo.punto_gatillo!=null? dolorInfo.punto_gatillo: "-"}<br/>
                        Distribución: {dolorInfo.distribucion!=null? dolorInfo.distribucion: "-"}<br/>
                        Ocurrencia: {dolorInfo.ocurrencia!=null? dolorInfo.ocurrencia: "-"}
                    </CategoriaHistorial>

                    <CategoriaHistorial img={Evaluacioncorp} titulo={'Evaluación corporal'}>
                        Esquema corporal: {evaluacionCorporal.esquema_corporal!=null?evaluacionCorporal.esquema_corporal:"-"}<br/>
                        Sensibilidad superficial: {evaluacionCorporal.sensibilidad_superficial!=null?evaluacionCorporal.sensibilidad_superficial:"-"}<br/>
                        Sensibilidad profunda: {evaluacionCorporal.sensibilidad_profunda!=null?evaluacionCorporal.sensibilidad_profunda:"-"}<br/>
                        Nivel de fuerza: {evaluacionCorporal.nivel_fuerza!=null?evaluacionCorporal.nivel_fuerza:"-"}<br/>
                        Tono muscular: {evaluacionCorporal.tono_muscular=null?evaluacionCorporal.tono_muscular:"-"}<br/>
                        Trofismo muscular: {evaluacionCorporal.trofismo_muscular!=null?evaluacionCorporal.trofismo_muscular:"-"}<br/>
                        Rangos articulares: {evaluacionCorporal.rangos_artiulares!=null?evaluacionCorporal.rangos_artiulares:"-"}<br/>
                        Retracciones musculares: {evaluacionCorporal.retracciones_musculares!=null?evaluacionCorporal.retracciones_musculares:"-"}<br/>
                    </CategoriaHistorial>

                    <CategoriaHistorial img={Trastornos} titulo={'Trastornos'}>
                        Vasculares: {transtornos.vasculares!=null?transtornos.vasculares:"-"}<br/>
                        Afasia: {transtornos.afasia!=null?transtornos.afasia:"-"}<br/>
                        Disartria: {transtornos.disartria!=null?transtornos.disartria:"-"}<br/>
                        Disfagia: {transtornos.disfagia?"Si":"No"}<br/>
                        Disfonía: {transtornos.disfonia!=null?transtornos.disfonia:"-"}
                    </CategoriaHistorial>

                    <CategoriaHistorial img={Observaciones} titulo={'Observaciones'}>
                        Observaciones: {historialShow.observaciones_y_consideraciones!=null?historialShow.observaciones_y_consideraciones:"-"}<br/>
                        Traqueostomía: {observacion.traqueostomia?"Si":"No"}<br/>
                        Upp: {observacion.upp?"Si":"No"}<br/>
                        Control de esfínteres: {observacion.control_esfinteres?"Si":"No"}<br/>
                        Sentidos: {observacion.sentidos?observacion.sentidos:"-"}<br/>
                        Estado de ánimo: {observacion.estado_de_animo?observacion.estado_de_animo:"-"}<br/>
                        Pruebas especiales: {observacion.pruebas_especiales?observacion.pruebas_especiales:"-"}<br/>
                        Ayuda diagnosticada: {observacion.ayuda_diagnosticada?observacion.ayuda_diagnosticada:"-"}
                    </CategoriaHistorial>                   

                </div>
                <div className="contenedorTrianguloDer">
                        <div onClick={avanzarHistoriales} className="trianguloDer"></div>
                </div>
                </div>
            }
        </div>
        
    )
        
}
