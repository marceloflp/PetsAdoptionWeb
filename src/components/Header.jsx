import { Container, Nav, Navbar } from 'react-bootstrap';

const Header = () => {
  return (
    <header>
      <Navbar bg="dark" data-bs-theme="dark" style={{ padding: '1px' }}>
        <Container> 
        <Navbar.Brand href="#home" style={{ display: 'flex', alignItems: 'center' }}>
          <img
              src="https://cdn12.picryl.com/photo/2016/12/31/feet-icon-button-animals-e7c1fb-1024.png"
              alt="Logo"
              style={{ height: '40px', marginRight: '15px' }} // Ajuste o tamanho conforme necessário
            />
            PetsAdoption
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#Sobre">Sobre</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;