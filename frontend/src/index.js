import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import ScrollToTop from './hooks/ScrollToTop';
import App from './App';

const root = createRoot(document.getElementById('app'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
