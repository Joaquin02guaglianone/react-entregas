
import Titulo from './assets/componentes/Titulo'
import { Navb } from './assets/componentes/nav'
import { ItemCount } from './assets/componentes/contador'
import { Contenedor } from './assets/componentes/contenedor'
import './App.css'

function App() {

  return (
    <div >
       <h1> <Titulo titulo= "centro de ropa"/></h1>

       <div>
        <Navb/>
       </div>
       <div>
        <Contenedor/>
       </div>
    </div>
  )
}

export default App
