import axios from "axios";

export function getDolorInfo() {
    return axios.get('http://127.0.0.1:8000/dolorInfo/');
}
export function getDolorInfoId(dolorinfo) {
    return axios.get(`http://127.0.0.1:8000/dolorInfo/${dolorinfo}/`);
}
export function updateDolorInfo(dolorinfo) {
    return axios.put(`http://127.0.0.1:8000/dolorInfo/${dolorinfo.id}/`, dolorinfo);
}
export function postDolorInfo(dolorinfo) {
    return axios.put(`http://127.0.0.1:8000/dolorInfo/`, dolorinfo);
}
export function deleteDolorInfo(dolorinfo) {
    return axios.put(`http://127.0.0.1:8000/dolorInfo/${dolorinfo.id}/`, dolorinfo);
}