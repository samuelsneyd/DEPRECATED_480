import * as React from 'react';
import { Container, Grid, Typography } from '@mui/material';
import GoogleMapsLocation from '../../components/GoogleMapsLocation/GoogleMapsLocation';
import PageTitle from '../../components/PageTitle/PageTitle';
import config from '../../config/config';
import withAnimation from '../../hooks/withAnimation';

const LocationPage = () => {
  return (
    <Container>
      <PageTitle title={'Location'} />
      <Grid container spacing={2} minHeight={450} sx={{ mb: 4 }}>
        <Grid item xs={12} md={6}>
          <GoogleMapsLocation />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant={'h5'}>
            {'Where to find us'}
          </Typography>
          <Typography sx={{ my: 1 }}>
            {'Located a short drive away from the Tutukaka marina, Retreat 480 is tucked away at the end of Waiotoi Road.'}
          </Typography>
          <Typography sx={{ my: 1 }}>
            {'Follow the driveway at the end of Waiotoi road until the Kiwi sign, then look out for the 480 sign.'}
          </Typography>
          <Typography sx={{ my: 1 }}>
            {'Turn right at the 480 sign, then you will have arrived.'}
          </Typography>
          <Typography
            sx={{ my: 1 }}
            component={'address'}
          >
            {config.address}
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default withAnimation(LocationPage);
