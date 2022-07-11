import * as React from 'react';
import { Container, Grid, Typography } from '@mui/material';
import Carousel from 'react-material-ui-carousel';
import CarouselImage from '../../../components/CarouselImage/CarouselImage';
import PageTitle from '../../../components/PageTitle/PageTitle';
import withAnimation from '../../../hooks/withAnimation';

const images = [
  {
    title: 'Night Sky 2',
    src: '../../../../static/images/night-sky-2.jpg'
  },
  {
    title: 'Night Sky 1',
    src: '../../../../static/images/night-sky.jpg'
  }
];

const StargazingPage = () => {
  return (
    <Container>
      <PageTitle title={'Stargazing'} />
      <Grid container spacing={2} minHeight={450} sx={{ mb: 1}}>
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
            {'View the stars'}
          </Typography>
          <Typography sx={{ mt: 1, mb: 1 }}>
            {'Northland is home to some of the most beautiful night skies in all of New Zealand.'}
          </Typography>
          <Typography sx={{ mt: 1, mb: 1 }}>
            {'With very little light pollution, the dark and clear skies are filled with beauty throughout the year.'}
          </Typography>
          <Typography sx={{ mt: 1, mb: 1 }}>
            {'View the Milky Way, Matariki, Southern Cross, and many other constellations, all while listening to the '}
            {'song of native birds.'}
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default withAnimation(StargazingPage);
