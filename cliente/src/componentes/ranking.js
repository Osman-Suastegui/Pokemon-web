import '../css/ranking.css';


function getRank() {
    var rank = document.getElementsByClassName("rank")[0].innerHTML;
    return rank;
}

function Ranking() {
    return (
        <div className='Contenedor-principal'>
            <div className='repetir-logo'>
                <div className='Titulo-Ranking'>
                    <h1>Ranking</h1>
                </div>
                <div className='contenedor-Tabla'>
                    <div className='Tabla-Ranking'>
                        <table>
                            <tr> 
                                <th>Posición</th>
                                <th>Nombre</th>
                                <th>Puntos</th>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>Nombre</td>
                                <td>100</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Nombre</td>
                                <td>90</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Ranking; 