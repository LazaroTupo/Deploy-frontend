import axios from "axios";

export function getPacientes() {
    return axios.get('http://127.0.0.1:8000/paciente/');
}
export function getPaciente(paciente) {
    return axios.get(`http://127.0.0.1:8000/paciente/${paciente}`);
}
export function updatePaciente(paciente) {
    return axios.put(`http://127.0.0.1:8000/paciente/${paciente.dni}/`, paciente);
}
export function postPaciente(paciente) {
    return axios.post(`http://127.0.0.1:8000/paciente/`, paciente);
}
export function deletePaciente(paciente) {
    return axios.delete(`http://127.0.0.1:8000/paciente/${paciente.dni}/`, paciente);
}