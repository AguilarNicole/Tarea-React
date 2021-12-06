import { Carro } from '../Carro'
import { useContext } from "react";
import styles from './estilos'
import { Cantidad, Datos } from "../../App";
import { Menu, Input } from './styles'

export const Navbar = ({  EliminarProducto }) => {

    let cantidad = useContext(Cantidad)
    let productos = useContext(Datos)

    return (
        <Menu>
            <Input placeholder="Buscar Album"></Input>
            <Carro cantidad={cantidad} productos={productos.carrito} EliminarProducto={EliminarProducto} />
        </Menu>
    )
}