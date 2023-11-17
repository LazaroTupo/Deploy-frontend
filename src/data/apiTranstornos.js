import axios from "axios";

export function getTranstornos() {
    return axios.get('https://web-production-97cf.up.railway.app/trastornos/');
}
export function getTranstorno(trastornos) {
    return axios.get(`https://web-production-97cf.up.railway.app/trastornos/${trastornos}/`);
}
export function updateTranstornos(trastornos) {
    return axios.put(`https://web-production-97cf.up.railway.app/trastornos/${trastornos.id}/`, trastornos);
}
export function postTranstornos(trastornos) {
    return axios.post(`https://web-production-97cf.up.railway.app/trastornos/`, trastornos);
}
export function deleteTranstornos(trastornos) {
    return axios.delete(`https://web-production-97cf.up.railway.app/trastornos/${trastornos.id}/`);
}