import Main from './pages/Main';
import Header from './components/Header';
import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header/>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main/>}/>
          <Route path="/captured" element={<Main/>}/>
        </Routes>
      </BrowserRouter>

      {/*<Router>*/}
      {/*  <Switch>*/}
      {/*    <Route path="/">*/}
      {/*      <Main isCaptured={false}/>*/}
      {/*    </Route>*/}
      {/*    /!*<Route exact path='/' isCaptured={false} component={Main} />*!/*/}
      {/*    /!*<Route path="/" element={<Main isCaptured={false}/>}/>*!/*/}
      {/*    /!*<Route path="/pokemon/2" element={<OnePoke/>}/>*!/*/}
      {/*    /!*<Route path="/captured" element={<Main isCaptured={true}/>}/>*!/*/}
      {/*    /!*<Route path="/pokemon/18" element={<OnePoke/>}/>*!/*/}
      {/*    /!*<Route path="/about" component={About}/>*!/*/}
      {/*    /!*<Route component={NotFound}/>*!/*/}
      {/*  </Switch>*/}
      {/*</Router>*/}
    </div>
  );
}

export default App;
