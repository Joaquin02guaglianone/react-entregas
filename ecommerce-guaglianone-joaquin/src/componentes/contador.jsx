import { useState } from 'react'


export function ItemContador({initial = 1, max = 10, min = 1, porAgregar}) {
if (initial<min || initial>max) initial = min  
const [contador, setContador] = useState(initial)

const handleAcontador = () => {
    if (contador < max) 
setContador(contador + 1)
};

const handleQcontador = () => {
    if (contador > min) 
setContador(contador - 1)
    };

const reset = () => {
    setContador(initial)
}    

    return (

<div>
    <h3>Cantidad: {contador}</h3>
    <button className='BotDet elimsum' onClick={handleAcontador}>+</button>
    <button className='BotDet elimsum' onClick={handleQcontador}>-</button>
    <button className='BotDet elimsum' onClick={reset}>borrar</button>
    <button className='BotDet elimsum' onClick={()=>porAgregar(contador)}>Agregar al carrito</button>
</div>

    )

};


