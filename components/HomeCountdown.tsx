import { Stack, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React, { useEffect } from 'react';
import ProgressCircle from '../components/ProgressCircle';
import { useTimer } from 'react-timer-hook';
import theme from '../theme';

const useStyles = makeStyles({
  countdownValue: {
    marginBottom: '0.5rem',
  },
  countdownLabel: {
    textTransform: 'uppercase',
    fontSize: '1.25rem',
    fontWeight: 'bold',
    color: '#414141',
  },
});

const HomeCountdown = () => {
  const classes = useStyles();
  const { seconds, minutes, hours, days } = useTimer({
    expiryTimestamp: new Date('03/11/22'),
  });

  return (
    <section
      style={{
        padding: '10rem 5%',
        background: 'radial-gradient(#353535, #070707)',
      }}
    >
      <Typography variant='h3' align='center' style={{ marginBottom: '5rem' }}>
        Countdown to{' '}
        <span style={{ color: theme.palette.primary.main }}>launch</span>
      </Typography>
      <Stack direction='row' spacing={4} justifyContent='center'>
        <ProgressCircle value={(hours / 24) * 100}>
          <Typography className={classes.countdownValue} variant='h2'>
            {days}
          </Typography>
          <Typography className={classes.countdownLabel}>Days</Typography>
        </ProgressCircle>

        <ProgressCircle value={((minutes + seconds / 60) / 60) * 100}>
          <Typography className={classes.countdownValue} variant='h2'>
            {hours}
          </Typography>
          <Typography className={classes.countdownLabel}>Hours</Typography>
        </ProgressCircle>

        <ProgressCircle value={(seconds / 60) * 100}>
          <Typography className={classes.countdownValue} variant='h2'>
            {minutes}
          </Typography>
          <Typography className={classes.countdownLabel}>Minutes</Typography>
        </ProgressCircle>
      </Stack>
    </section>
  );
};

export default HomeCountdown;
