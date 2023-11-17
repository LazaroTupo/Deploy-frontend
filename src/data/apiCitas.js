import axios from "axios";

export function getCitas() {
    return axios.get('https://web-production-97cf.up.railway.app/cita/');
}
export function updateCitas(cita) {
    return axios.put(`https://web-production-97cf.up.railway.app/cita/${cita.id}/`, cita);
}
export function postCita(cita) {
    return axios.post(`https://web-production-97cf.up.railway.app/cita/`, cita);
}
export function deleteCitas(cita) {
    return axios.delete(`https://web-production-97cf.up.railway.app/cita/${cita.id}/`, cita);
}