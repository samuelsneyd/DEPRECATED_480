import * as React from 'react';
import { Box, Container, styled, SxProps, Theme } from '@mui/material';

const ProductHeroLayoutRoot = styled('section')(({ theme }) => ({
  color: theme.palette.common.white,
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  [theme.breakpoints.down('sm')]: {
    height: '95vh'
  },
  [theme.breakpoints.up('sm')]: {
    height: '95vh',
    minHeight: 500,
    maxHeight: 1300
  }
}));

const Background = styled(Box)({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  zIndex: -2
});

interface HeroHeaderLayoutProps {
  sxBackground: SxProps<Theme>;
}

const HeroHeaderLayout = (props: React.HTMLAttributes<HTMLDivElement> & HeroHeaderLayoutProps) => {
  const { children, sxBackground } = props;

  return (
    <ProductHeroLayoutRoot>
      <Container
        sx={{
          mt: 8,
          mb: 14,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}
      >
        {children}
        <Box
          sx={{
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            backgroundColor: 'common.black',
            opacity: 0.5,
            zIndex: -1
          }}
        />
        <Background sx={sxBackground} />
        <Box
          component="img"
          src="../../../../static/images/icons/productHeroArrowDown.png"
          height="16"
          width="12"
          alt="arrow down"
          sx={{
            position: 'absolute',
            bottom: 32
          }}
        />
      </Container>
    </ProductHeroLayoutRoot>
  );
};

export default HeroHeaderLayout;
