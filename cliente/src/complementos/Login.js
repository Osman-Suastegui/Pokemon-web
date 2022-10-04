import React from "react";
import "../css/Login.css";


function Login() {

    const [usuario, setUsuario] = React.useState("");
    const [contrasena, setContrasena] = React.useState("");

    const handleUsuario = (e) => {
        setUsuario(e.target.value);
    };

    const handleContrasena = (e) => {
        setContrasena(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const Login = {
            usuario: usuario,
            contrasena: contrasena,
        };
        console.log(Login);
    };

  return (
    <div className="contenedor-login">
      <div className="contenedor-formulario">
        <h1>Inicio de sesion</h1>
        <form className="formulario-login" onSubmit={handleSubmit}>
          <input className="input-login" type="text" placeholder="Usuario" onChange={handleUsuario}/>
          <input className="input-login" type="password" placeholder="Contraseña" onChange={handleContrasena}/>
          <button className="boton-login" type="submit">
            INICIAR SESION
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;