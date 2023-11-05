import { useEffect, useState } from "react";

import Button from "../components/Button";
import  "../css/styylepacientes.css";
import InputField from "../components/InputField";
import PatientProfile from "../components/PatientProfile";
import Card from "../components/Card";
import Modal from "../components/Modal";

import {getPacientes} from '../data/apiPacientes';

export default function Pacientes(){
    const [pacientes, setPacientes] = useState([]);
    const [pacienteShow, setPacienteShow] = useState({});
    const [modal, setModal] = useState(false);
    const [modalCreate, setModalCreate] = useState(false);

    useEffect(()=>{
        const loader = async () => {
            const data = (await getPacientes()).data
            setPacientes(data);
            if (data.length!=0) {
                setPacienteShow(data[0]);
            }
        }
        loader();        
    }, []);

    return(
        <div className="page">
            <div className="pacientes-buscador">
                <div className="flex-2">
                    <InputField placeholder={"Ingrese un nombre"} type={"text"}/>  
                </div>
                <div className="flex-1">
                    <Button type={"button"} color={"blue"} onClick={()=>setModalCreate(true)} >
                        Agregar
                    </Button>
                </div>
            </div>
            <div className="flex h-full p-2 gap-2">
                <ul className="col-1/2 overflow-scroll">
                    {
                        pacientes.length != 0 &&
                        pacientes.map((paciente) => {
                            return <li key={paciente.dni} onClick={()=>{setPacienteShow(paciente)}}
                            ><PatientProfile color={'soft-blue'} paciente={paciente}/></li>
                        })
                    }
                </ul>
                <div className="col-1/2">
                    {pacientes.length!=0 && <Card paciente={pacienteShow} modalSetter={setModal}/>}                    
                </div>
            </div>      
            {modal && <Modal paciente={pacienteShow} setterPaciente={setPacienteShow} setterClose={setModal}/>}          
        </div>
    );
} 