import axios from "axios";

export function getObservaciones() {
    return axios.get('https://web-production-97cf.up.railway.app/observaciones/');
}
export function getObservacion(observaciones) {
    return axios.get(`https://web-production-97cf.up.railway.app/observaciones/${observaciones}/`);
}
export function updateObservaciones(observaciones) {
    return axios.put(`https://web-production-97cf.up.railway.app/observaciones/${observaciones.id}/`, observaciones);
}
export function postObservaciones(observaciones) {
    return axios.post(`https://web-production-97cf.up.railway.app/observaciones/`, observaciones);
}
export function deleteObservaciones(observaciones) {
    return axios.delete(`https://web-production-97cf.up.railway.app/observaciones/${observaciones.id}/`);
}