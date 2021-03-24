import Head from 'next/head'
import { Layout } from '../components/Layout'
import styles from '../styles/Home.module.css'
import { Container } from 'react-bootstrap'
import { HomeContent } from '../components/HomeContent'

export default function Home() {
  return (
    <>
      <Layout />
      <Container style={{ marginTop: '110px' }}>
        <HomeContent />
      </Container>
    </>
  )
}
