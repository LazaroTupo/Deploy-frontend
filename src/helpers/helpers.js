import { getEvaluaciones } from "../data/apiEvaluaciones";

export function getAge(str) {
    const date = new Date(str);
    const actualDate = new Date();
    const difference = actualDate - date;
    const age = Math.floor(difference / (1000 * 60 * 60 * 24 * 365.25));
    return age;
}


/**
 * Returns a week of days considering the given parameter as the day in the middle
 * @param {Date} date Date in the middle
 * @returns 
 */
export function getWeek(date) {
    let week = [];
    let aux;
    for (let i = -3; i <= 3; i++) {        
        aux = new Date(date);
        aux.setDate(date.getDate() + i);
        week.push(aux);
    }
    return week;
}

export function getWeekDay(day) {
    switch (day) {
        case 0: return 'domingo';
        case 1: return 'lunes';
        case 2: return 'martes';
        case 3: return 'miercoles';
        case 4: return 'jueves';
        case 5: return 'viernes';
        case 6: return 'sabado';
        default: return ''; 
    }
}

export function equalsDates(date1, date2) {
    return (
        date1.getFullYear() === date2.getFullYear() &&
        date1.getMonth() === date2.getMonth() &&
        date1.getDate() === date2.getDate()
    );
}

export function formatDate(date) {
    return `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;
}


/**
 * 
 * @param {Date} date date to format
 * @returns formated date
 */
export function formatTime(date) {
    return `${date.getHours()}:${date.getMinutes()}`;
}

export function hasEvaluation(patient, data) {
    for (let i = 0; i < data.length; i++) {
        if (data[i].paciente === patient.dni) {
            return true;
        }
    }
    return false;
}

export function getEvaluacionID(patient, evaluaciones) {
    for (let i = 0; i < evaluaciones.length; i++) {
        if (evaluaciones[i].paciente === patient.dni) {
            return evaluaciones[i].id;
        }
    }
    return null;
}

export function getFechaBakcend(fecha) {
    const year = fecha.getFullYear();
    const mes = (fecha.getMonth() + 1).toString().padStart(2, '0'); 
    const dia = fecha.getDate().toString().padStart(2, '0'); 
    const horas = fecha.getHours().toString().padStart(2, '0'); 
    const minutos = fecha.getMinutes().toString().padStart(2, '0'); 
    const segundos = fecha.getSeconds().toString().padStart(2, '0');

    return `${year}-${mes}-${dia}T${horas}:${minutos}:${segundos}Z`;
}