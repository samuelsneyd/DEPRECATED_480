import * as React from 'react';
import { createRoot } from 'react-dom/client';
import SwimmingPage from './SwimmingPage';

it('renders SwimmingPage without crashing', () => {
  const div = document.createElement('div');
  const root = createRoot(div);
  root.render(<SwimmingPage />);
});
