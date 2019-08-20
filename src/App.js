import React from 'react';
import './App.css';
import { Home, About, Contact, Navigation } from './components';

// *** IMPORT ROUTE *** //

import {Route} from 'react-router-dom';

// *** THE THREE ROUTES *** //

const App = () => (
  <div>
    <Navigation />
    <Route path="/" component={Home}/>
    <Route path="/contact" component={Contact}/>
    <Route path="/about" component={About}/>
  </div>
);

export default App;
