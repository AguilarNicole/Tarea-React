import {Fragment, useState, useEffect, useRef} from 'react'
import  React  from "react";
import { Articulos } from "./components/Articulos";
import {  Navbar } from "./components/Navbar";


// base de datos 
const informacion ={
  articulos: [
    {id: 1, nombre:'Eyes Wide Open', precio:'14', imagen: '/images/Twice.jpg'},
    {id: 2, nombre:'Blond', precio:'30', imagen: '/images/Frank-Ocean.jpg'},
    {id: 3, nombre:'The Highlights', precio:'40', imagen: '/images/The-Weeknd.jpg'},
    {id: 4, nombre:'Life is a Bi…', precio:'13', imagen: '/images/BIBI.jpg'},
    {id: 5, nombre:'The Album', precio:'14', imagen: '/images/Blackpink.jpg'},
    {id: 6, nombre:'Mito', precio:'20', imagen: '/images/DPR.jpg'},
  ],
  carrito: [
    //{id: 1, nombre:'Eyes Wide Open', precio:'14', imagen: '/images/Twice.jpg', cantidad: 2},

  ]

} 

export const Cantidad = React.createContext()
export const Datos = React.createContext()

function App() {

  const [data, setData] = useState(informacion) 
  const[cantidad, setCantidad] = useState(0)
  const eliminar= useRef()

  //console.log(data);

  const agregarAlCarro = (producto) => {
    //console.log(producto);
    //condicion si ya existe algo en el carrito solo va sumar otro elemento
    //1- verificar si el producto clickeado ya esta en el carrito
    if (data.carrito.find(x => x.id === producto.id)) {
      //2- en caso de ya estar en el carrito aumentamos la cantidad en 1
      const carritoCopia = data.carrito.map( x => x.id === producto.id ? ({...x, cantidad: x.cantidad + 1}) : x)
      data.carrito = carritoCopia
      setData({...data})
      return
    }


    //va agregar al carrito si no hay nada 
    data.carrito.push({...producto, cantidad: 1})
    setData({...data})
  }


  
  //console.log(data);    

  //dentro de esta App, dentro App esta carro, dentro de carro esta burjuja dentro de burbuja esta  numero de productos
  
  //let cantidad={data.carrito.length} otra forma
  /* let cantidad = data.carrito.reduce((acum, actual) => acum + actual.cantidad, 0) */

  const EliminarProducto = (nombre) => {
    if(window.confirm("Esta seguro que desea eliminar este Producto?")){
      data.carrito.forEach((x, index)=> {
        if(x.nombre === nombre){
          eliminar.current=x.nombre
          data.carrito.splice(index, 1)
        }
      })
      setData({...data})
    }
  }

  useEffect(() => {
    
    setCantidad(data.carrito.reduce((acum,actual) => acum + actual.cantidad, 0))
  })


  return (
    <Cantidad.Provider value={cantidad}>
      <Datos.Provider value={data}>
      <Fragment>
        <Navbar productos={data.carrito} EliminarProducto={EliminarProducto}/>
        <Articulos agregarAlCarro={agregarAlCarro} data={data} />
      </Fragment>
    </Datos.Provider>
    </Cantidad.Provider>
  
  );
}

export default App;
