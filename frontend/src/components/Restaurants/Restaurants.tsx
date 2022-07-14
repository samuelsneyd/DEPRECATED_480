import * as React from 'react';
import { Box, Divider, Grid, Link, Stack, Typography } from '@mui/material';
import Carousel from 'react-material-ui-carousel';
import CarouselImage from '../CarouselImage/CarouselImage';


const fallbackImages = [
  {
    title: 'Cake',
    alt: 'Cake',
    image: '../../../../static/images/cake.jpg',
    id: 1,
    src: ''
  }
];

const restaurants = [
  {
    title: 'Schnappa Rock',
    description: `Located in the Tutukaka Marina, Schnappa Rock Restaurant and bar is a haven of tropical escapism.\
                  Perfect for post-dive drinks, romantic dining, or a family meal.`,
    website: 'https://www.schnapparock.co.nz/'
  },
  {
    title: 'Tutukaka Marina Pizza Bar & Grill',
    description: `Right on the waterfront in the Tutukaka Marina, this pizzeria servers hand-made Napoli style pizzas,\
                  pasta, and fresh cockles.`,
    website: 'https://www.facebook.com/TutukakaPizza/'
  }
];

const Restaurants = () => {
  return (
    <Grid container spacing={2} minHeight={450} sx={{ mb: 4 }}>
      <Grid item xs={12} md={6}>
        <Carousel
          animation={'fade'}
          duration={2000}
          swipe
        >
          {fallbackImages.map((image) => <CarouselImage key={image.id} image={image} />)}
        </Carousel>
      </Grid>
      <Grid item xs={12} md={6}>
        <Stack
          direction={'column'}
          divider={<Divider orientation={'horizontal'} flexItem />}
          spacing={2}
        >
          <Box>
            <Typography variant={'h5'}>
              {'Looking for restaurants?'}
            </Typography>
            <Typography sx={{ mt: 1, mb: 1 }}>
              {`While a full kitchen and dining area is included with your room, there are plenty of great places to\
                eat out on the Tutukaka coast.`}
            </Typography>
          </Box>
          {restaurants.map((restaurant) => (
            <Box key={restaurant.title}>
              <Typography variant={'h5'}>
                {restaurant.title}
              </Typography>
              <Typography sx={{ my: 1 }}>
                {restaurant.description}
              </Typography>
              <Link
                href={restaurant.website}
                target={'_blank'}
              >
                {'See the menu'}
              </Link>
            </Box>
          ))}
        </Stack>
      </Grid>
    </Grid>
  );
};

export default Restaurants;
