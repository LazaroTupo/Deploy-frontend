import { useState } from "react";

import { useNavigate } from "react-router-dom";

import InputField from "../components/InputField";
import Logo from "../img/logo_SGP.jpg";
import Button from "../components/Button";

import {login} from '../helpers/helpers'

import "../css/stylelogin.css";

export default function Login() {
    
    const navigator = useNavigate();
    const [user, setUser] = useState('');
    const [pass, setPass] = useState('');

    return (

        <div className="login-page page">
            <div className="login_box">
                <div className="center">
                    <img className="logo" src={Logo}  alt="Logo de SGP" sizes=""/>
                </div>
                <h1>Iniciar Sesión</h1>
                <form>
                    <div className="center">
                    <input type={'text'} placeholder={'Username'}
                    className="input-field shadow-sm" value={user} onChange={(e) => setUser(e.target.value)}/>
                    <input type={'password'} placeholder={'Password'}
                    className="input-field shadow-sm" value={pass} onChange={(e) => setPass(e.target.value)}/>
                    </div>
                    <Button type={"submit"} color={"blue"}
                    onClick={(e)=>{
                        e.preventDefault();
                        if (login(user, pass)) {
                            navigator('/sgp');
                        } else {
                            alert('Credenciales incorrectas')
                            setUser('');
                            setPass('');
                        }
                    }}>
                        Iniciar sesión
                    </Button>
                </form>
            </div>  
        </div>
    );
}