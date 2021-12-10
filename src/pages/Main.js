import React, {useContext, useEffect, useState} from 'react';
import Header from '../components/Header';
import PokemonList from '../components/PokemonList';
import {PokemonContext} from '../components/PokemonProvider';

const Main = ({isCaptured}) => {
  const { pokemons, capturedPokemons } = useContext(PokemonContext);

  console.log(`pokemons = ${JSON.stringify(pokemons)}`);
  console.log(`capturedPokemons = ${JSON.stringify(capturedPokemons)}`);

  console.log(isCaptured);

  // useEffect(() => {
  //   if (type==='captured') {
  //     setFilteredPokemons(capturedPokemons);
  //   } else {
  //     setFilteredPokemons(pokemons);
  //   }
  // }, []);

  return (
      <div className="main-page">
        <PokemonList isCaptured={isCaptured} />
      </div>
  );
};

export default Main;
