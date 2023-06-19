import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const home = () => {
  return (
    <Container fluid>
      <Row>
        <Col>
          <h1 className='text-center'>Bienvenido maestro pokemón</h1>
          <img
            className='d-block mx-auto'
            src='https://clipart-library.com/data_images/428617.png'
            width='300'
            alt='React Bootstrap logo'
          />
        </Col>
      </Row>
    </Container>
  );
}

export default home;