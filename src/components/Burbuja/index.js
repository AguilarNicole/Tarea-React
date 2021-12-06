import styles from './estilos'
import { Bubble } from './styles'

export const Burbuja = ({ cantidad }) => {
    // let { numero } = props
    // let numero = props.numero
    return (
        <Bubble>
            {cantidad > 9 ? '9+' : cantidad}
        </Bubble>
    )   
}