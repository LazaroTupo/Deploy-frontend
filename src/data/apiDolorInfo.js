import axios from "axios";

export function getDolorInfo() {
    return axios.get('https://web-production-97cf.up.railway.app/dolorInfo/');
}
export function getDolorInfoId(dolorinfo) {
    return axios.get(`https://web-production-97cf.up.railway.app/dolorInfo/${dolorinfo}/`);
}
export function updateDolorInfo(dolorinfo) {
    return axios.put(`https://web-production-97cf.up.railway.app/dolorInfo/${dolorinfo.id}/`, dolorinfo);
}
export function postDolorInfo(dolorinfo) {
    return axios.post(`https://web-production-97cf.up.railway.app/dolorInfo/`, dolorinfo);
}
export function deleteDolorInfo(dolorinfo) {
    return axios.delete(`https://web-production-97cf.up.railway.app/dolorInfo/${dolorinfo.id}/`);
}