import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';
import { Container, Row, Col, Spinner, Card, Button } from 'react-bootstrap';

const PokemonDetail = () => {
  const { name } = useParams();
  const navigate = useNavigate();

  const { data, loading, error } = useFetch(
    `https://pokeapi.co/api/v2/pokemon/${name}/`
  );

  return (
    <Container fluid>
      <Row className='justify-content-center'>
        <Col xs={12} md={6}>
          {loading && (
            <div className='text-center'>
              <Spinner animation='border' variant='primary' />
            </div>
          )}
          {error && (
            <div className='text-center'>
              <h1>Ha ocurrido un error</h1>
            </div>
          )}
          {data && data.stats && (
            <Card className='text-center my-5'>
              <Row className='align-items-center'>
                <Col xs={6}>
                  <Card.Img
                    variant='top'
                    src={data.sprites?.other.dream_world.front_default}
                    alt={data.name}
                    width={200}
                    height={200}
                    className='my-3'
                  />
                </Col>
                <Col xs={6}>
                  <Card.Body>
                    <Card.Title>{data.name}</Card.Title>
                    <Card.Text>
                      <div>
                        <ul className='list-group'>
                          <li className='list-group-item border-0'>hp: {data.stats[0].base_stat}</li>
                          <li className='list-group-item border-0'>attack: {data.stats[1].base_stat}</li>
                          <li className='list-group-item border-0'>defense: {data.stats[2].base_stat}</li>
                          <li className='list-group-item border-0'>special-attack: {data.stats[3].base_stat}</li>
                          <li className='list-group-item border-0'>special-defense: {data.stats[4].base_stat}</li>
                          <li className='list-group-item border-0'>speed: {data.stats[5].base_stat}</li>
                        </ul>
                      </div>
                    </Card.Text>
                  </Card.Body>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Button
                      className='my-3'
                      variant='primary'
                      onClick={() => {
                        navigate('/pokemon');
                      }}
                    >
                      Volver
                    </Button>
                </Col>
              </Row>
            </Card>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default PokemonDetail;