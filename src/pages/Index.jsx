import { useEffect, useState } from "react";

import DaysCarousel from "../components/DaysCarousel";
import Cita from "../components/Cita";

import { compareDates, getWeek } from "../helpers/helpers";
import { getCitas } from "../data/apiCitas";

import AddIcon from "../img/svg/add-circle-svgrepo-com.svg"

import "../css/home.css"
import ModalCita from "../components/ModalCita";

export default function Index() {

    const [date, setDate] = useState(new Date());
    const [dates, setDates] = useState(getWeek(date));
    const [citas, setCitas] = useState([]);
    const [citasShow, setCitasShow] = useState([]);
    const [modal, setModal] = useState(false);

    useEffect(()=>{
        const loader = async () => {
            const data = (await getCitas()).data;
            setCitas(data);
        }
        loader();
    }, []);

    const handleDateClick= (newDateClick)=>{
        setDate(newDateClick);
    }

    useEffect(()=>{
        setCitasShow(citas.filter((cita) => compareDates(date, new Date(cita.inicio))))

    },[date,citas])

    return (
        <div className="page">
            <div className="p-1">
                <h2 className="fecha">{`${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`}</h2>
                <h1>Luis La Torre</h1>
            </div>
            <DaysCarousel dates={dates} date={date} handleDateClick={handleDateClick} />
            <div className="icon-add p-1">
                <button onClick={()=>setModal(true)}><img src={AddIcon} alt="" width={40}/></button>
            </div>
        
            <ul className="px-2 overflow-scroll pb-1">
                {citasShow.length!==0 ? citasShow.map((c) => {
                    return <Cita key={c.id} cita={c}/>
                }) : <p>No hay citas programadas para el {`${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`}.</p>}              
            </ul>
            {modal && <ModalCita setterClose={setModal}/>}
        </div>
    );
}