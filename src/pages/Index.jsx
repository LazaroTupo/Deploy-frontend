import { useEffect, useState } from "react";

import DaysCarousel from "../components/DaysCarousel";
import Cita from "../components/Cita";

import { getWeek } from "../helpers/helpers";
import { getCitas } from "../data/apiCitas";

import AddIcon from "../img/svg/add-circle-svgrepo-com.svg"

import "../css/home.css"
import ModalCita from "../components/ModalCita";

export default function Index() {

    const [date, useDate] = useState(new Date());
    const [dates, setDates] = useState(getWeek(date));
    const [citas, setCitas] = useState([]);
    const [modal, setModal] = useState(false);

    useEffect(()=>{
        const loader = async () => {
            const data = (await getCitas()).data;
            setCitas(data);
        }
        loader();
    }, []);

    return (
        <div className="page">
            <div className="px-2">
                <h2 className="fecha">{`${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`}</h2>
                <h1>Luis La Torre</h1>
            </div>
            <DaysCarousel dates={dates}/>
            <div className="icon-add px-2">
                <button onClick={()=>setModal(true)}><img src={AddIcon} alt="" width={40}/></button>
            </div>
            <div className="p-2 overflow-scroll h-full">
                {/* citas */}
                {citas.map((c) => {
                    return <Cita key={c.id} cita={c}/>
                })}
            </div>
            {modal && <ModalCita setterClose={setModal}/>}
        </div>
    );
}