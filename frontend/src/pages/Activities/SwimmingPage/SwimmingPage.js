import * as React from 'react';
import { Container } from '@mui/material';
import PageTitle from '../../../components/PageTitle/PageTitle';
import withAnimation from '../../../hooks/withAnimation';

const SwimmingPage = () => {
  return (
    <Container>
      <PageTitle title={'Swimming'} />
    </Container>
  );
};

export default withAnimation(SwimmingPage);
