import React, { useState, useEffect } from 'react';
import Chat from './Chat.js'
function BatallaMulti({sala,socket}) {
    const [color, setColor] = useState("yellow")
    socket.on("cambiarBtnColor",()=>{
        if(color == 'yellow') {
            setColor('red')
        }
        else {
            setColor('yellow')
        }
    })
    const cambiarColor = () => {
        socket.emit("btnPress",sala)
    }
    return (
        <div>
            <button style={{background : color}} onClick={cambiarColor}>cambiar color (switch)</button>
            <Chat sala={sala} socket={socket}/>
        </div>
    );
}

export default BatallaMulti;