import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import 'bootstrap/dist/css/bootstrap.min.css';
import {PokemonProvider} from './components/PokemonProvider';

ReactDOM.render(
  <React.StrictMode>
    <PokemonProvider>
      <App/>
    </PokemonProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);