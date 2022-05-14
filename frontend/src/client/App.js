import React from 'react';
import { render } from 'react-dom';
import Home from './Home/Home';

function App() {
  return <Home/>;
}

const appDiv = document.getElementById('app');
render(<App/>, appDiv);

export default App;
