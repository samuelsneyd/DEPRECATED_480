import * as React from 'react';
import Typography from '@mui/material/Typography';
import AppFooter from '../../components/AppFooter/AppFooter';
import NavigationBar from '../../components/AppAppBar/NavigationBar';
import withRoot from '../../config/withRoot';

function BookingPage() {
  return (
    <>
      <NavigationBar/>
      <main style={{ padding: '1rem' }}>
        <Typography>{'Coming soon'}</Typography>
      </main>
      <AppFooter/>
    </>
  );
}

export default withRoot(BookingPage);
