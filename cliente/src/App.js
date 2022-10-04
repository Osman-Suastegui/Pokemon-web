import './App.css';
import Login from './complementos/Login';
import MenuLogin from './complementos/MenuLogin.js';
import Register from './complementos/Register';

function App() {

  return (
      <div className="App">
        <div className="contenedor-titulo">
          <h1 className="titulo"> UASMONS</h1>
        </div>
        <div className="contenedor-menu">
          <MenuLogin />
          <Register/>
        </div>
      </div>
  );

}

export default App;
