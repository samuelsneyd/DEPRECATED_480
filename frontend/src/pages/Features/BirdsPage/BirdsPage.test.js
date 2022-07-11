import * as React from 'react';
import { createRoot } from 'react-dom/client';
import BirdsPage from './BirdsPage';

it('renders BirdsPage without crashing', () => {
  const div = document.createElement('div');
  const root = createRoot(div);
  root.render(<BirdsPage />);
});
