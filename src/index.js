import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';

// *** IMPORT BROWSER ROUTER *** //

import {BrowserRouter as Router} from 'react-router-dom'

// *** WRAP APP COMPONENT *** //

ReactDOM.render(<Router><App /></Router>, document.getElementById('root'));

// ReactDOM.render(<App />, document.getElementById('root'));
