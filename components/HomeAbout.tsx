import { Stack, Theme, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';
import { useInView } from 'react-intersection-observer';
import useAnimation from '../hooks/useAnimation';
import theme from '../theme';
import SaltShaker from './SaltShaker';

const useStyles = makeStyles((theme: Theme) => ({
  saltShaker: {
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
    animation: '$pulse 1000ms infinite ease-in-out',
  },
  '@keyframes pulse': {
    '0%': {
      transform: 'scale(1)',
    },
    '50%': {
      transform: 'scale(1.05)',
    },
    '100%': {
      transform: 'scale(1)',
    },
  },
  card: {
    padding: '3rem',
    background: 'rgba(0, 0, 0, 0.7)',
    backdropFilter: 'blur(8px)',
    border: '2px solid white',
    borderRadius: '30px',
    width: '50%',
    textShadow: '2px 2px 2px #000',
    [theme.breakpoints.down('md')]: {
      width: '100%',
    },
  },
}));

const HomeAbout = () => {
  const classes = useStyles();
  const [cardRef, , cardEntry] = useInView({ delay: 200 });
  const [shakerRef, , shakerEntry] = useInView({ delay: 200 });

  const cardIsIntersecting = cardEntry?.isIntersecting;
  const shakerIsIntersecting = shakerEntry?.isIntersecting;

  const cardAnimation = useAnimation('slideRight', cardIsIntersecting);
  const shakerAnimation = useAnimation('slideLeft', shakerIsIntersecting);

  return (
    <section
      style={{
        padding: '15vw 0',
        backgroundColor: '#070707',
        overflow: 'hidden',
      }}
    >
      <Stack
        direction='row'
        justifyContent='space-around'
        alignItems='center'
        style={{
          padding: '10rem 5%',
          backgroundImage: `url('/images/salt.webp')`,
          backgroundSize: 'contain',
          backgroundPosition: 'left',
          backgroundRepeat: 'no-repeat',
          backgroundColor: '#070707',
        }}
      >
        <Stack
          direction='column'
          spacing={3}
          className={classes.card}
          ref={cardRef}
          style={{ ...cardAnimation }}
        >
          <Typography component='h2' variant='h4'>
            What is{' '}
            <span style={{ color: theme.palette.primary.main }}>Salt</span>{' '}
            Society?
          </Typography>
          <Typography>
            Lorem ipsum dolor sit amet consectetur, <b>adipisicing elit</b>. Est
            quos nemo, laboriosam doloremque odio quasi sapiente ut, ipsum
            distinctio numquam dicta ex cum neque atque expedita? Nihil
            excepturi dicta ipsam?
          </Typography>
          <Typography>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          </Typography>
          <Typography>
            Lorem ipsum dolor sit <b>amet consectetur</b>, adipisicing elit. Est
            quos nemo, laboriosam doloremque odio quasi sapiente ut, ipsum
            distinctio numquam dicta.
          </Typography>
          <Typography>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est quos
            nemo, laboriosam doloremque odio quasi sapiente ut,{' '}
            <b>ipsum distinctio</b> numquam dicta ex cum neque atque expedita?
            Nihil excepturi dicta ipsam?
          </Typography>
        </Stack>

        <div ref={shakerRef} className={classes.saltShaker}>
          <SaltShaker style={{ ...shakerAnimation }} />
        </div>
      </Stack>
    </section>
  );
};

export default HomeAbout;
