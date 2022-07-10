import * as React from 'react';
import { createRoot } from 'react-dom/client';
import AnimatedRoutes from './AnimatedRoutes';

jest.mock('../static/legal/privacy.md', () => () => '<div>Privacy</div>');
jest.mock('../static/legal/terms.md', () => () => '<div>Terms</div>');

it('renders App without crashing', () => {
  const div = document.createElement('div');
  const root = createRoot(div);
  root.render(<AnimatedRoutes />);
});