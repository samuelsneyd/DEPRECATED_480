import * as React from 'react';
import config from '../../config/config';

function Copyright() {
  return (
    <>
      {`© ${config.siteName} `}
      {new Date().getFullYear()}
    </>
  );
}

export default Copyright;
