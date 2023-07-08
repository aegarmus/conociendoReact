import './Componente.css'
import {Contador} from './Contador.jsx'
import ErrorBoundary from './Error'

export const Componente = ({nombre}) => {
    return (
        <>
          <h1 className = 'titulo' >Saludos, Bienvenido {nombre}</h1>
          <ErrorBoundary>
            <Contador value = {0} />
          </ErrorBoundary>
        </>
    )
}

