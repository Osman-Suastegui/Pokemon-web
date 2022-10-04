import './App.css';
import Home from './complementos/Home.js';
import Login from './complementos/Login';
import Registrar from './complementos/Register';

import {
  Route, Routes
} from "react-router-dom";

function App() {

  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registrar" element={<Registrar />} />
        </Routes>
    </div>
  );

}

export default App;
