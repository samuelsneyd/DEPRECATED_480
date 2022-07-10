import * as React from 'react';
import { Container } from '@mui/material';
import PageTitle from '../../../components/PageTitle/PageTitle';
import withAnimation from '../../../hooks/withAnimation';

const HikingPage = () => {
  return (
    <Container>
      <PageTitle title={'Hiking'} />
    </Container>
  );
};

export default withAnimation(HikingPage);
