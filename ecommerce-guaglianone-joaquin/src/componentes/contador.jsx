import { useEffect } from 'react';
import { useState } from 'react'

export function ItemCount({initial = 0, max = 10, min = 0}) {
if (initial<min || initial>max) initial = min  
const [Contador, setContador] = useState(initial)

const handleAcontador = () => {
    if (Contador < max) 
setContador(Contador + 1)
};

const handleQcontador = () => {
    if (Contador > min) 
setContador(Contador - 1)
    };

const reset = () => {
    setContador(initial)
}    

    return (

<div>
    <h3>Cantidad: {Contador}</h3>
    <button onClick={handleAcontador}>+</button>
    <button onClick={handleQcontador}>-</button>
    <button onClick={reset}>borrar</button>
</div>

    )

};


