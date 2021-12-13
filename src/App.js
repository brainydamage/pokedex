import Main from './pages/Main';
import Header from './components/Header';
import React, {createContext, useContext, useEffect, useState} from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {Api} from './api/pokeapi';
import PokemonInfo from './pages/PokemonInfo';
import {PokeContext} from './index';

function App() {
  const {pokemons, capturedPokemons} = useContext(PokeContext);

  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/"
               element={<Main pokemons={pokemons}/>}/>
        <Route path="/captured"
               element={<Main pokemons={capturedPokemons}/>}/>
        <Route path="/pokemons/:id"
               element={<PokemonInfo/>}/>
      </Routes>
    </div>
  );
}

export default App;
