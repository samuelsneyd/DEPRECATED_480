import * as React from 'react';
import Container from '@mui/material/Container';
import PageTitle from '../../components/PageTitle/PageTitle';
import Features from '../../components/Features/Features';
import withAnimation from '../../hooks/withAnimation';

const FeaturesPage = () => {
  return (
    <Container>
      <PageTitle title={'In the Area'} />
      <Features />
    </Container>
  );
};

export default withAnimation(FeaturesPage);
