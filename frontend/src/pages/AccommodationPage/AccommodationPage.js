import * as React from 'react';
import { Grid, Typography } from '@mui/material';
import Container from '@mui/material/Container';
import Carousel from 'react-material-ui-carousel';
import AccommodationIcons from '../../components/AccommodationIcons/AccommodationIcons';
import CarouselImage from '../../components/CarouselImage/CarouselImage';
import PageTitle from '../../components/PageTitle/PageTitle';
import withAnimation from '../../hooks/withAnimation';

const images = [
  {
    title: 'Accommodation',
    src: '../../../../static/images/accommodation.jpg'
  }
];

const AccommodationPage = () => {
  return (
    <Container>
      <PageTitle title={'Your Loft'} />
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
            {'See your loft'}
          </Typography>
          <Typography sx={{ mt: 1, mb: 1 }}>
            {'Luxury accommodation right on the edge of native forests.'}
          </Typography>
          <Typography sx={{ mt: 1, mb: 1 }}>
            {'Features a double bed, living area, full kitchen, and acres of outdoor space.'}
          </Typography>
          <AccommodationIcons />
        </Grid>
      </Grid>
    </Container>
  );
};

export default withAnimation(AccommodationPage);
