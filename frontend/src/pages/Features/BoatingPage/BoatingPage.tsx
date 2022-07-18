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
    title: 'Marina boats',
    alt: 'Marina boats',
    image: '../../../../static/images/marina-boats.jpg'
  },
  {
    title: 'Boat on the ocean',
    alt: 'Boat on the ocean',
    image: '../../../../static/images/boat.jpg'
  }
];

const BoatingPage = () => {
  const [images, setImages] = useState(fallbackImages);

  useEffect(() => {
    axios.get('/api/images?tag=boating')
      .then((response) => {
        response.data?.length > 0 ? setImages(response.data) : null;
      })
      .catch(() => setImages(fallbackImages));
  }, []);

  return (
    <Container>
      <PageTitle title={'Boating'} />
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
            {'Explore the ocean'}
          </Typography>
          <Typography sx={{ mt: 1, mb: 1 }}>
            {'A stone\'s throw away from the Poor Knights Islands and Marine Reserve, the Northland oceans are a once '}
            {'in a lifetime stop for all things on and below the water.'}
          </Typography>
          <Typography sx={{ mt: 1, mb: 1 }}>
            {'Charter a boat at the Tutukaka marina to see the Knights. Plunge into the depths with scuba diving or '}
            {'snorkeling packages in one of the world\'s best dive sites.'}
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default withAnimation(BoatingPage);
