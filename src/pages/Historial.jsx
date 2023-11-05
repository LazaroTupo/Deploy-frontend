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
import { getObservacion } from "../data/apiObservaciones";
import { getPaciente } from "../data/apiPacientes";
import { getTranstorno } from "../data/apiTranstornos";

import "../css/historial.css";

export default function Historial(){
    const dialogRef=useRef()

    //Historiales de ejemplo
    const[historiales, setHistoriales]=useState([])
    
    const[indiceHistorial,setIndiceHistorial]=useState(0);
    const [historialShow,setHistorialShow]=useState({});

    const [paciente, setPaciente] = useState({});
    const [antecedentes, setAntecedentes] = useState({});
    const [dolorInfo, setDolorInfo] = useState({});
    const [evaluacionCorporal, setEvaluacionCorporal] = useState({});
    const [observaciones, setObservaciones] = useState({});
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
            setAntecedentes((await getAntecedente(historialShow.antecedentes)).data);
            setExamenFisico((await getExamenFisicoId(historialShow.examen_fisico)).data);
            setDolorInfo((await getDolorInfoId(historialShow.dolor_info)).data);            
            setPaciente((await getPaciente(historialShow.paciente)).data);
            setEvaluacionCorporal((await getEvaluacionCorporalId(historialShow.evaluacion_corporal)).data);
            setObservaciones((await getObservacion(historialShow.observaciones)).data);
            setTranstornos((await getTranstorno(historialShow.transtornos)).data);
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
        <div className="container">
            <div className="contenedorFiltro">
                <img id="imgFiltros"onClick={abrirModal} src={Filtros}/>
            </div>

        
            <dialog className="modalFiltros" ref={dialogRef}>
                <div className="modalFiltrosContenedor">
                    <img className="modalFiltros-cerrar" onClick={cerrarModal} src={Cerrar}/>
                    
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
                    
                    <div className="columnaIzq">
                        <div className="contenedorCategoria">
                            <div className="categoriaTitulo">
                                <img class="icono"src={Paciente}/>
                                 <p className="titulo">Paciente</p>
                            </div>
                            <div className="pacienteContenido">
                                <img class="imagenPerfil"src={Paciente}/>
                                <p className="contenido">{paciente.nombre}</p>
                            </div>
                        </div>
                        <div className="contenedorCategoria">
                            <div className="categoriaTitulo">
                                <img class="icono"src={Enfermedad}/>
                                 <p className="titulo">Enfermedad</p>
                            </div>
                            <div className="categoriaContenido">
                                <p className="contenido">{historialShow.diagnostico_medico}</p>
                            </div>
                        </div>
                        <div className="contenedorCategoria">
                            <div className="categoriaTitulo">
                                 <img class="icono"src={Antecedentes}/>
                                 <p className="titulo">Antecedentes</p>
                            </div>
                            <div className="categoriaContenido">
                                <p className="contenido">{antecedentes.diabetes}</p>
                            </div>
                        </div>
                        <div className="contenedorCategoria">
                            <div className="categoriaTitulo">
                                 <img class="icono"src={Examenfis}/>
                                 <p className="titulo">Examen Físico</p>
                            </div>
                            <div className="categoriaContenido">
                                <p className="contenido">{examenFisico.grado_funcional}</p>
                            </div>
                        </div>
                    </div>
                    <div className="columnaDer">
                        <div className="contenedorCategoria">
                            <div className="categoriaTitulo">
                                <img class="icono"src={Informaciondol}/>
                                 <p className="titulo">Información del dolor</p>
                            </div>
                            <div className="categoriaContenido">
                                <p className="contenido">{dolorInfo.area}</p>
                            </div>
                        </div>
                        <div className="contenedorCategoria">
                            <div className="categoriaTitulo">
                                 <img class="icono"src={Evaluacioncorp}/>
                                 <p className="titulo">Evaluación corporal</p>
                            </div>
                            <div className="categoriaContenido">
                                <p className="contenido">{evaluacionCorporal.esquema_corporal}</p>
                            </div>
                        </div>
                        <div className="contenedorCategoria">
                            <div className="categoriaTitulo">
                                <img class="icono"src={Trastornos}/>
                                 <p className="titulo">Trastornos</p>
                            </div>
                            <div className="categoriaContenido">
                                <p className="contenido">{transtornos.vasculares}</p>
                            </div>
                        </div>
                        <div className="contenedorCategoria">
                            <div className="categoriaTitulo">
                                 <img class="icono"src={Observaciones}/>
                                 <p className="titulo">Observaciones</p>
                            </div>
                            <div className="categoriaContenido">
                                <p className="contenido">{observaciones.sentidos}</p>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div className="contenedorTrianguloDer">
                    <div onClick={avanzarHistoriales} className="trianguloDer"></div>
                </div>
            </div>
            }

            

        </div>
    )
}