import '../css/Combate.css';
import InfoPoke from './PlayerHUD.js'; //CUADRO GRIS CON DATOS DE LOS JUGADORES
import MiEquipo from './MiEquipo.js';

import { useState } from 'react';
import { useEffect } from 'react';

function Combate({ setPokemonContrincante, pokemonContrincante, pokemonEnUsoJugador, jugador, contrincante, habilidadContrincante, setPokemonEnUsoJugador,setHabilidadContrincante }) {

    const [habilidad, setHabilidad] = useState(null)
    const [btnBloqueado,setBtnBloqueado] = useState(false)
    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    const atacar = () => {
        setPokemonContrincante(poke => ({
            ...poke,
            vida: poke.vida - pokemonEnUsoJugador.fuerza
        }))
    }
    const atacarImprobable = () => {

        let numRandom = Math.floor(Math.random() * 10)
        const numeros = [4, 7, 9]
        if (numeros.includes(numRandom)) {
            setPokemonContrincante(poke => ({
                ...poke,
                vida: poke.vida - pokemonEnUsoJugador.fuerza
            }))
        }
    }
   
    const lanzarAtaques = () => {
        setBtnBloqueado(true)

        if (pokemonEnUsoJugador.velocidad > pokemonContrincante.velocidad) {
            if (habilidad == "atacar") atacar()
            if (habilidad == "atacarImprobable") atacarImprobable()
            // if(habilidad == "defenderse") defenderse()

            sleep(2000).then(() => {
                if (habilidadContrincante === "atacar") {
                    setPokemonEnUsoJugador(poke => ({
                        ...poke,
                        vida: poke.vida - pokemonContrincante.ataque
                    }))
                }
                setBtnBloqueado(false)

            })
        }

    }

    useEffect(() => {

        if (habilidad != null && habilidadContrincante != null) {
            lanzarAtaques()
            setHabilidad(null)
            // setHabilidadContrincante(null)

        }
    }, [habilidad, habilidadContrincante])
    return (
        <div className='Contenedor-Principal'>
            <div className='Contenedor-Combate'>
                <div className='Contenedor-Info'>
                    <InfoPoke miPoke={pokemonContrincante} />
                    <InfoPoke miPoke={pokemonEnUsoJugador} />
                </div>

                <div className='Pokemons'>/
                    <MiEquipo equipos={contrincante.equipo} />
                    <MiEquipo equipos={jugador.equipo} />
                </div>

                <div className='Habilidades'>
                    <button disabled={btnBloqueado ? true : false} name='atacar' onClick={(e) => setHabilidad(e.target.name)} className='Boton-Habilidad'>Atacar seguro</button>
                    <button disabled={btnBloqueado ? true : false}  name="atacarImprobable" onClick={(e) => setHabilidad(e.target.name)} className='Boton-Habilidad'>Atacar improbable pero mas danio</button>
                    <button disabled={btnBloqueado ? true : false}  name='defenderse' className='Boton-Habilidad'>Defensa</button>

                </div>
            </div>
        </div>
    );
}

export default Combate; 