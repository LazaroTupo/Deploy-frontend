import axios from "axios";

export function getExamenFisico() {
    return axios.get('http://127.0.0.1:8000/examenFisico/');
}
export function getExamenFisicoId(examenfisico) {
    return axios.get(`http://127.0.0.1:8000/examenFisico/${examenfisico}/`);
}
export function updateExamenFisico(examenfisico) {
    return axios.put(`http://127.0.0.1:8000/examenFisico/${examenfisico.id}/`, examenfisico);
}
export function postExamenFisico(examenfisico) {
    return axios.put(`http://127.0.0.1:8000/examenFisico/`, examenfisico);
}
export function deleteExamenFisico(examenfisico) {
    return axios.put(`http://127.0.0.1:8000/examenFisico/${examenfisico.id}/`, examenfisico);
}