import * as React from 'react';
import { Container } from '@mui/material';
import GoogleMapsLocation from '../../components/GoogleMapsLocation/GoogleMapsLocation';
import PageTitle from '../../components/PageTitle/PageTitle';

const LocationPage = () => {
  return (
    <Container>
      <PageTitle title={'Location'} />
      <GoogleMapsLocation />
    </Container>
  );
};

export default LocationPage;
