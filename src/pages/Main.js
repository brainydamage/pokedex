import React from 'react';
import PokemonList from '../components/PokemonList';

const Main = ({pokemons}) => {
  return (
    <div className="main-page">
      <PokemonList pokemons={pokemons}/>
    </div>
  );
};

export default Main;
