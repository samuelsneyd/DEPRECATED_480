import * as React from 'react';
import { useState } from 'react';
import CallToActionView from './CallToActionView';

const CallToAction = () => {
  const [open, setOpen] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  return (
    <CallToActionView
      open={open}
      handleSubmit={handleSubmit}
      handleClose={handleClose}
    />
  );
};

export default CallToAction;
