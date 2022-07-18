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
    title: 'School of fish',
    alt: 'School of fish',
    image: '../../../../static/images/school-of-fish.jpg'
  }
];

const SwimmingPage = () => {
  const [images, setImages] = useState(fallbackImages);

  useEffect(() => {
    axios.get('/api/images?tag=swimming')
      .then((response) => {
        response.data?.length > 0 ? setImages(response.data) : null;
      })
      .catch(() => setImages(fallbackImages));
  }, []);

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
          <Typography sx={{ my: 1 }}>
            {'Just twenty-three kilometres off the Tutukaka coast are the Poor Knights Islands (Tawhiti Rahi), one of '}
            {'the world\'s best locations for scuba diving, snorkeling, and swimming.'}
          </Typography>
          <Typography sx={{ my: 1 }}>
            {'Closer to shore, there are a plethora of sandy beaches and quiet coves for swimming, kayaking, surfing, '}
            {'and sunbathing.'}
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default withAnimation(SwimmingPage);
