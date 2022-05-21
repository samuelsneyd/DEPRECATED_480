import * as React from 'react';
import Typography from '@mui/material/Typography';
import withRoot from '../../config/withRoot';

const ErrorPage = () => {
  return (
    <main style={{ padding: '1rem' }}>
      <Typography>{'There\'s nothing here!'}</Typography>
    </main>
  );
};

export default withRoot(ErrorPage);
