import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Home from './components/Home';
import Productos from './components/Productos';
import Carrito from './components/Carrito';
import Cantactos from './components/Cantactos';

function App() {
  return (
    <>
      <Router>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className="nav-link manita">Inicio</Link>
            </li>
            <li className="nav-item">
              <Link to="/productos" className="nav-link manita">Productos</Link>
            </li>
            <li className="nav-item">
              <Link to="/carrito" className="nav-link manita">Mas detalles</Link>
            </li>
            <li className="nav-item">
              <Link to="/contacto" className="nav-link manita">Contacto</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/carrito" element={<Carrito />} />
          <Route path="/contacto" element={<Cantactos />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
