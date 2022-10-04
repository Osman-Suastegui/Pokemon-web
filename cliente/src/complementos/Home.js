import React from "react";
import "../css/MenuLogin.css";
import volumen from '../img/volumen.png';
import { useEffect, useState } from 'react';
import musicaFondo from '../sfx/MusicaFondo.mp3';
import {
    Link,
} from "react-router-dom";

function Home() {

    //reproducir musicaFondo al iniciar la pagina
    const [play, setPlay] = useState(false);
    const [audio] = useState(new Audio(musicaFondo));

    useEffect(() => {
        if (play) {
            audio.play();
        } else {
            audio.pause();
        }
    }, [play]);

    const handleSonido = () => {
        setPlay(!play);
    };



    return (
        <div className="contenedor-home">
            <div className="contenedor-titulo">
                <h1 className="titulo"> UASMONS</h1>
            </div>
            <div className="contenedor-menu">
                <div className="contenedor-menu-login">
                    <div className="contenedor-botones">
                        <button className="boton-volumen" onClick={handleSonido}>
                            <img className="icono-volumen" src={volumen} width='60' height='60' />
                        </button>
                        <Link to="/login" className="boton-menu-login" > Iniciar Sesion</Link>
                        <Link to="/registrar" className="boton-menu-login" > Registrarse</Link>
                    </div>
                    <div className="contenedor-formularios">
                    </div>
                </div>
            </div>
        </div>


    );
}

export default Home;