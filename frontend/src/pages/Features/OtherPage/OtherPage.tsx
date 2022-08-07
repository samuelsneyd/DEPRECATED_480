import * as React from 'react';
import { useState, useEffect } from 'react';
import { Container, Grid, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import axios from 'axios';
import PageTitle from '../../../components/PageTitle/PageTitle';
import Carousel from 'react-material-ui-carousel';
import CarouselImage from '../../../components/CarouselImage/CarouselImage';
import withAnimation from '../../../hooks/withAnimation';

const fallbackImages = [
  {
    title: 'Rainbow',
    alt: 'A rainbow at 480',
    image: '../../../../static/images/rainbow.jpg'
  }
];

const OtherPage = () => {
  const [images, setImages] = useState(fallbackImages);

  useEffect(() => {
    axios.get('/api/images?tag=other')
      .then((response) => {
        response.data?.length > 0 ? setImages(response.data) : null;
      })
      .catch(() => setImages(fallbackImages));
  }, []);

  return (
    <Container>
      <PageTitle title={'Further Afield'} />
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
            {'Other activities in the area'}
          </Typography>
          <Typography sx={{ my: 1 }}>
            {'Within 60 minutes drive you can explore Whangarei and the '}
            <Link to={'https://www.hundertwasserartcentre.co.nz/'}>{'Hunterwasser Art Centre'}</Link>.
          </Typography>
          <Typography sx={{ my: 1 }}>
            {' There\'s a nice walk around '}
            <Link
              to={'https://www.wdc.govt.nz/Community/Parks-and-recreation/Parks-and-reserves/Otuihau-Whangarei-Falls'}
            >
              {'Whangarei Falls'}
            </Link>
            {' or climb up '}
            <Link to={'https://www.wdc.govt.nz/Community/Parks-and-recreation/Parks-and-reserves/Parihaka'}>
              {'Parihaka'}
            </Link>
            {'.'}
          </Typography>
          <Typography sx={{ my: 1 }}>
            {'If you’re feeling adventurous you can go underground at '}
            <Link to={'https://www.wdc.govt.nz/Community/Parks-and-recreation/Parks-and-reserves/Abbey-Caves'}>
              {'Abbey Caves'}
            </Link>
            {'.'}
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default withAnimation(OtherPage);
