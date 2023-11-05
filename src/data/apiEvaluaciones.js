import axios from "axios";

export function getEvaluaciones() {
    return axios.get('http://127.0.0.1:8000/evaluacion/');
}
export function getEvaluacion(evaluacion) {
    return axios.get(`http://127.0.0.1:8000/evaluacion/${evaluacion}`);
}
export function updateEvaluaciones(evaluacion) {
    return axios.put(`http://127.0.0.1:8000/evaluacion/${evaluacion.id}/`, evaluacion);
}
export function postEvaluaciones(evaluacion) {
    return axios.put(`http://127.0.0.1:8000/evaluacion/`, evaluacion);
}
export function deleteEvaluaciones(evaluacion) {
    return axios.put(`http://127.0.0.1:8000/evaluacion/${evaluacion.id}/`, evaluacion);
}