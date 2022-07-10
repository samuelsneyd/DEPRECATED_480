import * as React from 'react';
import { Container } from '@mui/material';
import PageTitle from '../../../components/PageTitle/PageTitle';
import withAnimation from '../../../hooks/withAnimation';

const BoatingPage = () => {
  return (
    <Container>
      <PageTitle title={'Boating'} />
    </Container>
  );
};

export default withAnimation(BoatingPage);
