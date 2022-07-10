import * as React from 'react';
import Container from '@mui/material/Container';
import PageTitle from '../../components/PageTitle/PageTitle';
import withAnimation from '../../hooks/withAnimation';

const AboutPage = () => {
  return (
    <Container>
      <PageTitle title={'About'} />
    </Container>
  );
};

export default withAnimation(AboutPage);
