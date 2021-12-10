import React, {useContext, useEffect, useState} from 'react';

import {PokemonContext} from './PokemonProvider';

const PokemonList = ({isCaptured}) => {
  const {
    pokemons,
    setPokemons,
    capturedPokemons,
    setCapturedPokemons
  } = useContext(PokemonContext);

  const capture = (pokemon) => {
    // pokemon.isCaptured = true;
    // console.log(pokemon);
    // const foundIndex = pokemons.findIndex(poke => poke.id === pokemon.id);
    // pokemons[foundIndex] = pokemon;

    // console.log(pokemons);

    // setPokemons(pokemons);
    setCapturedPokemons(capturedPokemons => [...capturedPokemons, pokemon]);
    setPokemons(pokemons.filter(poke => poke.id !== pokemon.id));
  };

  return (
    <div className="poke-list">
      <h2>Pokemons</h2>
      {pokemons.map((pokemon) =>
        <div key={`${pokemon.id}-${pokemon.name}`}>
          <p>{pokemon.id}</p>
          <p>{pokemon.name}</p>
          <button onClick={() => capture(pokemon)} disabled={pokemon.isCaptured}>Catch me!</button>
        </div>)
      }
    </div>
  );
};

export default PokemonList;
