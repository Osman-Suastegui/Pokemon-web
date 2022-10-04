import { Router } from 'express'
import { getconnection, sql } from '../database/conexion.js'
const router = Router()

router.get('/obtenerPokemones', async (req, res) => {
    try {
        const pool = await getconnection();
        const result = await pool.request().query("SELECT * FROM pokemones")
        

        res.send(result.recordset)
        
    } catch (error) {
        res.send(error.message)
    }
})

router.get('/obtenerUsuarios',  async (req, res) => {
    try {
        const pool = await getconnection();
        const result = await pool.request().query("SELECT * FROM usuarios")  
        res.send(result.recordset)
        
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }

})

router.post("/login",async (req,res) =>{
    
    try {
        const {nomusuario,contra } = req.body
      
        const pool = await getconnection();
        const usuarios = await pool.request().query("SELECT * FROM usuarios")
        usuarios.recordset.map(usuario => {
            if(usuario.contrasenia == contra && usuario.nomusuario == nomusuario ){
                res.send({loggedIn:true,usuario:nomusuario})
            }     
        })
        res.send({
            loggedIn:false,
            mensaje:"usuario o contrasenia invalidas"
        })


    } catch (error) {
        res.send(error.message)
    }
})
router.post('/registrarse', async (req, res) => {

    try {
        const { nomUsuario, email, contra } = req.body;
        const pool = await getconnection();
        await pool.request()
            .input("nomusuario", sql.VarChar, nomUsuario)
            .input("email", sql.VarChar, email)
            .input("contrasenia", sql.VarChar, contra)
            .query('INSERT INTO usuarios (nomusuario,email,contrasenia) VALUES(@nomusuario,@email,@contrasenia)')
        res.send("usuario agregado");
    } catch (error) {
        res.send(error.message)
    }

})
export default router