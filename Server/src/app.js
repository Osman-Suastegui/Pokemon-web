import express from 'express';
import router from './routes/rout.js'
import cors from "cors";
const app = express()

import http from 'http';
const server = http.createServer(app);
import { Server } from "socket.io"
const io = new Server(server,{
        cors: {
            origin: '*',
           
          }
    }    
    );

app.use(cors())
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(router)

let users = 0;
io.on('connection', (socket) => { 

    socket.on("usuarioencola",()=>{
        users++;
        const salaDeBatalla = Math.round(users / 2 ) 
        socket.join(salaDeBatalla)
        socket.emit("asignarSaladeBatalla",salaDeBatalla)
        const jugadores = io.sockets.adapter.rooms.get(salaDeBatalla).size
        socket.on("comenzarPelea", SALA =>{
            io.to(SALA).emit("verificarPelea",jugadores)
        })
    })  

    socket.on("btnPress",(sala) =>{
        io.to(sala).emit("cambiarBtnColor")
    })
        
})


server.listen(3000);
console.log("servidor en puerto ",3000 );
export default app