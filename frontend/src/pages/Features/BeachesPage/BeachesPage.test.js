import * as React from 'react';
import { createRoot } from 'react-dom/client';
import BeachesPage from './BeachesPage';

it('renders BeachesPage without crashing', () => {
  const div = document.createElement('div');
  const root = createRoot(div);
  root.render(<BeachesPage />);
});
