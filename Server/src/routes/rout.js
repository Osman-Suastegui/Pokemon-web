import { Router } from 'express'
import { getconnection, sql } from '../database/conexion.js'
const router = Router()

router.get('/obtenerCuentas', async (req, res) => {
    try {
        const pool = await getconnection();
        const result = await pool.request().query("SELECT * FROM cuentas")  
        res.json(result.recordset)
        
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
            .query('INSERT INTO cuentas (nomusuario,email,contrasenia) VALUES(@nomusuario,@email,@contrasenia)')
        res.json("cuenta agregada");
    } catch (error) {
        console.log(error.message)
    }

})
export default router