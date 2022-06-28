import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'

export default function name(params) {
  return (
    <div>
      <Navbar fixed='top' collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Homecenter</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">

            <Nav className='me-auto'>
            </Nav>
            {/* <Nav></Nav> */}

            <Nav>
              {/* <Nav.Link>Test</Nav.Link> */}
              <NavDropdown title='Search Homes' id="collasible-nav-dropdown">

              </NavDropdown>
              <NavDropdown title='Agents & Office' id="collasible-nav-dropdown">

              </NavDropdown>
              <NavDropdown title="Get a Mortgage" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}