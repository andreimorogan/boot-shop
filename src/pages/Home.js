import React from "react";
import Navbar from 'react-bootstrap/Navbar'
import logo from '../assets/logo.svg'   
import NavDropdown from 'react-bootstrap/NavDropdown';
import InputGroup from 'react-bootstrap/InputGroup'
import Form from 'react-bootstrap/Form'


const Home = () => {
    return (
        <>
            <Navbar>
                <Navbar.Brand href="#">
                        <img src={logo} width="80" height="80" className="d-inline-block align-top" alt="The logo."/>
                </Navbar.Brand>
                <InputGroup className="mb-3">
                    <Form.Control
                    placeholder="Search for a product"
                    aria-label="The desired product."
                    aria-describedby="basic-addon2"
                    />
                    <InputGroup.Text id="basic-addon2">Search</InputGroup.Text>
                </InputGroup>
            </Navbar>
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
            </Navbar>
        </>
    );
}

export default Home;