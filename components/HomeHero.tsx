import { Twitter } from '@mui/icons-material';
import { Button, Stack, Typography, useMediaQuery } from '@mui/material';
import { useInView } from 'react-intersection-observer';
import config from '../config/config';
import theme from '../theme';
import DiscordIcon from './DiscordIcon';

const HomeHero = () => {
  const mdDown = useMediaQuery(theme.breakpoints.down('md'));
  const smDown = useMediaQuery(theme.breakpoints.down('sm'));
  const [subtitleRef, , subtitleEntry] = useInView();
  const [titleRef, , titleEntry] = useInView();
  const [buttonsRef, , buttonsEntry] = useInView();

  return (
    <section
      style={{
        height: 700,
        boxShadow: 'inset 0 0 0 1000px rgba(0,0,0,0.45)',
        backgroundImage: `url('/images/hero.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        display: 'grid',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Stack spacing={2} alignItems='center'>
        <Typography
          ref={subtitleRef}
          style={{
            textTransform: 'uppercase',
            fontWeight: 'bold',

            // animation
            transition: '500ms',
            transform: subtitleEntry?.isIntersecting
              ? 'translateX(0)'
              : 'translateX(-50vw)',
          }}
          align='center'
        >
          Welcome To
        </Typography>
        <Typography
          ref={titleRef}
          align='center'
          component='h1'
          variant={mdDown ? 'h2' : 'h1'}
          style={{
            textTransform: 'uppercase',
            fontWeight: 'bold',
            marginBottom: '1rem',

            // animation
            transition: '500ms',
            transform: titleEntry?.isIntersecting
              ? 'translateX(0)'
              : 'translateX(-50vw)',
          }}
        >
          <span style={{ color: theme.palette.primary.main }}>Salt</span>{' '}
          Society
        </Typography>

        <Stack
          ref={buttonsRef}
          direction={smDown ? 'column' : 'row'}
          justifyContent='center'
          alignItems='center'
          flexWrap='wrap'
          spacing={2}
          style={{
            // animation
            transition: '500ms',
            transform: buttonsEntry?.isIntersecting
              ? 'translateX(0)'
              : 'translateX(-50vw)',
          }}
        >
          <Button
            variant='contained'
            color='secondary'
            startIcon={<DiscordIcon color='white' />}
            component='a'
            href={config.discord}
          >
            Join Our Discord
          </Button>
          <Button
            component='a'
            href={config.twitter}
            variant='contained'
            color='secondary'
            startIcon={<Twitter />}
          >
            Follow Our Twitter
          </Button>
        </Stack>
      </Stack>
    </section>
  );
};

export default HomeHero;
