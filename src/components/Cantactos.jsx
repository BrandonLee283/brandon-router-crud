import React from 'react'
import './contacto.css';
const Cantactos = () => {
  return (
    <div>
      <div style={{ fontSize: "3rem", textAlign: "center", margin: "1%" }}>Contactanos</div>

      <div class="contacto" />
      <label for="nombre">Nombre:</label>
      <br />
      <input type="text" id="nombre" required />
    <br />
      <label for="correo">Correo electrónico:</label>
      <br />
      <input type="email" id="correo" required/>
<br />
        <label for="mensaje">Mensaje:</label>
        <br />
        <textarea id="mensaje" rows="5" required></textarea>

    </div>
  )
}

export default Cantactos