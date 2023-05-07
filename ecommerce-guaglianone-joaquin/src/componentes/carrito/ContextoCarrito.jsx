import { useContext, useState } from "react";

import { createContext} from "react";





const CompraContexto = createContext ([])

export const usarCompraContexto = () => useContext(CompraContexto)




export const CompraContextoProvider = ({children}) => {

    const [compra, actCompra] = useState ([])

    const agregarAlCarrito = (nuevoProducto) => {

        const indiceDP = compra.findIndex(producto => producto.id === nuevoProducto.id)

        if (indiceDP === -1 ) {
            actCompra([
                ...compra,
                nuevoProducto
            ])              
        } else {
            compra[indiceDP].cantidad += nuevoProducto.cantidad
            actCompra( [ ...compra ] )
        }

    }

    const cantidadTotal = () => compra.reduce((cantidadTotal, objProducto) => cantidadTotal =+ objProducto.cantidad ,0)

    const vaciarCarrito = () => {
        actCompra([])
    }

    const eliminarProducto = (pid) => {
      
        const indiceDP = compra.findIndex(producto => producto.id === pid)

        if (compra[indiceDP].cantidad > 1) {
            compra[indiceDP].cantidad = compra[indiceDP].cantidad -  1            
            actCompra( [...compra] )
        } else {
            actCompra(compra.filter(producto => producto.id !== pid ))          
        }
    }


    const valorTotal = () => {
      return compra.reduce((precioTotal, objProducto ) => precioTotal = precioTotal + (objProducto.precio * objProducto.cantidad) , 0 )
    }

return (

    <CompraContexto.Provider value={{

        compra,
        agregarAlCarrito,
        cantidadTotal,
        vaciarCarrito,
        eliminarProducto,
        valorTotal

     
    }}>

{children}

    </CompraContexto.Provider>

)

}