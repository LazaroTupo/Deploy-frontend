import axios from "axios";

export function getExamenFisico() {
    return axios.get('https://web-production-97cf.up.railway.app/examenFisico/');
}
export function getExamenFisicoId(examenfisico) {
    return axios.get(`https://web-production-97cf.up.railway.app/examenFisico/${examenfisico}/`);
}
export function updateExamenFisico(examenfisico) {
    return axios.put(`https://web-production-97cf.up.railway.app/examenFisico/${examenfisico.id}/`, examenfisico);
}
export function postExamenFisico(examenfisico) {
    return axios.post(`https://web-production-97cf.up.railway.app/examenFisico/`, examenfisico);
}
export function deleteExamenFisico(examenfisico) {
    return axios.delete(`https://web-production-97cf.up.railway.app/examenFisico/${examenfisico.id}/`);
}