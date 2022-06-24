import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Offcanvas from 'react-bootstrap/Offcanvas'

export default function name(params) {
  return (
    <div>
      <Navbar fixed='top' collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Homecenter</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            {/* <Nav></Nav> */}
            <Nav className="me-auto">
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
              <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
    // <Navbar fixed='top' bg='dark' variant='dark'>
    //   <Container>
    //   <Navbar.Brand href="#home">
    //     Homebox
    //   </Navbar.Brand>

    //   <Nav>
    //     <Nav.Link href='#Search'>Search Homes</Nav.Link>
    //     <NavDropdown title='Sell Your Home'>

    //     </NavDropdown>
    //     <NavDropdown title='Agents & Offices'>

    //     </NavDropdown>
    //     <NavDropdown title='Get a Mortgage'>

    //     </NavDropdown>
    //   </Nav>

    //   </Container>
    // </Navbar>
    // <div>
    /* {[false, 'sm', 'md', 'lg', 'xl', 'xxl'].map((expand) => ( */
    // <Navbar key={expand} bg="light" expand={expand} className="mb-3">
    //   <Container fluid>
    //     <Navbar.Brand href="#">Navbar Brand</Navbar.Brand>
    //     <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
    //     <Navbar.Offcanvas
    //       id={`offcanvasNavbar-expand-${expand}`}
    //       aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
    //       placement="end"
    //     >
    //       <Offcanvas.Header closeButton>
    //         <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
    //           Offcanvas Title
    //         </Offcanvas.Title>
    //       </Offcanvas.Header>
    //       <Offcanvas.Body>
    //         <Nav className="justify-content-end flex-grow-1 pe-3">
    //           <Nav.Link href="#action1">Home</Nav.Link>
    //           <Nav.Link href="#action2">Link</Nav.Link>
    //           <NavDropdown
    //             title="Dropdown"
    //             id={`offcanvasNavbarDropdown-expand-${expand}`}
    //           >
    //             <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
    //             <NavDropdown.Item href="#action4">
    //               Another action
    //             </NavDropdown.Item>
    //             <NavDropdown.Divider />
    //             <NavDropdown.Item href="#action5">
    //               Something else here
    //             </NavDropdown.Item>
    //           </NavDropdown>
    //         </Nav>
    //       </Offcanvas.Body>
    //     </Navbar.Offcanvas>
    //   </Container>
    // </Navbar>

    //         <Navbar key={expand} expand={expand} className='mb-3' fixed='top' bg='dark' variant='dark'>
    //       <Container fluid>
    //       <Navbar.Brand href="#home">
    //         Homebox
    //       </Navbar.Brand>
    //       <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />

    //       <Nav>
    //         <Nav.Link href='#Search'>Search Homes</Nav.Link>
    //         <NavDropdown title='Sell Your Home'>

    //         </NavDropdown>
    //         <NavDropdown title='Agents & Offices'>

    //         </NavDropdown>
    //         <NavDropdown title='Get a Mortgage'>

    //         </NavDropdown>
    //       </Nav>

    //       </Container>
    //     </Navbar>
    // ))}
    // </div>
  )
}