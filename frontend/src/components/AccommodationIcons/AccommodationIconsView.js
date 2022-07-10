import * as React from 'react';
import { Grid, Typography } from '@mui/material';

const AccommodationIconsView = ({ iconsLeft, iconsRight }) => {
  const setUpIcon = ({ text, icon: Icon }) => {
    return (
      <Typography
        key={text}
        sx={{
          mt: 1,
          mb: 1
        }}>
        <Icon />
        {` ${text}`}
      </Typography>
    );
  };

  return (
    <Grid container>
      <Grid item xs={6}>
        {iconsLeft.map((icon) => setUpIcon(icon))}
      </Grid>
      <Grid item xs={6}>
        {iconsRight.map((icon) => setUpIcon(icon))}
      </Grid>
    </Grid>
  );
};

export default AccommodationIconsView;
