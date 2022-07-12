import * as React from 'react';
import { Alert, AlertTitle, Snackbar } from '@mui/material';

type SendEmailSnackbarProps = {
  isSent: boolean,
  setIsSent: (isSent: boolean) => void,
  failSend: boolean,
  setFailSend: (isSent: boolean) => void
};

const SendEmailSnackbar = (props: SendEmailSnackbarProps) => {
  const {
    isSent,
    setIsSent,
    failSend,
    setFailSend
  } = props;

  return (
    <>
      <Snackbar
        open={isSent}
        onClick={() => setIsSent(false)}
      >
        <Alert
          onClose={() => setIsSent(false)}
          severity={'success'}
          sx={{ width: '100%' }}
        >
          <AlertTitle>{'Success'}</AlertTitle>
          {'Email sent successfully'}
        </Alert>
      </Snackbar>
      <Snackbar
        open={failSend}
        onClick={() => setFailSend(false)}
      >
        <Alert
          onClose={() => setFailSend(false)}
          severity={'error'}
          sx={{ width: '100%' }}
        >
          <AlertTitle>{'Error'}</AlertTitle>
          {'Error sending email! Please try again'}
        </Alert>
      </Snackbar>
    </>
  );
};

export default SendEmailSnackbar;
