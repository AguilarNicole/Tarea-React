import { useState } from 'react'
import { Burbuja } from '../Burbuja'
import { Container, Carrolista, Listarticulos, Listul, Listail, Delete} from './styles'

export const Carro = ({ cantidad, productos, EliminarProducto }) => {

    const [mostrarCarro, setMostrarCarro] = useState(false)

    const handleMostrarCarro = _ => setMostrarCarro(!mostrarCarro)

    let subTotal = productos.reduce((acum, prod) => (prod.cantidad * prod.precio) + acum, 0)
    let impto = subTotal * 0.15
    let totalPagar = subTotal + impto

    return (
        <Container>
            {cantidad > 0 && <Burbuja cantidad={cantidad} />}
            <Carrolista onClick={handleMostrarCarro}>
                Carro
            </Carrolista>
            {
                (cantidad > 0 && mostrarCarro) && 
                    <Listarticulos>
                        <Listul>
                            {
                                productos.map(x => {
                                    return (
                                        <Listail>
                                            <img height={25} alt={x.nombre} src={x.imagen} />
                                            <span>{x.nombre}</span><Delete onClick={()=> EliminarProducto(x.nombre)}>X</Delete> {x.nombre}
                                            <span>
                                                ({x.cantidad} x {x.precio.toLocaleString()}) = <strong>{(x.cantidad * x.precio).toLocaleString()}</strong>
                                            </span>
                                        </Listail>
                                    )
                                })
                            }
                            <Listail>
                                <strong>Sub total</strong>
                                <strong>{subTotal.toLocaleString()}</strong>
                            </Listail>
                            <Listail>
                                <strong>Impuesto</strong>
                                <strong>{impto.toLocaleString()}</strong>
                            </Listail>
                            <Listail>
                                <strong>Total a pagar</strong>
                                <strong>{totalPagar.toLocaleString()}</strong>
                            </Listail>
                        </Listul>
                    </Listarticulos>
            }
        </Container>

    )
}