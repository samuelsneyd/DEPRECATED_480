import * as React from 'react';
import { Container } from '@mui/material';
import PageTitle from '../../../components/PageTitle/PageTitle';
import withAnimation from '../../../hooks/withAnimation';

const BeachesPage = () => {
  return (
    <Container>
      <PageTitle title={'Beaches'} />
    </Container>
  );
};

export default withAnimation(BeachesPage);
