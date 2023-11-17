import axios from "axios";

export function getTerapistas() {
    return axios.get('https://web-production-97cf.up.railway.app/terapista/');
}
export function updateTerapistas(terapista) {
    return axios.put(`https://web-production-97cf.up.railway.app/terapista/${terapista.dni}/`, terapista);
}
export function postTerapistas(terapista) {
    return axios.post(`https://web-production-97cf.up.railway.app/terapista/`, terapista);
}
export function deleteTerapistas(terapista) {
    return axios.delete(`https://web-production-97cf.up.railway.app/terapista/${terapista.dni}/`);
}