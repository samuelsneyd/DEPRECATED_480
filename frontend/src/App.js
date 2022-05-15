import * as React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Route, Routes } from 'react-router';
import HomePage from './pages/HomePage/HomePage';
import Terms from './pages/Terms/Terms';
import Privacy from './pages/Privacy/Privacy';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HomePage/>}/>
        <Route path="terms" element={<Terms/>}/>
        <Route path="privacy" element={<Privacy/>}/>
        <Route
          path="*"
          element={
            <main style={{ padding: '1rem' }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

const appDiv = document.getElementById('app');
render(<App/>, appDiv);

export default App;