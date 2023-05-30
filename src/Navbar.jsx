import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Navbarr(){
    return(
        <div>
          
           <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">SYXyPYX</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/sobre">Sobre</Nav.Link>
            <Nav.Link href="/contato">Contato</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
        </div>
    )
}

export default Navbarr