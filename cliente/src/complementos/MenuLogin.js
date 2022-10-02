import React from "react";
import "../css/MenuLogin.css";

function MenuLogin(props) {
    return (
        <div className="contenedor-menu-login">
            <div className="contenedor-botones">
                <button className="boton-menu-login">Iniciar Sesion</button>
                <button className="boton-menu-login">Registrarse</button>
            </div>
        </div>
    );
}

export default MenuLogin;