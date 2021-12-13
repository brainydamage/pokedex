import React, {createContext, useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter} from 'react-router-dom';
import {Api} from './api/pokeapi';

export const PokeContext = createContext();

function Wrapper() {
  const [pokemons, setPokemons] = useState([]);
  const [capturedPokemons, setCapturedPokemons] = useState([]);
  const [nextPage, setNextPage] = useState('');

  const providerValue = {
    pokemons,
    setPokemons,
    capturedPokemons,
    setCapturedPokemons,
  };

  async function retrievePokes() {
    try {
      const fetchResponse = await Api.getPokes(3);
      setNextPage(fetchResponse.next);

      let pokes = [];
      fetchResponse.results.forEach(pokemon => {
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
    <BrowserRouter>
      <PokeContext.Provider value={providerValue}>
        <App />
      </PokeContext.Provider>
    </BrowserRouter>
  )
}

ReactDOM.render(
  <Wrapper />,
  document.getElementById('root'),
);