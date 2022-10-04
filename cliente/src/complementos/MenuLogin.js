import React from "react";
import "../css/MenuLogin.css";
import Register from "./Register";
import Login from "./Login.js";
import volumen from '../img/volumen.png';
import {useEffect,useState} from 'react';
import musicaFondo from '../sfx/MusicaFondo.mp3';

function MenuLogin(props) {

    //reproducir musicaFondo al iniciar la pagina
    const [play,setPlay] = useState(false);
    const [audio] = useState(new Audio(musicaFondo));

    useEffect(() => {
        if(play){
        audio.play();
        }else{
        audio.pause();
        }
    },[play]);

    const handleSonido = () => {
        setPlay(!play);
    };



    return (
            <div className="contenedor-menu-login">
                <div className="contenedor-botones">
                    <button className="boton-volumen" onClick={handleSonido}> 
                        <img className="icono-volumen" src={volumen} width='60' height='60'/>
                    </button>
                    <button className="boton-menu-login" > Iniciar Sesion</button>
                    <button className="boton-menu-login" > Registrarse</button>
                </div>
                <div className="contenedor-formularios">

                </div>
            </div>

    );
}

export default MenuLogin;