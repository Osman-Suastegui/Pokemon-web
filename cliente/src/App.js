import './App.css';
import Home from './componentes/Home.js';
import Login from './componentes/Login';
import MenuUsuario from './componentes/Menu.js';
import Registrar from './componentes/Register';

import {useEffect } from 'react'
import {
  Route, Routes,useNavigate
} from "react-router-dom";

function App() {  
  const navigate = useNavigate()

  useEffect(()=>{
    if(localStorage.getItem("loggedIn")){
      navigate("/menu-usuario")
    }else{
      navigate("/")
    }
  },[])
  return (
    <div className="App">
        <Routes>
            <Route path="/" element={ <Home/>} />
            <Route path="/login" element={<Login />} />
            <Route path="/registrar" element={<Registrar />} />
            <Route path="/menu-usuario" element={<MenuUsuario />} />
        </Routes>
    </div>
  );

}

export default App;
