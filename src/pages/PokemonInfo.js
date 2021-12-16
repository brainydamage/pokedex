import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {Api} from '../api/pokeapi';
import {
  Badge,
  Card, Col, Container,
  ListGroup,
  ProgressBar,
  Row,
  Spinner,
} from 'react-bootstrap';

const PokemonInfo = () => {
  const [info, setInfo] = useState({});
  const [avatar, setAvatar] = useState(
    'https://cdn-icons-png.flaticon.com/512/2748/2748558.png');
  const [loading, setLoading] = useState(false);
  let {id} = useParams();

  useEffect(() => {
    const getPokemon = async () => {
      setLoading(true);
      const info = await Api.getPokeInfo(id);
      setInfo(info);
      setAvatar(info.avatar);
      setLoading(false);
    };

    getPokemon();
  }, [id]);

  if (loading) {
    return (
      <div>
        <Spinner
          animation="border"
          role="status"
          size="lg"
        >
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    );
  }

  return (
    <div className="pokemon-info">
      <h1>{`${info.name} `}
        <Badge bg="primary">{`#${info.id}`}</Badge>
      </h1>

      <Row>
        <Card style={{width: '20rem'}}>
          <Card.Img variant="top"
                    src={avatar}
                    alt={info.name}
          />;
        </Card>
        <Card style={{width: '30rem'}}>
          <ListGroup variant="flush">
            <ListGroup.Item variant="primary">
              <p>ABILITIES</p>
              {info.abilities?.map((ability, idx) => (
                <Container key={idx}>
                  <Row>
                    <Col sm={8}>{ability.name}</Col>
                    <Col sm={4}>
                      <Badge pill
                             bg={ability.isHidden ? 'secondary' : 'primary'}>
                        {ability.isHidden ? 'Hidden' : 'Active'}
                      </Badge>
                    </Col>
                  </Row>
                </Container>
              ))}
            </ListGroup.Item>

            <ListGroup.Item variant="secondary">
              <Container>
                <Row sm={14}>
                  <Col sm={3}>base exp</Col>
                  <Col sm={9}>
                    <ProgressBar variant={'pink'}
                                 max={650}
                                 min={0}
                                 now={info.base_experience}
                                 label={`${info.base_experience}`}
                    />
                  </Col>
                </Row>
              </Container>
            </ListGroup.Item>

            <ListGroup.Item variant="secondary">
              <Container>
                <Row>
                  <Col sm={3}>height</Col>
                  <Col sm={9}>
                    <ProgressBar variant="pink"
                                 max={35}
                                 min={0}
                                 now={info.height}
                                 label={`${info.height}`}/>
                  </Col>
                </Row>
              </Container>
            </ListGroup.Item>

            <ListGroup.Item variant="secondary">
              <Container>
                <Row>
                  <Col sm={3}>weight</Col>
                  <Col sm={9}>
                    <ProgressBar variant="pink"
                                 max={3000}
                                 min={0}
                                 now={info.weight}
                                 label={`${info.weight}`}/>
                  </Col>
                </Row>
              </Container>
            </ListGroup.Item>

            {/*<ListGroup.Item variant="secondary">*/}
            {/*  <Row>*/}
            {/*    <p>Weight</p>*/}
            {/*    <ProgressBar variant="success"*/}
            {/*                 max={3000}*/}
            {/*                 min={0}*/}
            {/*                 now={info.weight}*/}
            {/*                 label={`${info.weight}`}/>*/}
            {/*  </Row>*/}
            {/*</ListGroup.Item>*/}
            {/*<ListGroup.Item>abilities: {info.abilities}</ListGroup.Item>*/}
            {/*<ListGroup.Item>height: {info.height}</ListGroup.Item>*/}
            {/*<ListGroup.Item>weight: {info.weight}</ListGroup.Item>*/}
          </ListGroup>
        </Card>
      </Row>
    </div>
  );
};

export default PokemonInfo;
