import logo from '../../asset/logo.jpg'

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Nav() {
  return (
    <Navbar>
      <Container>
        <Navbar.Brand href="#home"><img width={100} src={logo} alt="" /></Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Author: <a href="https://github.com/carrubbasamuel">Carrubba Samuel</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Nav;