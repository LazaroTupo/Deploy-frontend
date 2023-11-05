import { useNavigate } from "react-router-dom";

import InputField from "../components/InputField";
import Logo from "../img/logo_SGP.jpg";
import Button from "../components/Button";

import "../css/stylelogin.css";

export default function Login() {
    
    const navigator = useNavigate();

    return (

        <div className="login-page page">
            <div className="login_box">
                <div className="center">
                    <img className="logo" src={Logo}  alt="Logo de SGP" sizes=""/>
                </div>
                <h1>Iniciar Sesión</h1>
                <form>
                    <div className="center">
                        <InputField placeholder={"Correo Electrónico"} type={"email"}/>                    
                        <InputField type="password" placeholder="Contraseña"/>
                    </div>
                    <Button type={"submit"} color={"blue"}
                    onClick={(e)=>{
                        e.preventDefault();
                        navigator('/');
                    }}>
                        Iniciar sesión
                    </Button>
                </form>
            </div>  
        </div>
    );
}