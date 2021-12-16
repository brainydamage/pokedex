import Main from './pages/Main';
import Header from './components/Header';
import React, {useContext} from 'react';
import {Route, Routes} from 'react-router-dom';
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
