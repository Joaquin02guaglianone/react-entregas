import Titulo from './componentes/Titulo'
import { Navb } from './componentes/nav'
import { ItemCount } from './componentes/contador'
import { Contenedor } from './componentes/contenedor'
import { ItemDetailContainer } from './componentes/itemDetailContainer'
import './App.css'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>
    <div >
       <h1> <Titulo titulo= "centro de ropa"/></h1>

       <div>
        <Navb/>
       </div>

       <div>
        <Routes>
        <Route path='/' element={<Contenedor/>}/>
        <Route path='/categoria/:cid' element={<Contenedor/>}/>
        <Route path='/detail/:pid' element={<ItemDetailContainer/>}/>
        <Route path='*' element={<Navigate to={"/"}/>}/>
        </Routes>
       </div>
    </div>
    </BrowserRouter>
  )
}

export default App
