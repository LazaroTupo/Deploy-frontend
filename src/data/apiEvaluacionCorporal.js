import axios from "axios";

export function getEvaluacionCorporal() {
    return axios.get('http://127.0.0.1:8000/evaluacionCorporal/');
}
export function getEvaluacionCorporalId(evaluacioncorporal) {
    return axios.get(`http://127.0.0.1:8000/evaluacionCorporal/${evaluacioncorporal}/`);
}
export function updateEvaluacionCorporal(evaluacioncorporal) {
    return axios.put(`http://127.0.0.1:8000/evaluacionCorporal/${evaluacioncorporal.id}/`, evaluacioncorporal);
}
export function postEvaluacionCorporal(evaluacioncorporal) {
    return axios.put(`http://127.0.0.1:8000/evaluacionCorporal/`, evaluacioncorporal);
}
export function deleteEvaluacionCorporal(evaluacioncorporal) {
    return axios.put(`http://127.0.0.1:8000/evaluacionCorporal/${evaluacioncorporal.id}/`, evaluacioncorporal);
}