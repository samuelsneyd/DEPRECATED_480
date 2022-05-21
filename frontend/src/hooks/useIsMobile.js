import { useTheme } from '@emotion/react';
import { useMediaQuery } from '@mui/material';

const useIsMobile = (breakpoint = 'sm') => {
  const theme = useTheme();
  return useMediaQuery(theme.breakpoints.down(breakpoint));
};

export default useIsMobile;
