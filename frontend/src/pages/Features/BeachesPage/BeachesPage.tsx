import * as React from 'react';
import { Container, Grid, Typography } from '@mui/material';
import Carousel from 'react-material-ui-carousel';
import CarouselImage from '../../../components/CarouselImage/CarouselImage';
import PageTitle from '../../../components/PageTitle/PageTitle';
import withAnimation from '../../../hooks/withAnimation';
import { useEffect, useState } from 'react';
import axios from 'axios';

const fallbackImages = [
  {
    title: 'Beach',
    alt: 'A beach',
    image: '../../../../static/images/beach.jpg'
  }
];

const BeachesPage = () => {
  const [images, setImages] = useState(fallbackImages);

  useEffect(() => {
    axios.get('/api/images?tag=beaches')
      .then((response) => {
        response.data?.length > 0 ? setImages(response.data) : null;
      })
      .catch(() => setImages(fallbackImages));
  }, []);

  return (
    <Container>
      <PageTitle title={'Beaches'} />
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
            {'Explore the beaches'}
          </Typography>
          <Typography sx={{ my: 1 }}>
            {'With numerous sandy beaches, quiet coves, and a great view of the open ocean, there\'s always somewhere '}
            {'to swim, surf, kayak, sunbath, or walk along.'}
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default withAnimation(BeachesPage);
