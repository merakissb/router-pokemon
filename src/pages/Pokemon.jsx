import React from 'react';
import { useFetch } from '../hooks/useFetch';
import { Container, Row, Col, Spinner, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Pokemon = () => {
  const { data, loading, error } = useFetch('https://pokeapi.co/api/v2/pokemon?limit=151');
  const navigate = useNavigate();

  const handleChange = (e) => {
    navigate(`/pokemon/${e.target.value}`);
  }

  return (
    <Container fluid>
      <h1 className='text-center'>Selecciona un pokemon</h1>
      <Row>
        {loading && (
          <Col className='text-center'>
            <Spinner animation='border' variant='primary' />
          </Col>
        )}
        {data.results &&  (
          <Col className='text-center'>
            <Form.Control as='select' onChange={handleChange}>
              {data.results.map((pokemon, index) => (
                <option key={index} value={pokemon.name}>{pokemon.name}</option>
              ))}
            </Form.Control>
          </Col>
        )}
        {error && (
          <Col className='text-center'>
            <h3>{error}</h3>
          </Col>
        )}
      </Row>
    </Container>
  );
}

export default Pokemon;