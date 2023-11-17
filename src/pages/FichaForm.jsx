import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { postAntecedentes, getAntecedente } from "../data/apiAntecedentes";
import { postEvaluacionCorporal, getEvaluacionCorporalId } from "../data/apiEvaluacionCorporal";
import { postDolorInfo, getDolorInfo } from "../data/apiDolorInfo";
import { postEvaluaciones, getEvaluacion } from "../data/apiEvaluaciones";
import { postObservaciones, getObservacion } from "../data/apiObservaciones";
import { postExamenFisico, getExamenFisicoId} from "../data/apiExamenFisico";
import { postTranstornos, getTranstorno } from "../data/apiTranstornos";

import { getFechaBakcend } from "../helpers/helpers";

import "../css/ficha.css";

export default function FichaForm({paciente}) {

    const {dni} = useParams();
    const navigate = useNavigate()
    const { handleSubmit, register, reset } = useForm();

    const onSubmit = async (data) => {
        const antecedentes = {
            diabetes: data.diabetes_tipo.lenght!=0,
            diabetes_tipo: data.diabetes_tipo,
            hta: data.hta_tipo.lenght!=0,
            hta_tipo: data.hta_tipo,
            cardiaco: data.cardiaco_tipo.lenght!=0,
            cardiaco_tipo: data.cardiaco_tipo,
            respiratorio: data.respiratorio_tipo.lenght!=0,
            respiratorio_tipo: data.respiratorio_tipo,
            operaciones: data.operaciones_tipo.lenght!=0,
            operaciones_tipo: data.operaciones_tipo,
            otros: data.otros,
            alergias: data.alergias
        };
        const examen_fisico = {
            grado_funcional: data.grado_funcional,
            actitud_postural: data.actitud_postural,
            reflejos: data.reflejos,
            actividades_motoras: data.actividades_motoras,
            coordinacion: data.coordinacion,
            orientacion: data.orientacion
        };
        const dolor_info = {
            grado_de_enfermedad: data.grado_de_enfermedad,
            nivel: data.nivel === '' ? 0 : parseInt(data.nivel),
            area: data.area,
            palpacion: data.palpacion.toLowerCase()=='si' ? true : false,
            punto_gatillo: data.punto_gatillo,
            distribucion: data.distribucion,
            ocurrencia: data.ocurrencia
        };
        const evaluacion_corporal = {
            esquema_corporal: data.esquema_corporal,
            sensibilidad_superficial: data.sensibilidad_superficial,
            sensibilidad_profunda: data.sensibilidad_profunda,
            nivel_fuerza: data.nivel_fuerza=='' ? 0 : parseInt(data.nivel_fuerza),
            tono_muscular: data.tono_muscular,
            trofismo_muscular: data.trofismo_muscular,
            rangos_articulares: data.rangos_articulares,
            retracciones_musculares: data.retracciones_musculares
        }
        const transtornos = {
            vasculares: data.vasculares,
            afasia: data.afasia,
            disartria: data.disartria,
            disfagia: data.disfagia.lenght!=0,
            disfonia: data.disfonia
        }
        const observaciones = {
            traqueostomia: data.traqueostomia.lenght!=0,
            upp: data.upp.lenght!=0,
            control_esfinteres: data.control_esfinteres.lenght!=0,
            sentidos: data.sentidos,
            estado_de_animo: data.estado_de_animo,
            pruebas_especiales: data.pruebas_especiales,
            ayuda_diagnosticada: data.ayuda_diagnosticada
        }
        const x = async () => {
            const d = new Date();
            const antecedente = (await postAntecedentes(antecedentes)).data;
            const exmFisico = (await postExamenFisico(examen_fisico)).data;
            const dolor = (await postDolorInfo(dolor_info)).data;
            const evCorporal = (await postEvaluacionCorporal(evaluacion_corporal)).data;
            const transtorno = (await postTranstornos(transtornos)).data;
            const obs = (await postObservaciones(observaciones)).data;

            const aaa = {
                fecha: `${d.getFullYear()}-${d.getMonth()}-${d.getDate()}`,
                paciente: dni,
                dado_de_alta: false,
                enfermedad_actual: data.enfermedad_actual,
                tiempo_enfermedad: data.tiempo_enfermedad.lenght=='' ? data.tiempo_enfermedad : 'No especificado',
                diagnostico_medico: data.diagnostico_medico,
                diagnostico_terapeutico: data.diagnostico_terapeutico,
                medicamentos: data.medicamentos,
                antecedentes: antecedente.id,
                examen_fisico: exmFisico.id,
                dolor_info: dolor.id,
                evaluacion_corporal: evCorporal.id,
                trastornos: transtorno.id,
                consideraciones: obs.id,
                plan_de_tratamiento: data.plan_de_tratamiento,
                observaciones_y_consideraciones: ''
            }
            const evaluacion = (await postEvaluaciones(aaa)).data;

        } 
        x();
        navigate('/sgp/patientes')
    }
    return (
        <div className="page">
            <form className="form-container overflow-scroll" onSubmit={handleSubmit(onSubmit)}>
                <div className="form-section">
                    <h2>Enfermedad</h2>
                    <table>
                        <tbody>
                        <tr>
                            <td><label htmlFor="enf1" className="form-label">Enfermedad:</label></td>
                            <td><input type="text" id="enf1" className="form-input" {...register('enfermedad_actual')} /></td>
                        </tr>
                        <tr>
                            <td><label htmlFor="enf2" className="form-label">Tiempo de enfermedad:</label></td>
                            <td><input type="text" id="enf2" className="form-input" {...register('tiempo_enfermedad')} /></td>
                        </tr>
                        <tr>
                            <td><label htmlFor="enf3" className="form-label">Diagnóstico médico:</label></td>
                            <td><input type="text" id="enf3" className="form-input" {...register('diagnostico_medico')} /></td>
                        </tr>
                        <tr>
                            <td><label htmlFor="enf4" className="form-label">Diagnóstico terapéutico:</label></td>
                            <td><input type="text" id="enf4" className="form-input" {...register('diagnostico_terapeutico')} /></td>
                        </tr>
                        <tr>
                            <td><label htmlFor="enf5" className="form-label">Medicamentos:</label></td>
                            <td><input type="text" id="enf5" className="form-input" {...register('medicamentos')} /></td>
                        </tr>
                        <tr>
                            <td><label htmlFor="enf6" className="form-label">Plan de tratamiento:</label></td>
                            <td><input type="text" id="enf6" className="form-input" {...register('plan_de_tratamiento')} /></td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <div className="form-section">
                    <h2>Antecedentes</h2>
                    <table>
                        <tbody>
                            <tr>
                            <td><label htmlFor="ant1" className="form-label">Diabetes:</label></td>
                            <td><input type="text" id="ant1" className="form-input" {...register('diabetes_tipo')} /></td>
                            </tr>
                            <tr>
                            <td><label htmlFor="ant2" className="form-label">HTA:</label></td>
                            <td><input type="text" id="ant2" className="form-input" {...register('hta_tipo')} /></td>
                            </tr>
                            <tr>
                            <td><label htmlFor="ant3" className="form-label">Cardiaco:</label></td>
                            <td><input type="text" id="ant3" className="form-input" {...register('cardiaco_tipo')} /></td>
                            </tr>
                            <tr>
                            <td><label htmlFor="ant4" className="form-label">Respiratorio:</label></td>
                            <td><input type="text" id="ant4" className="form-input" {...register('respiratorio_tipo')} /></td>
                            </tr>
                            <tr>
                            <td><label htmlFor="ant5" className="form-label">Operaciones:</label></td>
                            <td><input type="text" id="ant5" className="form-input" {...register('operaciones_tipo')} /></td>
                            </tr>
                            <tr>
                            <td><label htmlFor="ant6" className="form-label">Alergias:</label></td>
                            <td><input type="text" id="ant6" className="form-input" {...register('alergias')} /></td>
                            </tr>
                            <tr>
                            <td><label htmlFor="ant7" className="form-label">Otros:</label></td>
                            <td><input type="text" id="ant7" className="form-input" {...register('otros')} /></td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="form-section">
                    <h2>Examen Físico</h2>
                    <table>
                        <tbody>
                            <tr>
                            <td><label htmlFor="ef1" className="form-label">Grado funcional:</label></td>
                            <td><input type="text" id="ef1" className="form-input" {...register('grado_funcional')} /></td>
                            </tr>
                            <tr>
                            <td><label htmlFor="ef2" className="form-label">Actitud postural:</label></td>
                            <td><input type="text" id="ef2" className="form-input" {...register('actitud_postural')} /></td>
                            </tr>
                            <tr>
                            <td><label htmlFor="ef3" className="form-label">Reflejos:</label></td>
                            <td><input type="text" id="ef3" className="form-input" {...register('reflejos')} /></td>
                            </tr>
                            <tr>
                            <td><label htmlFor="ef4" className="form-label">Actividades motoras:</label></td>
                            <td><input type="text" id="ef4" className="form-input" {...register('actividades_motoras')} /></td>
                            </tr>
                            <tr>
                            <td><label htmlFor="ef5" className="form-label">Equilibrio y coordinación:</label></td>
                            <td><input type="text" id="ef5" className="form-input" {...register('coordinacion')} /></td>
                            </tr>
                            <tr>
                            <td><label htmlFor="ef6" className="form-label">Orientación:</label></td>
                            <td><input type="text" id="ef6" className="form-input" {...register('orientacion')} /></td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="form-section">
                    <h2>Información del dolor</h2>
                    <table>
                        <tbody>
                            <tr>
                            <td><label htmlFor="id1" className="form-label">Grado de enfermedad:</label></td>
                            <td><input type="text" id="id1" className="form-input" {...register('grado_de_enfermedad')} /></td>
                            </tr>
                            <tr>
                            <td><label htmlFor="id2" className="form-label">Nivel:</label></td>
                            <td><input type="text" id="id2" className="form-input" {...register('nivel')} /></td>
                            </tr>
                            <tr>
                            <td><label htmlFor="id3" className="form-label">Área:</label></td>
                            <td><input type="text" id="id3" className="form-input" {...register('area')} /></td>
                            </tr>
                            <tr>
                            <td><label htmlFor="id4" className="form-label">Dolor a la palpacion:</label></td>
                            <td><input type="text" id="id4" className="form-input" {...register('palpacion')} /></td>
                            </tr>
                            <tr>
                            <td><label htmlFor="id5" className="form-label">Punto gatillo:</label></td>
                            <td><input type="text" id="id5" className="form-input" {...register('punto_gatillo')} /></td>
                            </tr>
                            <tr>
                            <td><label htmlFor="id6" className="form-label">Distribución:</label></td>
                            <td><input type="text" id="id6" className="form-input" {...register('distribucion')} /></td>
                            </tr>
                            <tr>
                            <td><label htmlFor="id7" className="form-label">Ocurrencia:</label></td>
                            <td><input type="text" id="id7" className="form-input" {...register('ocurrencia')} /></td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="form-section">
                    <h2>Evaluación corporal</h2>
                    <table>
                        <tbody>
                            <tr>
                            <td><label htmlFor="ec1" className="form-label">Esquema corporal:</label></td>
                            <td><input type="text" id="ec1" className="form-input" {...register('esquema_corporal')} /></td>
                            </tr>
                            <tr>
                            <td><label htmlFor="ec2" className="form-label">Sensibilidad superficial:</label></td>
                            <td><input type="text" id="ec2" className="form-input" {...register('sensibilidad_superficial')} /></td>
                            </tr>
                            <tr>
                            <td><label htmlFor="ec3" className="form-label">Sensibilidad profunda:</label></td>
                            <td><input type="text" id="ec3" className="form-input" {...register('sensibilidad_profunda')} /></td>
                            </tr>
                            <tr>
                            <td><label htmlFor="ec4" className="form-label">Nivel de fuerza:</label></td>
                            <td><input type="text" id="ec4" className="form-input" {...register('nivel_fuerza')} /></td>
                            </tr>
                            <tr>
                            <td><label htmlFor="ec5" className="form-label">Tono muscular:</label></td>
                            <td><input type="text" id="ec5" className="form-input" {...register('tono_muscular')} /></td>
                            </tr>
                            <tr>
                            <td><label htmlFor="ec6" className="form-label">Trofismo muscular:</label></td>
                            <td><input type="text" id="ec6" className="form-input" {...register('trofismo_muscular')} /></td>
                            </tr>
                            <tr>
                            <td><label htmlFor="ec7" className="form-label">Rangos articulares:</label></td>
                            <td><input type="text" id="ec7" className="form-input" {...register('rangos_articulares')} /></td>
                            </tr>
                            <tr>
                            <td><label htmlFor="ec8" className="form-label">Retracciones musculares:</label></td>
                            <td><input type="text" id="ec8" className="form-input" {...register('retracciones_musculares')} /></td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="form-section">
                    <h2>Trastornos</h2>
                    <table>
                        <tbody>
                            <tr>
                            <td><label htmlFor="tr1" className="form-label">Vasculares:</label></td>
                            <td><input type="text" id="tr1" className="form-input" {...register('vasculares')} /></td>
                            </tr>
                            <tr>
                            <td><label htmlFor="tr2" className="form-label">Afasia:</label></td>
                            <td><input type="text" id="tr2" className="form-input" {...register('afasia')} /></td>
                            </tr>
                            <tr>
                            <td><label htmlFor="tr3" className="form-label">Disartria:</label></td>
                            <td><input type="text" id="tr3" className="form-input" {...register('disartria')} /></td>
                            </tr>
                            <tr>
                            <td><label htmlFor="tr4" className="form-label">Disfagia:</label></td>
                            <td><input type="text" id="tr4" className="form-input" {...register('disfagia')} /></td>
                            </tr>
                            <tr>
                            <td><label htmlFor="tr5" className="form-label">Disfonía:</label></td>
                            <td><input type="text" id="tr5" className="form-input" {...register('disfonia')} /></td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="form-section">
                    <h2>Observaciones</h2>
                    <table>
                        <tbody>
                            <tr>
                            <td><label htmlFor="ob1" className="form-label">Observaciones:</label></td>
                            <td><input type="text" id="ob1" className="form-input" {...register('observaciones_y_consideraciones')} /></td>
                            </tr>
                            <tr>
                            <td><label htmlFor="ob2" className="form-label">Traqueostomía:</label></td>
                            <td><input type="text" id="ob2" className="form-input" {...register('traqueostomia')} /></td>
                            </tr>
                            <tr>
                            <td><label htmlFor="ob3" className="form-label">Upp:</label></td>
                            <td><input type="text" id="ob3" className="form-input" {...register('upp')} /></td>
                            </tr>
                            <tr>
                            <td><label htmlFor="ob4" className="form-label">Control de esfínteres:</label></td>
                            <td><input type="text" id="ob4" className="form-input" {...register('control_esfinteres')} /></td>
                            </tr>
                            <tr>
                            <td><label htmlFor="ob5" className="form-label">Sentidos:</label></td>
                            <td><input type="text" id="ob5" className="form-input" {...register('sentidos')} /></td>
                            </tr>
                            <tr>
                            <td><label htmlFor="ob6" className="form-label">Estado de ánimo:</label></td>
                            <td><input type="text" id="ob6" className="form-input" {...register('estado_de_animo')} /></td>
                            </tr>
                            <tr>
                            <td><label htmlFor="ob7" className="form-label">Pruebas especiales:</label></td>
                            <td><input type="text" id="ob7" className="form-input" {...register('pruebas_especiales')} /></td>
                            </tr>
                            <tr>
                            <td><label htmlFor="ob8" className="form-label">Ayuda diagnosticada:</label></td>
                            <td><input type="text" id="ob8" className="form-input" {...register('ayuda_diagnosticada')} /></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <input type="submit" value="Enviar" className="btn btn-blue"/>
            </form>
        </div>
    );
}