import '../css/CombatirContraBot.css';
import React from 'react';
import Combate from './Combate.js';

import { useEffect, useState } from 'react'
import Pokemon from '../clases/Pokemon';
function CombatirBot() {

  const [entrenador, setEntrenador] = useState(JSON.parse(localStorage.getItem("entrenador")))
  const [bot, setBot] = useState([])
  const [pokemonEnUsoJugador,setPokemonEnUsoJugador] = useState(entrenador.equipo[0])
  const [pokemonContrincante,setPokemonContrincante] = useState()
  // const [pokemonJugador,setPokemonJugador] = useState()
  // const [pokemonBot,setPokemonBot] = useState()




  const obtenerEquipoBot = async () => {
    await fetch("http://localhost:3000/obtenerPokemones")
      .then(data => data.json())
      .then(pokemones => {
        generarEquipoBot(pokemones.map(pokemon => new Pokemon(pokemon.nombre,pokemon.tipo,pokemon.vida,pokemon.fuerza,pokemon.velocidad,pokemon.defensa,pokemon.img_frente,null)
        ))
      })
  }

  const generarEquipoBot = (todosLosPokemones) => {
    const n = todosLosPokemones.length
    const cantidadPokemones = 3
    let tmpMiEquipo = new Set()
    let index = 0

    while (index < cantidadPokemones) {
      let random = Math.floor(Math.random() * n)
      const poke = todosLosPokemones[random]
      if (tmpMiEquipo.has(poke)) continue
      tmpMiEquipo.add(poke)
      index++
    }
    setBot(Array.from(tmpMiEquipo))
    setPokemonContrincante(Array.from(tmpMiEquipo)[0])
  }

  useEffect(() => { 
    obtenerEquipoBot()
  }, [])

  return (
    <div className='Contenedor-Principal'>
      <Combate e1={entrenador} e2={bot}  pokemonEnUsoJugador={pokemonEnUsoJugador} pokemonContrincante={pokemonContrincante}/>  *Manda 2 arreglos, uno por cada equipo (links)
    </div>
  );
}

export default CombatirBot; 