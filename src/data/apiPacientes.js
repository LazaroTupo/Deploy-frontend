import axios from "axios";

export function getPacientes() {
    return axios.get('https://web-production-97cf.up.railway.app/paciente/');
}
export function getPaciente(paciente) {
    return axios.get(`https://web-production-97cf.up.railway.app/paciente/${paciente}/`);
}
export function updatePaciente(paciente) {
    return axios.put(`https://web-production-97cf.up.railway.app/paciente/${paciente.dni}/`, paciente);
}
export function postPaciente(paciente) {
    return axios.post(`https://web-production-97cf.up.railway.app/paciente/`, paciente);
}
export function deletePaciente(paciente) {
    return axios.delete(`https://web-production-97cf.up.railway.app/paciente/${paciente.dni}/`);
}