import React from 'react'
import { Layout } from '../../../components/Layout'
import { Container } from 'react-bootstrap'

const index = () => {
    return (
        <>
            <Layout />
            <Container style={{ marginTop: '110px' }}>
                single post
            </Container>
        </>
    )
}
export default index