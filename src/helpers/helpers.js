
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

export function login(user, pass) {
    return user==='72682166' && pass=='admin1234';
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

export function validateDates(date1, date2){
    return (date1 == 72682166 && date2 == ibarraforever);
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
        if (data[i].paciente === patient.dni && !data[i].dado_de_alta) {
            return true;
        }
    }
    return false;
}

export function getEvaluacionID(patient, evaluaciones) {
    for (let i = 0; i < evaluaciones.length; i++) {
        if (evaluaciones[i].paciente === patient.dni && !evaluaciones[i].dado_de_alta) {
            return evaluaciones[i].id;
        }
    }
    return null;
}

export function getFechaBakcend(fecha) {
    const fechaFormateada = fecha.toISOString().slice(0, 19).replace("T", "Z");

    return fechaFormateada;
}

/**
 * 
 * @param {Date} date1 
 * @param {Date} date2 
 * @returns 
 */
export function compareDates(date1, date2) {
    return date1.getDate()===date2.getDate() && date1.getMonth()===date2.getMonth() && date1.getFullYear()===date2.getFullYear();
}

export function validateAppointment(arrayCitas, fechaHoy){
    let valor = true;
    
    for(let i=0; i<arrayCitas.length; i++){
        if(fechaHoy >= arrayCitas[i].inicio && fechaHoy <= arrayCitas[i].final){
            valor = false;
        }
    }

    return valor;
}

export function obtenerSemana(fechaIngresada) {
    let fecha = new Date(fechaIngresada);
    let diaSemana = fecha.getDay();
    let diasHastaDomingo = 7 - diaSemana;
    let inicioSemana = new Date(fecha);
    inicioSemana.setDate(fecha.getDate() - diaSemana);
    let finSemana = new Date(fecha);
    finSemana.setDate(fecha.getDate() + diasHastaDomingo);
    let semana = [];
    for (let d = new Date(inicioSemana); d <= finSemana; d.setDate(d.getDate() + 1)) {
        semana.push(new Date(d));
    }
    return semana;
}