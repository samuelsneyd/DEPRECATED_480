import * as React from 'react';
import { Container, Grid, Typography } from '@mui/material';
import Carousel from 'react-material-ui-carousel';
import CarouselImage from '../../../components/CarouselImage/CarouselImage';
import PageTitle from '../../../components/PageTitle/PageTitle';
import withAnimation from '../../../hooks/withAnimation';

const images = [
  {
    title: 'School of fish',
    src: '../../../../static/images/school-of-fish.jpg'
  }
];

const SwimmingPage = () => {
  return (
    <Container>
      <PageTitle title={'Swimming'} />
      <Grid container spacing={2} minHeight={450} sx={{ mb: 1 }}>
        <Grid item xs={12} md={6}>
          <Carousel
            animation={'fade'}
            duration={2000}
            swipe
          >
            {images.map((image) => <CarouselImage key={image.title} image={image} />)}
          </Carousel>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant={'h5'}>
            {'View the sea'}
          </Typography>
          <Typography sx={{ mt: 1, mb: 1 }}>
            {'Just twenty-three kilometres off the Tutukaka coast are the Poor Knights Islands (Tawhiti Rahi), one of '}
            {'the world\'s best locations for scuba diving, snorkeling, and swimming.'}
          </Typography>
          <Typography sx={{ mt: 1, mb: 1 }}>
            {'Closer to shore, there are a plethora of sandy beaches and quiet coves for swimming, kayaking, surfing, '}
            {'and sunbathing.'}
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default withAnimation(SwimmingPage);