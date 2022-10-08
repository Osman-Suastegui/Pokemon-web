import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

import BatallaMulti from './BatallaMulti.js';
const socket = io("http://localhost:3000");
function SaladeCola() {
    const [sala,setSalaDeBatalla] = useState()
    const [batallaLista,setBatallaLista] = useState(false)
    useEffect(()=>{
        socket.emit("usuarioencola")
        socket.on("asignarSaladeBatalla",salaDeBatalla =>{
            setSalaDeBatalla(salaDeBatalla)
        })
    },[])        
    socket.emit("comenzarPelea",sala)    
    socket.on("verificarPelea",jugadores =>{
        if(jugadores == 2){
            setBatallaLista(true)
        }
    })
 
    return (
        <div >
            {batallaLista ? <BatallaMulti socket={socket} sala={sala} /> : <div>estas en la sala de cola</div> }
        </div>
    );
}

export default SaladeCola;