import axios from "axios";

export function getTerapistas() {
    return axios.get('http://127.0.0.1:8000/terapista/');
}
export function updateTerapistas(terapista) {
    return axios.put(`http://127.0.0.1:8000/terapista/${terapista.dni}/`, terapista);
}
export function postTerapistas(terapista) {
    return axios.put(`http://127.0.0.1:8000/terapista/`, terapista);
}
export function deleteTerapistas(terapista) {
    return axios.put(`http://127.0.0.1:8000/terapista/${terapista.dni}/`, terapista);
}