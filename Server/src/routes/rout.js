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

router.get('/obtenerUsuarios', async (req, res) => {
    try {
        const pool = await getconnection();
        const result = await pool.request().query("SELECT * FROM usuarios")
        res.send(result.recordset)

    } catch (error) {
        res.status(500)
        res.send(error.message)
    }

})

router.post("/existeUsuario", async (req, res) => {
    try {
        const { nomusuario } = req.body
        const pool = await getconnection();
        const usuarios = await pool.request().query("SELECT nomusuario FROM usuarios")
        const existeUsuario = {"existe": false}
        usuarios.recordset.map(usuario => {
            if (usuario.nomusuario == nomusuario) {
                existeUsuario.existe = true
            }
        })
        return res.status(200).send(existeUsuario)

    } catch (error) {
        res.status(500).send(error.message)
    }   
})

router.post("/login", async (req, res) => {

    try {
        const { nomusuario, contra } = req.body
        const logged = {
            loggedIn: false,
            usuario: nomusuario,
            mensaje: "usuario o contrasenia invalidas"

        }
        const pool = await getconnection();
        const usuarios = await pool.request().query("SELECT * FROM usuarios")
        usuarios.recordset.map(usuario => {
            if (usuario.contrasenia == contra && usuario.nomusuario == nomusuario) {
                logged.mensaje = "usuario o contrasenia validas"
                logged.loggedIn = true
            }
        })
        return res.status(200).send(logged)


    } catch (error) {
        res.status(500).send(error.message)
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
        res.send({ "mensaje": "usuario agregado" });
    } catch (error) {
        res.send(error.message)
    }

})
export default router