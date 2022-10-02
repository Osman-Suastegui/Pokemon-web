import './App.css';
import MenuLogin from './complementos/MenuLogin.js';
import volumen from './img/volumen.png';

function App() {
  return (
    <div className="App">
      <div className="contenedor-titulo">
        <h1 className="titulo"> UASMONS</h1>
        <button className="boton-volumen">
          <img className="icono-volumen" src={volumen} width='60' height='60'/>
        </button>
      </div>
      <div className='contenedor-Botones'>
        <MenuLogin/>
      </div>
    </div>
  );

}

export default App;
