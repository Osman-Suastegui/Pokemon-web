import '../css/ranking.css';
import { obtenerRanking } from '../api/pokemon.api.js'
import { useEffect, useState } from 'react'

function Ranking() {
    const [ranking, setRanking] = useState([])
    useEffect(() => {
        const obtRanking = async () => {
            const response = await obtenerRanking()
            const ranking = await response.json()
            setRanking(ranking)    
        }
        obtRanking()
    }, [])

    return (
        <div className='Contenedor-principal'>
            <div className='repetir-logo'>
                <div className='Titulo-Ranking'>
                    <h1>Ranking</h1>
                </div>
                <div className='contenedor-Tabla'>
                    <div className='Tabla-Ranking'>
                        <table>
                            {
                                ranking.map((usuario, index) => (
                                    <tr>
                                        <th>{index + 1} </th>
                                        <th>{usuario.nomusuario} </th>
                                        <th>{usuario.puntaje} </th>

                                    </tr>
                                ))
                            }
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Ranking; 