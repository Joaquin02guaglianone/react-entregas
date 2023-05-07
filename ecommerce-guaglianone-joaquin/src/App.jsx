import Titulo from './componentes/Titulo'
import { Navb } from './componentes/nav'
import { Contenedor } from './componentes/contenedor'
import { ItemDetailContainer } from './componentes/itemDetailContainer'
import { CartContenedor } from './componentes/carrito/cartConteiner'
import { CompraContextoProvider } from './componentes/carrito/ContextoCarrito'

import './App.css'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'


function App() {

  return (

    <CompraContextoProvider>
      
    <BrowserRouter>


    <div className='app'>
      <div className='Titulo'>
      <h1> <Titulo titulo= "Centro de Ropa"/></h1>
      </div>

       <div className='Navbar'>
        <Navb/>
       </div>


       <div className='Padre'>
        <Routes>
        <Route path='/' element={<Contenedor/>}/>
        <Route path='/categoria/:cid' element={<Contenedor/>}/>
        <Route path='/detail/:pid' element={<ItemDetailContainer/>}/>
        <Route path='/Carrito/' element={<CartContenedor/>}></Route>
        <Route path='*' element={<Navigate to={"/"}/>}/>
        </Routes>
       </div>
    </div>



    </BrowserRouter>
    </CompraContextoProvider>
  )


}

export default App
