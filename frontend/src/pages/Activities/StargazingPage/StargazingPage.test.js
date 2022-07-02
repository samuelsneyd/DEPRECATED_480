import * as React from 'react';
import { createRoot } from 'react-dom/client';
import StargazingPage from './StargazingPage';

it('renders StargazingPage without crashing', () => {
  const div = document.createElement('div');
  const root = createRoot(div);
  root.render(<StargazingPage />);
});
