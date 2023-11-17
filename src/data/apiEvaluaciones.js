import axios from "axios";

export function getEvaluaciones() {
    return axios.get('https://web-production-97cf.up.railway.app/evaluacion/');
}
export function getEvaluacion(evaluacion) {
    return axios.get(`https://web-production-97cf.up.railway.app/evaluacion/${evaluacion}/`);
}
export function updateEvaluaciones(evaluacion) {
    return axios.put(`https://web-production-97cf.up.railway.app/evaluacion/${evaluacion.id}/`, evaluacion);
}
export function postEvaluaciones(evaluacion) {
    return axios.post(`https://web-production-97cf.up.railway.app/evaluacion/`, evaluacion);
}
export function deleteEvaluaciones(evaluacion) {
    return axios.delete(`https://web-production-97cf.up.railway.app/evaluacion/${evaluacion.id}/`);
}