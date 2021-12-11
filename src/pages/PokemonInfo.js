import React, {useContext, useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {Api} from '../api/pokeapi';
import {
  Card,
  Image,
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

  const getPokemon = async () => {
    setLoading(true);
    const info = await Api.getPokeInfo(id);

    console.log(info);

    setInfo(info);
    setAvatar(info.avatar);
    setLoading(false);
  };

  useEffect(() => {
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
      <h1>{info.name}</h1>
      <Row>
        <Card style={{width: '18rem'}}>
          <Card.Img variant="top"
                    src={avatar}
                    alt={info.name}
          />;
        </Card>
        <Card style={{width: '18rem'}}>
          <ListGroup variant="flush">
            <ListGroup.Item>abilities: {info.abilities}</ListGroup.Item>
            <ListGroup.Item>base_experience: {info.base_experience}</ListGroup.Item>
            <ListGroup.Item>height: {info.height}</ListGroup.Item>
            <ListGroup.Item>weight: {info.weight}</ListGroup.Item>
          </ListGroup>
        </Card>
      </Row>
    </div>
  );
};

export default PokemonInfo;
