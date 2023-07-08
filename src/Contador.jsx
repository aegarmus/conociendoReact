import { useState } from "react"

export const Contador = ({value}) => {
    const [contador, setContador] = useState(value)

    const addOneCounter = () => {
        setContador(contador + 1)
    }

    const sustracOneCounter = () => {
        setContador(contador - 1)
    }

    const resetCounter = () => {
        setContador(0)
    }
    if (contador == 3 ) {
        throw new Error (Error.error)
    }
   return (
    <>
        <h2>{contador}</h2>
        <button onClick = {addOneCounter}>+1</button>
        <button onClick = {sustracOneCounter}>-1</button>
        <button onClick = {resetCounter}>resetear</button>
    </> 
   ) 
}

