import '../css/ranking.css';

import { useEffect, useState } from 'react'

function getRank() {
    var rank = document.getElementsByClassName("rank")[0].innerHTML;
    return rank;
}

function Ranking() {
    const [ranking, setRanking] = useState([])
    useEffect(() => {
        console.log("&sfas")
        fetch("http://localhost:3000/obtenerRanking")
            .then(data => data.json())
            .then(ranking => setRanking(ranking))
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
                                ranking.map((usuario,index) => (
                                    <tr>
                                        <th>{index +  1} </th>
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