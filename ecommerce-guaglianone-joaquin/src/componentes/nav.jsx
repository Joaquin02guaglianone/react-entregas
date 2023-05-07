import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { Cart } from './cartNav';


export function Navb() {
  return(
    <Navbar>
    <Container className='navb'>
      <Link  to={"/"} className='navb'><button className='Nav'>Inicio</button></Link>
      <Nav className="me-auto navb">
        <Link to={"/categoria/remeras"} className='navb' href="#home"><button className='Nav'>Prendas Superiores</button></Link>
        <Link to={"/categoria/pantalones"} className='navb' href="#features"><button className='Nav'>Prendas Inferiores</button></Link>
        <Link to={"/categoria/calzado"} className='navb' href="#pricing"><button className='Nav'>Calzado</button></Link>
        <Link to={"/categoria/accesorios"} className='navb' href="#pricing"><button className='Nav'>Accesorios</button></Link>
        <Cart/>
      </Nav>
    </Container>
  </Navbar>
  
  )
}