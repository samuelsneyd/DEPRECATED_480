import * as React from 'react';
import { createRoot } from 'react-dom/client';
import BirdwatchingPage from './BirdwatchingPage';

it('renders BirdwatchingPage without crashing', () => {
  const div = document.createElement('div');
  const root = createRoot(div);
  root.render(<BirdwatchingPage />);
});
