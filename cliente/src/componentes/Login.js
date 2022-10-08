import React from "react";
import "../css/Login.css";
import {useNavigate} from 'react-router-dom'

function Login() {
  const navigate = useNavigate();
  const [usuario, setUsuario] = React.useState("");
  const [contrasena, setContrasena] = React.useState("");

  const handleUsuario = (e) => {
    setUsuario(e.target.value);
  };

  const handleContrasena = (e) => {
    setContrasena(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const Login = {
      nomusuario: usuario,
      contra: contrasena,
    };
    await fetch('http://localhost:3000/login', {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(Login)
    }).then(res => res.json())
      .then(user => {
        if(user.loggedIn){
          localStorage.setItem("loggedIn","true")
          localStorage.setItem("nombreUsuario",user.usuario)
          navigate("/menu-usuario")
        }else{
          alert("Usuario o contra invalidas")
        }

      });

    };

  return (
    <div className="contenedor-login">
      <div className="logo-repetido">
        <div className="contenedor-formulario">
          <h1 className="Titulo"><p>Inicio</p> <p>de</p> <p>sesion</p></h1>
          <form className="formulario-login" onSubmit={handleSubmit}>
            <input className="input-login" type="text" placeholder="Usuario" onChange={handleUsuario} />
            <input className="input-login" type="password" placeholder="Contraseña" onChange={handleContrasena} />
            <button className="boton-login" type="submit">
              INICIAR SESION
            </button>
          </form>
        </div>
      </div>
    </div>
    
  );
}

export default Login;