import * as React from 'react';
import { createRoot } from 'react-dom/client';
import BoatingPage from './BoatingPage';

it('renders BoatingPage without crashing', () => {
  const div = document.createElement('div');
  const root = createRoot(div);
  root.render(<BoatingPage />);
});
