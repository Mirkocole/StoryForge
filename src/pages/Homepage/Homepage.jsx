import React from 'react'
import { Container } from 'react-bootstrap';
import AllTheBooks from '../../components/AllTheBooks/AllTheBooks';
import MyNav from '../../components/MyNav/MyNav';
import Footer from '../../components/Footer/Footer';

export default function Homepage() {

  return (
    <>
      <MyNav />
      <Container fluid>
        <AllTheBooks />
      </Container>
      <Footer />
    </>
  )
}
