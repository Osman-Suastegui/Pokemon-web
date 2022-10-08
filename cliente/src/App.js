import './App.css';
import Home from './componentes/Home.js';
import Login from './componentes/Login';
import MenuUsuario from './componentes/Menu.js';
import Registrar from './componentes/Register';
import UaxDex from './componentes/UasDex.js';
import Ranking from './componentes/Ranking.js';
import Perfil from './componentes/Perfil.js';
import SaladeCola from './componentes/SaladeCola.js';
import {useEffect } from 'react'
import {
  Route, Routes,useNavigate
} from "react-router-dom";

function App() {  
  const navigate = useNavigate()

  useEffect(()=>{
    const estalogeado = localStorage.getItem("loggedIn") 
    if(estalogeado && window.location.pathname === '/'){
      navigate("/menu-usuario")
    }

    if(estalogeado == null ) navigate("/")

  },[localStorage.getItem("loggedIn")])

  return (
    <div className="App">
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/login" element={<Login />} />
            <Route path="/registrar" element={<Registrar />} />
            <Route path="/menu-usuario" element={<MenuUsuario />} />
            <Route path="/uasdex" element={<UaxDex/>} />
            <Route path="/ranking" element={<Ranking/>} />
            <Route path="/perfil" element={<Perfil/>} />
            <Route path="/saladecola" element={<SaladeCola />} />


        </Routes>
    </div>
  );

}

export default App;
