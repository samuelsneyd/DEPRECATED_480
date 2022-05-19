import { Typography } from '@mui/material';
import * as React from 'react';
import config from '../../config/config';

function Copyright() {
  return (
    <Typography>
      {`© ${new Date().getFullYear()} ${config.siteName}`}
    </Typography>
  );
}

export default Copyright;
