import Link from 'next/link'
import React from 'react'
import { Navbar } from 'react-bootstrap'

export const Nav = () => {
    return (
        <div>
            <Navbar>
                <Link href="/">
                    <Navbar.Brand href="">Memories</Navbar.Brand>
                </Link>
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
