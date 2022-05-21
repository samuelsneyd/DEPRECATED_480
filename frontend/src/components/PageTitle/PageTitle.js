import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const PageTitle = (props) => {
  const { title } = props;

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
