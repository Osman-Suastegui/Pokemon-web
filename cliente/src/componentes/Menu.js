import react from 'react';
import  "../css/Menu.css"
import {useNavigate} from 'react-router-dom'
function Menu() {
    const navigate = useNavigate()
    const cerrarSesion = (e) =>{
        e.preventDefault()
        localStorage.setItem("loggedIn",false)
        localStorage.removeItem("nombreUsuario")
        navigate("/")
    }
    return (
        <div className="Contenedor-Menu">
            <div className="Logo-repetido">
                <div className="Contenedor-Botones">
                    <button className="Boton-Menu">Combatir</button>
                    <button className="Boton-Menu">Ver Ranking</button>
                    <button className="Boton-Menu">Crear Equipo</button>
                    <button className="Boton-Menu">Ver Perfil</button>
                    <button onClick={cerrarSesion} className="Boton-Menu">Cerrar Sesion</button>
                    <button className="Boton-Menu">UasDex</button>
                </div>
            </div>
        </div>
    );
}

export default Menu;