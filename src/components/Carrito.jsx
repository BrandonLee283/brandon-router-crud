import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css';
const Carrito = () => {


  return (
    <div>
      <h1>Bienvenido a nuestra Farmacia aqui encontraras</h1>

      <div class="producto">
        <img src="https://www.google.com/imgres?imgurl=https%3A%2F%2Fimg.freepik.com%2Fvector-premium%2Fvarios-medicamentos-capsulas-pastillas-frascos-drogas_267448-246.jpg&tbnid=UgIUdZZ4erurtM&vet=12ahUKEwjzwvz8ioP_AhUdFN4AHVzkD-cQMygAegUIARDeAQ..i&imgrefurl=https%3A%2F%2Fwww.freepik.es%2Ffotos-vectores-gratis%2Fmedicamentos&docid=xT4lx6kqA35LrM&w=626&h=480&q=imagenes%20de%20medicamentos&ved=2ahUKEwjzwvz8ioP_AhUdFN4AHVzkD-cQMygAegUIARDeAQ" alt="Producto 1" />
        <div class="informacion">
          <div class="descripcion">Producto 1</div>
          <div class="precio">$10.99</div>
          <div class="detalle">Descripción del producto 1.</div>
        </div>
      </div>

      <div class="producto">
        <img src="imagen2.jpg" alt="Producto 2" />
        <div class="informacion">
          <div class="descripcion">Producto 2</div>
          <div class="precio">$15.99</div>
          <div class="detalle">Descripción del producto 2.</div>
        </div>
      </div>

      <div class="producto">
        <img src="imagen3.jpg" alt="Producto 3" />
        <div class="informacion">
          <div class="descripcion">Producto 3</div>
          <div class="precio">$8.99</div>
          <div class="detalle">Descripción del producto 3.</div>
        </div>
      </div>

    </div>
  );
};

export default Carrito;
