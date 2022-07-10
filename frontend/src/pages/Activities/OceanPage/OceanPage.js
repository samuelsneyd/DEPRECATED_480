import * as React from 'react';
import { Container } from '@mui/material';
import PageTitle from '../../../components/PageTitle/PageTitle';
import withAnimation from '../../../hooks/withAnimation';

const OceanPage = () => {
  return (
    <Container>
      <PageTitle title={'Ocean'} />
    </Container>
  );
};

export default withAnimation(OceanPage);
