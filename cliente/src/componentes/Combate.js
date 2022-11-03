import '../css/Combate.css';
import InfoPoke from './PlayerHUD.js'; //CUADRO GRIS CON DATOS DE LOS JUGADORES
import MiEquipo from './MiEquipo.js';


function Combate(entrenadores) {
   
    return (    
        <div className='Contenedor-Principal'>
            <div className='Contenedor-Combate'>

                <div className='Contenedor-Info'>
                    <InfoPoke miPoke = {entrenadores.pokemonContrincante} />
                    <InfoPoke miPoke = {entrenadores.pokemonEnUsoJugador}/>                           
                </div>

                <div className='Pokemons'>
                    <MiEquipo equipos={entrenadores.e2} /> {/*equipo del bot o del otro jugador */}
                    <MiEquipo equipos={entrenadores.e1.equipo} /> {/*equipo del usuario */}
                </div>  
                    
                <div className='Habilidades'>
                    <button className='Boton-Habilidad'>Atacar seguro</button>
                    <button className='Boton-Habilidad'>Atacar improbable pero mas danio</button>
                    <button className='Boton-Habilidad'>Defensa</button>
                </div>
            </div>
        </div>
    );
}

export default Combate; 