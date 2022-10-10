import { useState} from "react";

function Chat({sala,socket}) {

    const [mensaje,setMensaje] = useState("")
    const [contenidoChat,setContenidoChat] = useState([])

    const handleMensaje = (e) =>{
        setMensaje(e.target.value)
    }
    const enviarMensaje = (e) =>{
        e.preventDefault()
        console.log(mensaje)
        const miMensaje = {"usuario":localStorage.getItem("nombreUsuario") ,"mensaje":mensaje,"sala":sala}
        socket.emit("mensaje",miMensaje)
    }
    socket.on("mimensaje",(msg)=>{
        let contMensaje = { 
            "usuario" : msg.usuario,
            "mensaje" : msg.mensaje
        }
        setContenidoChat([...contenidoChat,contMensaje])
    })
    return (
        <div>
            afgasgasgasgasgasg
            <div className="mi-chat">{
                contenidoChat.map(msg =>(
                    <div key={msg.key}> {msg.usuario + ": "+ msg.mensaje} </div>
                ))
            }</div>
            <form action="" onSubmit={enviarMensaje}>

            <input type="text" onChange={handleMensaje} />
            <button  type="submit">
              Enviar mensaje
            </button>
            </form>
        </div>
    );
}

export default Chat;