import React, { useState } from 'react'

const Productos = () => {
  const Categorias = [
    { nombre: 'Medicamentos' },
    { nombre: 'Perfumeria' },
    { nombre: 'Regalos' },
  ]
  const [categorias, SetCategorias] = useState(Categorias)

  const Productos = [
    { ID: 39, nombre: 'Paracetamos',precio:15, categoria: categorias[0].nombre},
    { ID: 38, nombre: 'Doclofenaco',precio: 500, categoria: categorias[0].nombre},
    { ID: 37, nombre: 'Oso',precio: 500, categoria: categorias[2].nombre}
  ]
  const [productos, SetProductos] = useState(Productos)

  const registrarProductos = (event) => {
    event.preventDefault();
    const ID= document.querySelector('.inputM').value
    const nombre = document.querySelector('.inputN').value
    const precio = document.querySelector('.inputF').value
    const categoria = document.querySelector('.inputC').selectedIndex
    // const foto = imagen2

    try {
      const existe = productos.find(producto => producto.ID === ID)
      if (existe) {
        alert(`${existe.ID} ya esta registrado`)
      } else {
        const categoriaSeleccionada = (categorias[categoria - 1].nombre)

        SetProductos([...productos, { ID:ID, nombre: nombre,precio: precio, categoria: categoriaSeleccionada}])
        SetCategorias([...categorias])
        
        alert('Registrado exitosamente')

        document.querySelector('.inputM').value = '';
        document.querySelector('.inputN').value = '';
        document.querySelector('.inputC').selectedIndex = 0;
        document.querySelector('.inputF').value = '';
      }

    } catch (error) {
      alert('Falta una opcion por registrar')
    }
  }

  const mostrarProductos = () => {
    return productos.map((producto) => (
      <tr key={producto.ID}>
        <td>{producto.ID}</td>
        <td>{producto.nombre}</td>
        <td>{producto.precio}</td>
        <td>{producto.categoria}</td>
        <td><button onClick={() => editar(producto.ID, producto.nombre, producto.precio, producto.categoria)} target="_blank" className="material-icons">edit</button></td>
        <td><button onClick={() => eliminar(producto.ID)} target="_blank" className="material-icons">delete</button></td>
      </tr>
    ))
  }

  const eliminar = (identificador) => {
    // alert(`Has elegido la matricula ${identificador}`)
    productos.forEach((producto, index, arr) => {
      // const index = arr.indexOf('');
      if (producto.ID === identificador) {
        if (index !== -1) {
          arr.splice(index, 1);
          alert(`Eliminaste a ${producto.nombre}`)
          SetProductos([...arr])
          mostrarProductos()
        }
      }

    })


  }
  const AgregarEdicion = (event) => {
    event.preventDefault()
    document.querySelector('.inputM').disabled = false

    const ID = document.querySelector('.inputM').value;
    const nombre = document.querySelector('.inputN').value;
    const precio = document.querySelector('.inputF').value
    const categoria = document.querySelector('.inputC').selectedIndex;
  
    const categoriaSeleccionada = categorias[categoria-1].nombre;
  
    const indice = productos.findIndex(producto => Number(producto.ID) === Number(ID));
    try {
      if (indice !== -1) {

        const nuevosProductos = [...productos];

  

        nuevosProductos[indice] = {
          ID:ID,
          nombre: nombre,
          precio: precio,
          categoria: categoriaSeleccionada,
          
        };
        SetProductos(nuevosProductos);
      
        alert('Actualizado exitosamente');
        document.querySelector('.inputM').value = '';
        document.querySelector('.inputN').value = '';
        document.querySelector('.inputC').selectedIndex = 0;
        document.querySelector('.inputF').value = '';
  
        const botonEditar = document.querySelector('.btnEditar')
        const botonRegistrar = document.querySelector('.btnRegistrar')
    
        botonEditar.style.display = 'none'
        botonRegistrar.style.display = 'block'
    
      } else {
        alert('El Producto no existe');
        document.querySelector('.inputM').value = '';
        document.querySelector('.inputN').value = '';
        document.querySelector('.inputC').selectedIndex = 0;
        document.querySelector('.inputF').value = '';
  
        const botonEditar = document.querySelector('.btnEditar')
        const botonRegistrar = document.querySelector('.btnRegistrar')
    
        botonEditar.style.display = 'none'
        botonRegistrar.style.display = 'block'

        
      }
      
    } catch (error) {
      alert('Falta un campo por llenar')
    }
    
  };

  const renderizarFormulario = () => {
    // alert(matricula+nombre+foto)

    return (
      <form action="" className='black'>
        <div className="mb-3">
          <label htmlFor="disabledTextInput" className="form-label">Ingresa el ID</label>
          <input type="text" id="disabledTextInput" className="form-control inputM" placeholder="Ingresa el ID" />
        </div>
        <div className="mb-3">
          <label htmlFor="disabledTextInput" className="form-label">Ingresa el Nombre</label>
          <input type="text" id="disabledTextInput" className="form-control inputN" placeholder="Ingresa el Nombre" />
        </div>
        <div className="mb-3">
          <label htmlFor="disabledTextInput" className="form-label">Ingresa el precio</label>
          <input type="text" id="disabledTextInput" className="form-control inputF" placeholder="Ingresa el precio" />
        </div>
        <label htmlFor="seleccion">Selecciona una categoria:</label>
        <select className='inputC' id="seleccion" name="seleccion">
          <option>Selecciona una Categoria</option>
          {
            categorias.map((categoria, index) => (
              <option key={index} value={index}>{categoria.nombre}</option>
            ))
          }


        </select>
        <br /><br />
        <button type="submit" className="btn btn-primary btnRegistrar" onClick={registrarProductos}>Registrar</button>
        <button type="submit" className="btn btn-primary btnEditar" onClick={AgregarEdicion} style={{ display: 'none' }}>Editar</button>

      </form>
    )
  }
  const editar = (m, n, f, c) => {

    const busquedaIntex = categorias.findIndex(indice => indice.nombre === c)
    document.querySelector('.inputM').value = m
    document.querySelector('.inputM').disabled = true
    document.querySelector('.inputN').value = n
    // const foto = document.querySelector('.inputF')
    document.querySelector('.inputC').value = busquedaIntex

    // foto.files[0] = f
    console.log(f)



    // const tabla = document.querySelector('.table')
    // const form = document.querySelector('.black')
    // tabla.style.display = 'none';
    // form.style.display = 'block'
    // renderizarFormulario(matricula,nombre,foto,carrera)

    const botonEditar = document.querySelector('.btnEditar')
    const botonRegistrar = document.querySelector('.btnRegistrar')

    botonEditar.style.display = 'block'
    botonRegistrar.style.display = 'none'

  }
  return (
    <>
      {
        renderizarFormulario()
      }

      <table className="table table-striped">

        <thead>
          {/* <tr><th>Lista de Alumnos</th></tr> */}
          <tr>
            <th>Matricula</th>
            <th>Nombre</th>
            <th>Categoria</th>
            <th>Precio</th>
            <th>Editar</th>
            <th>Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {
            mostrarProductos()
          }
        </tbody>
      </table>

    </>
  )
}

export default Productos