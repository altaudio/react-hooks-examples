import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import StateHook from './hooksExamples/stateHook';
import './App.css';

const routes = [
  {
    path: '/state-hook',
    component: StateHook,
    name: 'State Hook',
  }
];

function App() {
  return (
    <div className="App">
      <Router>
	{routes.map(route => <Link to={route.path}>{route.name}</Link>)}
	{routes.map(route => <Route path={route.path} component={route.component} />)}
      </Router>
    </div>
  );
}

export default App;
