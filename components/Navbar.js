import React from 'react'
import { Navbar } from 'react-bootstrap'

export const Nav = () => {
    return (
        <div>
            <Navbar>
                <Navbar.Brand href="#home">Memories</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        Signed in as: <a href="#login">Mark Otto</a>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}
