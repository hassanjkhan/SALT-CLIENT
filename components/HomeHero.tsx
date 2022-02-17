import { Twitter } from '@mui/icons-material';
import { Button, Stack, Typography, useMediaQuery } from '@mui/material';
import { useInView } from 'react-intersection-observer';
import config from '../config/config';
import useAnimation from '../hooks/useAnimation';
import theme from '../theme';
import DiscordIcon from './DiscordIcon';

const HomeHero = () => {
  const mdDown = useMediaQuery(theme.breakpoints.down('md'));
  const smDown = useMediaQuery(theme.breakpoints.down('sm'));

  const [subtitleRef, , subtitleEntry] = useInView({ delay: 100 });
  const [titleRef, , titleEntry] = useInView({ delay: 100 });
  const [buttonsRef, , buttonsEntry] = useInView({ delay: 100 });

  const isSubtitleIntersecting = subtitleEntry?.isIntersecting;
  const isTitleIntersecting = titleEntry?.isIntersecting;
  const isButtonsIntersecting = buttonsEntry?.isIntersecting;

  const subtitleAnimation = useAnimation('slideRight', isSubtitleIntersecting);
  const titleAnimation = useAnimation('slideRight', isTitleIntersecting);
  const buttonsAnimation = useAnimation('slideRight', isButtonsIntersecting);

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
            ...subtitleAnimation,
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
            ...titleAnimation,
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
            ...buttonsAnimation,
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
