import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

import BatallaMulti from './BatallaMulti.js';
const socket = io("http://localhost:3000");

function SaladeCola() {
    const [sala,setSalaDeBatalla] = useState()
    const [batallaLista,setBatallaLista] = useState(false)

    useEffect(()=>{
        socket.emit("usuarioencola")
    },[])   
    
    socket.on("asignarSaladeBatalla",salaDeBatalla =>{
        setSalaDeBatalla(salaDeBatalla)
        setBatallaLista(true)
    })
    
    if(window.location.pathname == '/saladecola'){
        window.onpopstate = () => socket.emit("salirDeSala",{"sala":sala,"nombreUsuario":localStorage.getItem("nombreUsuario")})
    }    
 
    return (
        <div >
            {batallaLista ? <BatallaMulti socket={socket} sala={sala} /> : <div>estas en la sala de cola</div> }
        </div>
    );
}

export default SaladeCola;