import axios from "axios";

export function getAntecedentes() {
    return axios.get('http://127.0.0.1:8000/antecedentes/');
}
export function getAntecedente(antecedente) {
    return axios.get(`http://127.0.0.1:8000/antecedentes/${antecedente}`);
}
export function updateAntecedentes(antecedentes) {
    return axios.put(`http://127.0.0.1:8000/antecedentes/${antecedentes.id}/`, antecedentes);
}
export function postAntecedentes(antecedentes) {
    return axios.put(`http://127.0.0.1:8000/antecedentes/`, antecedentes);
}
export function deleteAntecedentes(antecedentes) {
    return axios.put(`http://127.0.0.1:8000/antecedentes/${antecedentes.id}/`, antecedentes);
}