import React from "react";
import "../css/Login.css";

function Login(props) {
  return (
    <div className="contenedor-login">
      <div className="contenedor-formulario">
        <form className="formulario-login">
          <input
            className="input-login"
            type="text"
            placeholder="Usuario"
          />
          <input
            className="input-login"
            type="password"
            placeholder="Contraseña"
          />
          <button className="boton-login" type="submit">
            INICIAR SESION
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;