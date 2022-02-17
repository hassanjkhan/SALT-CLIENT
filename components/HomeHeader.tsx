/* eslint-disable react/no-unescaped-entities */
import { Close, Menu } from '@mui/icons-material';
import {
  Button,
  Drawer,
  IconButton,
  Stack,
  useMediaQuery,
} from '@mui/material';
import Link from 'next/link';
import React, { useState } from 'react';
import config from '../config/config';
import theme from '../theme';
import HomeNav from './HomeNav';
import SocialLinks from './SocialLinks';

const HomeHeader = () => {
  const mdDown = useMediaQuery(theme.breakpoints.down('md'));
  const [open, setOpen] = useState(false);

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
        {config.logo}
        {mdDown ? (
          <>
            <IconButton
              style={{ marginLeft: 'auto' }}
              onClick={() => setOpen(true)}
            >
              <Menu />
            </IconButton>
            <Drawer anchor={'left'} open={open}>
              <div
                style={{
                  width: '100vw',
                  height: '100%',
                  padding: '1rem',
                  background: theme.palette.background.default,
                }}
              >
                <Stack direction='row' spacing={2} style={{ width: '100%' }}>
                  {config.logo}
                  <IconButton
                    style={{ marginLeft: 'auto' }}
                    onClick={() => setOpen(false)}
                  >
                    <Close />
                  </IconButton>
                </Stack>
                <Stack
                  alignItems='center'
                  justifyContent='center'
                  style={{ height: '90%' }}
                  spacing={4}
                >
                  <HomeNav
                    direction='column'
                    spacing={4}
                    onClick={() => setOpen(false)}
                  />
                  <Link href='/portal' passHref>
                    <Button
                      variant='contained'
                      size='small'
                      color='primary'
                      onClick={() => setOpen(false)}
                    >
                      Member's Portal
                    </Button>
                  </Link>

                  <SocialLinks />
                </Stack>
              </div>
            </Drawer>
          </>
        ) : (
          <>
            <SocialLinks />
            <HomeNav style={{ marginLeft: 'auto' }} />
            <Link href='/portal' passHref>
              <Button
                component='a'
                variant='contained'
                size='small'
                color='primary'
              >
                Member's Portal
              </Button>
            </Link>
          </>
        )}
      </Stack>
    </header>
  );
};

export default HomeHeader;
