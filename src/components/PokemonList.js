import React, {useContext} from 'react';
import {PokeContext} from '../App';
import {Button, Card, Col, Row} from 'react-bootstrap';
import {Link} from 'react-router-dom';

const PokemonList = (props) => {
  const {
    pokemons,
    setPokemons,
    capturedPokemons,
    setCapturedPokemons,
  } = useContext(PokeContext);

  console.log(`pokemons = ${JSON.stringify(pokemons)}`);
  console.log(`capturedPokemons = ${JSON.stringify(capturedPokemons)}`);

  const capture = (pokemon) => {
    setCapturedPokemons(capturedPokemons => [...capturedPokemons, pokemon]);
    // setPokemons(pokemons.filter(poke => poke.id !== pokemon.id));
    setPokemons(pokemons.map(
      poke => poke.id === pokemon.id ? {...poke, isCaptured: true} : poke,
    ));
  };

  function getAvatar(pokemon) {
    const avatar = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`;
    return <Card.Img variant="top"
                     src={avatar}
                     alt={pokemon.name}/>;
  }

  function onClick() {
    console.log(`card clicked!`);
  }

  return (
    <div className="poke-list">
      <h2>Pokemons</h2>
      <Row>
        {props.pokemons.map((pokemon, idx) => (
          <Col key={idx}>
            <Card style={{width: '10rem'}}
                  border="danger"
              // onClick={onClick}
              // style={{
              //   cursor: "pointer"
              // }}
            >
              <Card.Header>{pokemon.id}</Card.Header>
              <Link to={`/pokemons/${pokemon.id}`}>
                {getAvatar(pokemon)}
              </Link>
              <Card.Body>
                <Card.Title>{pokemon.name}</Card.Title>
                <Button
                  variant="primary"
                  onClick={() => capture(pokemon)}
                  disabled={pokemon.isCaptured}
                >
                  Catch me!
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default PokemonList;
