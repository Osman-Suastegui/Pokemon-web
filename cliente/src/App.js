import './App.css';
import MenuLogin from './complementos/MenuLogin.js';

function App() {
  return (
    <div className="App">
      <div className="contenedor-titulo">
        <h1 className="titulo"> UASMONS</h1>
        <button className="boton-volumen">
          <img className="icono-volumen" src="./img/volumen.png"/>
        </button>
      </div>
      <div className='contenedor-Botones'>
        <MenuLogin/>
      </div>
    </div>
  );

}

export default App;
