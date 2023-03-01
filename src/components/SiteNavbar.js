import Navbar from 'react-bootstrap/Navbar'
import React from 'react';
import logo from '../assets/logo.svg'   
import NavDropdown from 'react-bootstrap/NavDropdown';
import InputGroup from 'react-bootstrap/InputGroup'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'

const SiteNavbar = () => {
    return (
        <>  
            <Container>
                <Row>
                    <Col xxl={10}>
                        <Row>
                            <Col xxl={2}>
                                <Navbar.Brand href="#" style={{position: 'relative', bottom: '15%'}}>
                                    <img src={logo} width="60" height="60" className="d-inline-block align-top" alt="The logo." />
                                </Navbar.Brand>                      
                            </Col>
                            <Col xxl={10}>
                                <InputGroup className='w-50'>
                                    <Form.Control
                                    placeholder="Search for a product"
                                    aria-label="The desired product."
                                    aria-describedby="basic-addon2"
                                    />
                                    <InputGroup.Text id="basic-addon2">Search</InputGroup.Text>
                                </InputGroup>
                            </Col>
                        </Row>
                    </Col>  
                    <Col xxl={2}>
                        <Button variant="secondary" className='ms-auto'>Cart</Button>
                        <Button variant="secondary">Account</Button>   
                    </Col>
                </Row>
            </Container>

            <Navbar bg="primary">
                <NavDropdown title="Products" id="basic-nav-dropdown">
                    <NavDropdown.Item>Phones, Tablets</NavDropdown.Item>
                    <NavDropdown.Item>Laptops, Desktops</NavDropdown.Item>
                    <NavDropdown.Item>Gaming</NavDropdown.Item>
                    <NavDropdown.Item>TV, Audio, Photo</NavDropdown.Item>
                    <NavDropdown.Item>Large appliances</NavDropdown.Item>
                    <NavDropdown.Item>Small appliances</NavDropdown.Item>
                    <NavDropdown.Item>Groceries</NavDropdown.Item>
                    <NavDropdown.Item>Toys</NavDropdown.Item>
                    <NavDropdown.Item>Beauty, Health</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link>Deals</Nav.Link>
                <Nav.Link>Contact</Nav.Link>
                <Nav.Link>Careers</Nav.Link>
                <Nav.Link>Privacy policy</Nav.Link>
            </Navbar>
        </>
    );
}

export default SiteNavbar