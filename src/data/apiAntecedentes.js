import axios from "axios";

export function getAntecedentes() {
    return axios.get('https://web-production-97cf.up.railway.app/antecedentes/');
}
export function getAntecedente(antecedente) {
    return axios.get(`https://web-production-97cf.up.railway.app/antecedentes/${antecedente}/`);
}
export function updateAntecedentes(antecedentes) {
    return axios.put(`https://web-production-97cf.up.railway.app/antecedentes/${antecedentes.id}/`, antecedentes);
}
export function postAntecedentes(antecedentes) {
    return axios.post(`https://web-production-97cf.up.railway.app/antecedentes/`, antecedentes);
}
export function deleteAntecedentes(antecedentes) {
    return axios.delete(`https://web-production-97cf.up.railway.app/antecedentes/${antecedentes.id}/`, antecedentes);
}