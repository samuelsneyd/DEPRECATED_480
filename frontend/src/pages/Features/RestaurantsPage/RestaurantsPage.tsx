import * as React from 'react';
import { Container } from '@mui/material';
import PageTitle from '../../../components/PageTitle/PageTitle';
import Restaurants from '../../../components/Restaurants/Restaurants';
import withAnimation from '../../../hooks/withAnimation';

const RestaurantsPage = () => {
  return (
    <Container>
      <PageTitle title={'Restaurants'} />
      <Restaurants />
    </Container>
  );
};

export default withAnimation(RestaurantsPage);
