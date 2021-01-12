import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Navbar from './components/navbar';
import Cards from './components/cards';
import Form from './components/form';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="flex flex-wrap">
        <Switch>
          <Route path="/create" component={Form} />
          <Route path="/" component={Cards} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
