import * as React from 'react';
import { createRoot } from 'react-dom/client';
import ActivitiesPage from './ActivitiesPage';

it('renders ActivitiesPage without crashing', () => {
  const div = document.createElement('div');
  const root = createRoot(div);
  root.render(<ActivitiesPage />);
});
