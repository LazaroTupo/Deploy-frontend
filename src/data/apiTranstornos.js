import axios from "axios";

export function getTranstornos() {
    return axios.get('http://127.0.0.1:8000/trastornos/');
}
export function getTranstorno(trastornos) {
    return axios.get(`http://127.0.0.1:8000/trastornos/${trastornos}/`);
}
export function updateTranstornos(trastornos) {
    return axios.put(`http://127.0.0.1:8000/trastornos/${trastornos.id}/`, trastornos);
}
export function postTranstornos(trastornos) {
    return axios.put(`http://127.0.0.1:8000/trastornos/`, trastornos);
}
export function deleteTranstornos(trastornos) {
    return axios.put(`http://127.0.0.1:8000/trastornos/${trastornos.id}/`, trastornos);
}