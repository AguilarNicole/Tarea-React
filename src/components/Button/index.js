import styles from './estilos'
import { Boton } from "./styles";

export const Button = ({children, agregarAlCarro, prod}) => {
    return (
        <Boton onClick={() => agregarAlCarro(prod)} style={styles.button}>{children}</Boton>
    )
}
