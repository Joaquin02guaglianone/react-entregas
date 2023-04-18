import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { Cart } from './cartNav';


export function Navb() {
  return(
    <Navbar>
    <Container className='navb'>
      <Link  to={"/"} className='navb'>inicio</Link>
      <Nav className="me-auto navb">
        <Link to={"/categoria/remeras"} className='navb' href="#home">Prendas Superiores</Link>
        <Link to={"/categoria/pantalones"} className='navb' href="#features">Prendas Inferiores</Link>
        <Link to={"/categoria/calzado"} className='navb' href="#pricing">Calzados</Link>
        <Link to={"/categoria/accesorios"} className='navb' href="#pricing">Accesorios</Link>
        <Cart/>
      </Nav>
    </Container>
  </Navbar>
  
  )
}