import axios from "axios";

export function getObservaciones() {
    return axios.get('http://127.0.0.1:8000/observaciones/');
}
export function getObservacion(observaciones) {
    return axios.get(`http://127.0.0.1:8000/observaciones/${observaciones}/`);
}
export function updateObservaciones(observaciones) {
    return axios.put(`http://127.0.0.1:8000/observaciones/${observaciones.id}/`, observaciones);
}
export function postObservaciones(observaciones) {
    return axios.put(`http://127.0.0.1:8000/observaciones/`, observaciones);
}
export function deleteObservaciones(observaciones) {
    return axios.put(`http://127.0.0.1:8000/observaciones/${observaciones.id}/`, observaciones);
}