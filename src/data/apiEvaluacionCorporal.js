import axios from "axios";

export function getEvaluacionCorporal() {
    return axios.get('https://web-production-97cf.up.railway.app/evaluacionCorporal/');
}
export function getEvaluacionCorporalId(evaluacioncorporal) {
    return axios.get(`https://web-production-97cf.up.railway.app/evaluacionCorporal/${evaluacioncorporal}/`);
}
export function updateEvaluacionCorporal(evaluacioncorporal) {
    return axios.put(`https://web-production-97cf.up.railway.app/evaluacionCorporal/${evaluacioncorporal.id}/`, evaluacioncorporal);
}
export function postEvaluacionCorporal(evaluacioncorporal) {
    return axios.post(`https://web-production-97cf.up.railway.app/evaluacionCorporal/`, evaluacioncorporal);
}
export function deleteEvaluacionCorporal(evaluacioncorporal) {
    return axios.delete(`https://web-production-97cf.up.railway.app/evaluacionCorporal/${evaluacioncorporal.id}/`);
}