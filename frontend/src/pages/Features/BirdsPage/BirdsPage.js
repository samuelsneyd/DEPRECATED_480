import * as React from 'react';
import { useEffect, useState } from 'react';
import { Container, Grid, Typography } from '@mui/material';
import axios from 'axios';
import Carousel from 'react-material-ui-carousel';
import CarouselImage from '../../../components/CarouselImage/CarouselImage';
import PageTitle from '../../../components/PageTitle/PageTitle';
import withAnimation from '../../../hooks/withAnimation';

const fallbackImages = [
  {
    title: 'Bird 1',
    src: '../../../../static/images/bird.jpg',
    id: 1
  }
];

const BirdsPage = () => {
  const [images, setImages] = useState(fallbackImages);

  useEffect(() => {
    return () => {
      axios.get('/api/images?tag=birds')
        .then((response) => {
          response.data?.length > 0 ? setImages(response.data) : null;
        })
        .catch(() => setImages(fallbackImages));
    };
  }, []);

  return (
    <Container>
      <PageTitle title={'Birds'} />
      <Grid container spacing={2} minHeight={450} sx={{ mb: 1 }}>
        <Grid item xs={12} md={6}>
          <Carousel
            animation={'fade'}
            duration={2000}
            swipe
          >
            {images.map((image) => <CarouselImage key={image.id} image={image} />)}
          </Carousel>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant={'h5'}>
            {'See the wildlife'}
          </Typography>
          <Typography sx={{ mt: 1, mb: 1 }}>
            {'The forests and bush are filled with native birds.'}
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default withAnimation(BirdsPage);
