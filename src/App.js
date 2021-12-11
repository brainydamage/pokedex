import Main from './pages/Main';
import Header from './components/Header';
import React, {createContext, useEffect, useState} from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {Api} from './api/pokeapi';
import PokemonInfo from './pages/PokemonInfo';

export const PokeContext = createContext();

function App() {
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
    <div className="App">
      <PokeContext.Provider value={providerValue}>
        <Header/>
        <BrowserRouter>
          <Routes>
            <Route path="/"
                   element={<Main pokemons={pokemons}/>}/>
            <Route path="/captured"
                   element={<Main pokemons={capturedPokemons}/>}/>
            <Route path="/pokemons/:id"
                   element={<PokemonInfo/>}/>
          </Routes>
        </BrowserRouter>
      </PokeContext.Provider>
    </div>
  );
}

export default App;
