import * as React from 'react';
import { useEffect, useState } from 'react';
import { Container, Grid, Typography } from '@mui/material';
import Carousel from 'react-material-ui-carousel';
import CarouselImage from '../../components/CarouselImage/CarouselImage';
import PageTitle from '../../components/PageTitle/PageTitle';
import withAnimation from '../../hooks/withAnimation';
import axios from 'axios';
import config from '../../config/config';

const fallbackImages = [
  {
    title: 'Misty Mountains',
    alt: 'Misty mountains',
    image: '../../../../static/images/misty-mountains.jpg',
    src: ''
  }
];

const AboutPage = () => {
  const [images, setImages] = useState(fallbackImages);

  useEffect(() => {
    axios.get('/api/images?tag=about')
      .then((response) => {
        response.data?.length > 0 ? setImages(response.data) : null;
      })
      .catch(() => setImages(fallbackImages));
  }, []);

  return (
    <Container>
      <PageTitle title={'About Us'} />
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
            {`What makes ${config.siteName} special`}
          </Typography>
          <Typography sx={{ my: 1 }}>
            {`Nestled in the beautiful Northland region, a 10-minute drive from the Tutukaka marina, ${config.siteName}\
              is an experience like no other.`}
          </Typography>
          <Typography sx={{ my: 1 }}>
            {`Visit for a short weekend away, or stay longer for a holiday in one of New Zealand's most beautiful \
              areas.`}
          </Typography>
          <Typography sx={{ my: 1 }}>
            {`While you're here, charter a boat to the Poor Knights Islands, go scuba diving or snorkeling, go for a \
              hike in the bush, and spend time on one of Tutukaka's many beautiful beaches.`}
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default withAnimation(AboutPage);
