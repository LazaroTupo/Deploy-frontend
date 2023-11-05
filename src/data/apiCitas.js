import axios from "axios";

export function getCitas() {
    return axios.get('http://127.0.0.1:8000/cita/');
}
export function updateCitas(cita) {
    return axios.put(`http://127.0.0.1:8000/cita/${cita.id}/`, cita);
}
export function postCita(cita) {
    return axios.post(`http://127.0.0.1:8000/cita/`, cita);
}
export function deleteCitas(cita) {
    return axios.put(`http://127.0.0.1:8000/cita/${cita.id}/`, cita);
}