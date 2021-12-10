import React, {createContext, useContext, useEffect, useState} from 'react';
import {Api} from '../api/pokeapi';

const PokemonContext = createContext();

const PokemonProvider = (props) => {
  const [pokemons, setPokemons] = useState([]);
  const [capturedPokemons, setCapturedPokemons] = useState([]);

  const providerValue = {
    pokemons,
    setPokemons,
    capturedPokemons,
    setCapturedPokemons,
  };

  async function retrievePokes() {
    try {
      const list = await Api.getPokes(10);
      let pokes = [];
      list.forEach(pokemon => {
        let pokeId = pokemon.url.split('/').slice(-2)[0];
        pokes.push({
          id: pokeId,
          name: pokemon.name,
          url: pokemon.url,
          isCaptured: false,
        });
      });

      setPokemons(pokes);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    retrievePokes();
  }, []);


  return (
    <PokemonContext.Provider value={providerValue}>
      {props.children}
    </PokemonContext.Provider>
  );
};

export { PokemonContext, PokemonProvider };
