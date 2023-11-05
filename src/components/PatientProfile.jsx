import logo_p from "../img/logo paciente.png";
export default function PatientProfile({paciente}) {
    return (
        
        <div className="">
            <div className={`bg-${paciente.genero==='M'?'soft-blue':'soft-green'} perfil-data`}>
                <img className="foto_perfil " src={logo_p} alt="Perfil"  />
                <div>
                    <p className="nombre-paciente"> {paciente.nombre} </p>
                    <p className="apellido-paciente"> {paciente.apellido} </p>
                    <p className="dni"> {paciente.dni} </p>
                </div>
            </div>
        </div>
    );
}