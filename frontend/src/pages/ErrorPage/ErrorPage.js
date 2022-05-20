import * as React from 'react';
import Typography from '@mui/material/Typography';
import AppFooter from '../../components/AppFooter/AppFooter';
import NavigationBar from '../../components/AppAppBar/NavigationBar';
import withRoot from '../../config/withRoot';

function ErrorPage() {
  return (
    <>
      <NavigationBar/>
      <main style={{ padding: '1rem' }}>
        <Typography>{'There\'s nothing here!'}</Typography>
      </main>
      <AppFooter/>
    </>
  );
}

export default withRoot(ErrorPage);
