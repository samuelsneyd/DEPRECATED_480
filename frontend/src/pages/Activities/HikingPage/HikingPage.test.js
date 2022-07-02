import * as React from 'react';
import { createRoot } from 'react-dom/client';
import HikingPage from './HikingPage';

it('renders HikingPage without crashing', () => {
  const div = document.createElement('div');
  const root = createRoot(div);
  root.render(<HikingPage />);
});
