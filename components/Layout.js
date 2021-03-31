import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Nav } from '../components/Navbar'
import { Container } from 'react-bootstrap'


export const Layout = ({ children }) => {
    return (
        <Container >
            <Nav />
            {children}
        </Container>
    )
}
