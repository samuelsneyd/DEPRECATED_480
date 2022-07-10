import * as React from 'react';
import { Container } from '@mui/material';
import PageTitle from '../../../components/PageTitle/PageTitle';
import withAnimation from '../../../hooks/withAnimation';

const BirdwatchingPage = () => {
  return (
    <Container>
      <PageTitle title={'Birdwatching'} />
    </Container>
  );
};

export default withAnimation(BirdwatchingPage);
