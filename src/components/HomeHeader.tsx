import { Button, Stack, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import HomeNav from './HomeNav';
import SocialLinks from './SocialLinks';

const HomeHeader = () => {
  return (
    <header
      style={{
        background: 'rgba(0,0,0,0.7)',
        position: 'fixed',
        width: '100%',
        padding: '1rem',
      }}
    >
      <Stack direction='row' alignItems='center' spacing={2}>
        <Typography style={{ fontSize: '1.5rem' }}>LOGO</Typography>
        <SocialLinks />
        <HomeNav style={{ marginLeft: 'auto' }} />
        <Button
          variant='contained'
          size='small'
          color='primary'
          component={Link}
          to='/portal'
        >
          Member's Portal
        </Button>
      </Stack>
    </header>
  );
};

export default HomeHeader;
