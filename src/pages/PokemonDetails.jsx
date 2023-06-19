import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';
import { Container, Row, Col, Spinner, Card, Button } from 'react-bootstrap';

const PokemonDetails = () => {
  const { name } = useParams();

  const { data, loading, error } = useFetch(
    `https://pokeapi.co/api/v2/pokemon/${name}/`
  );
  const navigate = useNavigate();
  const { sprites } = data;
  const imageUrl = sprites?.other.dream_world.front_default;

  const renderStats = (data) => {
    return (
      <ul className='list-group'>
        {data.stats.map((stat) => (
          <li key={stat.stat.name} className='list-group-item border-0'>
            {`${stat.stat.name}: ${stat.base_stat}`}
          </li>
        ))}
      </ul>
    );
  };

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
                    src={imageUrl}
                    alt={data.name}
                    width={200}
                    height={200}
                    className='my-3'
                  />
                </Col>
                <Col xs={6}>
                  <Card.Body>
                    <Card.Title>{data.name}</Card.Title>
                    <div>{renderStats(data)}</div>
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

export default PokemonDetails;