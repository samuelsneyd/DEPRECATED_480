import * as React from 'react';
import { Container } from '@mui/material';
import PageTitle from '../../../components/PageTitle/PageTitle';
import withAnimation from '../../../hooks/withAnimation';

const FoodPage = () => {
  return (
    <Container>
      <PageTitle title={'Food'} />
    </Container>
  );
};

export default withAnimation(FoodPage);
