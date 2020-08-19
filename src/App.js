import React from 'react';
import Navbara from './components/layout/Navbara';
import Joke from './components/Joke';
import About from './components/pages/About';
import {BrowserRouter as Router, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
      <Navbara />
      <div className="container mx-auto">
      <Route exact path={process.env.PUBLIC_URL + '/'} component={Joke} />
      <Route path={process.env.PUBLIC_URL + '/about'} component={About} />
      </div>
    </div>
    </Router>
  );
}

export default App;
