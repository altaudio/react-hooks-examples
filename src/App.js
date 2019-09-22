import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import StateHook from './hooksExamples/StateHook';
import EffectHook from './hooksExamples/EffectHook';
import './App.css';

const routes = [
  {
    path: '/state-hook',
    component: StateHook,
    name: 'State Hook',
  },
  {
    path: '/effect-hook',
    component: EffectHook,
    name: 'Effect Hook',
  }
];

function App() {
  return (
    <div className="App">
      <Router>
	<ul>
	  {routes.map(route => <li><Link to={route.path}>{route.name}</Link></li>)}
	</ul>
	{routes.map(route => <Route path={route.path} component={route.component} />)}
      </Router>
    </div>
  );
}

export default App;
