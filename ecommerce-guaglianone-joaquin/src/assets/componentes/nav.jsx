import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Cart } from './cartNav';


export function Navb() {
  return(
    <Navbar>
    <Container className='navb'>
      <Navbar.Brand className='navb' href="#home">inicio</Navbar.Brand>
      <Nav className="me-auto navb">
        <Nav.Link className='navb' href="#home">Prendas Superiores</Nav.Link>
        <Nav.Link className='navb' href="#features">Prendas Inferiores</Nav.Link>
        <Nav.Link className='navb' href="#pricing">Calzados</Nav.Link>
        <Nav.Link className='navb' href="#pricing">Accesorios</Nav.Link>
        <Cart/>
      </Nav>
    </Container>
  </Navbar>
  
  )
}