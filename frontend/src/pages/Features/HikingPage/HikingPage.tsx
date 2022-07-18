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
    title: 'Mountains',
    alt: 'Mountains',
    image: '../../../../static/images/misty-mountains.jpg'
  },
  {
    title: 'Rainbow',
    alt: 'Rainbow',
    image: '../../../../static/images/rainbow.jpg'
  }
];

const HikingPage = () => {
  const [images, setImages] = useState(fallbackImages);

  useEffect(() => {
    axios.get('/api/images?tag=hiking')
      .then((response) => {
        response.data?.length > 0 ? setImages(response.data) : null;
      })
      .catch(() => setImages(fallbackImages));
  }, []);

  return (
    <Container>
      <PageTitle title={'Hiking'} />
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
            {'See the scenery'}
          </Typography>
          <Typography sx={{ my: 1 }}>
            {'The forests and bush are a great place for anything from short walks to long hikes.'}
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default withAnimation(HikingPage);
