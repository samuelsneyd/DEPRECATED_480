import * as React from 'react';
import { Box, Typography } from '@mui/material';

const PageTitle = ({ title }) => {
  return (
    <Box sx={{ mt: 7, mb: 7 }}>
      <Typography
        variant={'h3'}
        gutterBottom
        marked={'center'}
        align={'center'}
      >
        {title}
      </Typography>
    </Box>
  );
};

export default PageTitle;
