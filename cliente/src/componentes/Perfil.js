
import {useState,useEffect} from 'react'

function Perfil() {

    const [perfilUsuario,setPerfilUsuario] = useState({})
    useEffect(()=>{
        const nombreUsuario = localStorage.getItem("nombreUsuario")
        fetch('http://localhost:3000/obtenerPerfil', {
            method: 'POST',
            headers: {
              'Accept': 'application/json, text/plain, */*',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({"nomUsuario":nombreUsuario})
          }).then(datosUsuario => datosUsuario.json())
            .then(usuario => {                
                setPerfilUsuario(usuario)
            })
      
        console.log(perfilUsuario)
    },[])
    return (
        <div>
            <h2>Esta es tu perfil y tu nombre es {perfilUsuario.nomusuario}</h2>
            <h2>Esta es tu perfil y tu email es {perfilUsuario.email}</h2>            
            <h2>Esta es tu perfil y tu contra es {perfilUsuario.contrasenia}</h2>
            
        </div>
    );
}

export default Perfil;